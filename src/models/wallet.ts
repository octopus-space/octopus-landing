import { getUtxoBalance } from "@/utils/psbtBuild";
import {
  checkAddressType,
  formatSat,
  normalizeWalletNetwork,
  withTimeout,
} from "@/utils/utils";
import { useCallback, useEffect, useRef, useState } from "react";

export type Network = "mainnet" | "testnet";
type WalletName = "metalet";

const checkExtension = () => {
  if (!window.metaidwallet) {
    window.open(
      "https://chromewebstore.google.com/detail/metalet/lbjapbcmmceacocpimbpbidpgmlmoaao"
    );
    return false;
  }
  return true;
};

async function fetchMvcSpaceSats(): Promise<number> {
  if (!window.metaidwallet) return 0;
  try {
    if (typeof window.metaidwallet.getMvcBalance === "function") {
      const bal = await withTimeout(
        window.metaidwallet.getMvcBalance(),
        5000,
        "getMvcBalance"
      );
      const sum = Number(bal?.confirmed ?? 0) + Number(bal?.unconfirmed ?? 0);
      return sum > 0 ? sum : Number(bal?.total ?? 0);
    }
    if (typeof window.metaidwallet.getBalance === "function") {
      const bal = await withTimeout(
        window.metaidwallet.getBalance(),
        5000,
        "getBalance"
      );
      const sum = Number(bal?.confirmed ?? 0) + Number(bal?.unconfirmed ?? 0);
      return sum > 0 ? sum : Number(bal?.total ?? 0);
    }
    if (typeof window.metaidwallet.getUtxos === "function") {
      const utxos = await withTimeout(
        window.metaidwallet.getUtxos(),
        5000,
        "getUtxos"
      );
      if (Array.isArray(utxos)) {
        return utxos.reduce(
          (acc, u) => acc + Number(u?.satoshis ?? u?.satoshi ?? u?.value ?? 0),
          0
        );
      }
    }
  } catch (err) {
    console.log("fetchMvcSpaceSats error:", err);
  }
  return 0;
}

export default () => {
  const [walletName] = useState<WalletName>("metalet");
  const [mvcAddress, setMVCAddress] = useState<string>();
  const [btcAddress, setBTCAddress] = useState<string>();
  const [loginModalShow, setLoginModalShow] = useState<boolean>(false);
  const [network, setNetwork] = useState<Network>("mainnet");
  const [connected, setConnected] = useState<boolean>(false);
  const [userBal, setUserBal] = useState<Record<string, any>>({});

  const btcAddrRef = useRef<string | undefined>(undefined);
  const networkRef = useRef<Network>("mainnet");
  btcAddrRef.current = btcAddress;
  networkRef.current = network;

  const getBal = useCallback(
    async (
      forceConnected?: boolean,
      addrOverride?: string,
      netOverride?: Network
    ) => {
      if (!window.metaidwallet) return;
      if (!(forceConnected || connected)) return;

      const targetAddr = addrOverride || btcAddrRef.current;
      const targetNet = netOverride || networkRef.current || "mainnet";

      try {
        const [btcSats, spaceSats, tokens] = await Promise.all([
          getUtxoBalance(targetAddr, targetNet).catch(() => 0),
          fetchMvcSpaceSats().catch(() => 0),
          window.metaidwallet.token?.getBalance
            ? withTimeout(
                window.metaidwallet.token.getBalance(),
                5000,
                "token.getBalance"
              ).catch(() => [])
            : Promise.resolve([]),
        ]);

        if (targetAddr && btcAddrRef.current && targetAddr !== btcAddrRef.current) {
          return;
        }

        const _bals: Record<string, any> = {
          btc: formatSat(btcSats, 8),
          btcSats: Number(btcSats || 0),
          space: formatSat(spaceSats, 8),
          spaceSats: Number(spaceSats || 0),
        };
        if (Array.isArray(tokens)) {
          tokens.forEach((item: any) => {
            const balance =
              BigInt(item.confirmedString || "0") +
              BigInt(item.unconfirmedString || "0");
            _bals[item.genesis as string] = formatSat(
              balance.toString(),
              item.decimal
            );
            _bals[`raw_${item.genesis}`] = balance.toString();
          });
        }
        setUserBal(_bals);
      } catch (err) {
        console.log("getBal error:", err);
      }
    },
    [connected]
  );

  const init = useCallback(
    async (skipIsConnectedCheck = false) => {
      if (walletName === "metalet" && window.metaidwallet) {
        let isConn: any = skipIsConnectedCheck ? true : false;
        if (!skipIsConnectedCheck) {
          isConn = await withTimeout(
            window.metaidwallet.isConnected(),
            4000,
            "isConnected"
          ).catch(() => false);
        }
        if (isConn === true) {
          const [_mvc, netInfo, _btcAddress]: any[] = await Promise.all([
            withTimeout(window.metaidwallet.getAddress(), 5000, "getAddress"),
            withTimeout(window.metaidwallet.getNetwork(), 5000, "getNetwork"),
            withTimeout(
              window.metaidwallet.btc.getAddress(),
              5000,
              "btc.getAddress"
            ),
          ]);

          if (typeof _btcAddress !== "string" || !_btcAddress) {
            return {
              pass: false,
              message:
                _btcAddress?.status || "Failed to read BTC address from wallet",
            };
          }

          const { pass, message } = checkAddressType(_btcAddress);
          if (!pass) {
            return { pass, message };
          }

          const normNet = normalizeWalletNetwork(netInfo?.network);
          btcAddrRef.current = _btcAddress;
          networkRef.current = normNet;

          setMVCAddress(typeof _mvc === "string" ? _mvc : "");
          setNetwork(normNet);
          setBTCAddress(_btcAddress);
          setConnected(true);
          setLoginModalShow(false);

          // Fetch balances asynchronously so login & modal dismissal never block!
          void getBal(true, _btcAddress, normNet);
          return { pass: true, message: "" };
        }
      }
      return { pass: true, message: "" };
    },
    [walletName, getBal]
  );

  const connect = async () => {
    if (!checkExtension()) return;
    const isConnected: any = await withTimeout(
      window.metaidwallet.isConnected(),
      4000,
      "isConnected"
    ).catch(() => false);

    if (isConnected && typeof isConnected === "object" && isConnected.status === "locked") {
      throw new Error("Please unlock Metalet Wallet first");
    }

    if (isConnected !== true) {
      const ret: any = await window.metaidwallet.connect();
      if (ret && ret.status) {
        throw new Error(ret.status);
      }
    }

    const { pass, message } = await init(true);
    if (!pass) {
      throw new Error(message || "Failed to connect wallet");
    }
    setLoginModalShow(false);
  };

  const disConnect = async () => {
    if (!checkExtension()) return;
    if (window.metaidwallet.disconnect) {
      const ret = await window.metaidwallet.disconnect().catch(() => null);
      if (ret?.status === "canceled") return;
    }
    btcAddrRef.current = undefined;
    setConnected(false);
    setMVCAddress("");
    setBTCAddress("");
    setUserBal({});
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      init();
    }, 300);
    return () => clearTimeout(timer);
  }, [init]);

  useEffect(() => {
    if (connected && btcAddress) {
      void getBal(true, btcAddress, network);
    }
  }, [network, connected, btcAddress, getBal]);

  useEffect(() => {
    const handleAccountChange = () => {
      void init();
    };
    const handleNetChange = () => {
      void init();
    };
    if (walletName === "metalet" && window.metaidwallet) {
      window.metaidwallet.on("accountsChanged", handleAccountChange);
      window.metaidwallet.on("networkChanged", handleNetChange);
    }

    return () => {
      if (walletName === "metalet" && window.metaidwallet) {
        window.metaidwallet.removeListener(
          "accountsChanged",
          handleAccountChange
        );
        window.metaidwallet.removeListener("networkChanged", handleNetChange);
      }
    };
  }, [walletName, init]);

  return {
    mvcAddress,
    btcAddress,
    network,
    connected,
    connect,
    userBal,
    setLoginModalShow,
    loginModalShow,
    disConnect,
    getBal,
  };
};
