import { getUtxoBalance } from "@/utils/psbtBuild";
import { checkAddressType, formatSat } from "@/utils/utils";
import { useCallback, useEffect, useState } from "react";

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
      const bal = await window.metaidwallet.getMvcBalance();
      const sum = Number(bal?.confirmed ?? 0) + Number(bal?.unconfirmed ?? 0);
      return sum > 0 ? sum : Number(bal?.total ?? 0);
    }
    if (typeof window.metaidwallet.getBalance === "function") {
      const bal = await window.metaidwallet.getBalance();
      const sum = Number(bal?.confirmed ?? 0) + Number(bal?.unconfirmed ?? 0);
      return sum > 0 ? sum : Number(bal?.total ?? 0);
    }
    if (typeof window.metaidwallet.getUtxos === "function") {
      const utxos = await window.metaidwallet.getUtxos();
      if (Array.isArray(utxos)) {
        return utxos.reduce(
          (acc, u) => acc + Number(u?.satoshis ?? u?.satoshi ?? 0),
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

  const getBal = useCallback(
    async (forceConnected?: boolean) => {
      if (!window.metaidwallet) return;
      if (!(forceConnected || connected)) return;
      try {
        const [btcSats, spaceSats, tokens] = await Promise.all([
          getUtxoBalance().catch(() => 0),
          fetchMvcSpaceSats(),
          window.metaidwallet.token.getBalance().catch(() => []),
        ]);
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

  const init = useCallback(async () => {
    if (walletName === "metalet" && window.metaidwallet) {
      const isConnected = await window.metaidwallet.isConnected();
      if (isConnected === true) {
        const _mvc = await window.metaidwallet.getAddress();
        const { network: walletNet } = await window.metaidwallet.getNetwork();
        const _btcAddress = await window.metaidwallet.btc.getAddress();
        const { pass, message } = checkAddressType(_btcAddress);
        if (!pass) {
          return { pass, message };
        }
        setConnected(true);
        setMVCAddress(_mvc);
        setNetwork(walletNet);
        setBTCAddress(_btcAddress);
        await getBal(true);
        return { pass, message };
      }
    }
    return { pass: true, message: "" };
  }, [walletName, getBal]);

  const connect = async () => {
    if (!checkExtension()) return;
    const isConnected: any = await window.metaidwallet.isConnected();
    if (isConnected && isConnected.status === "locked") {
      throw new Error("unlock first");
    }
    if (!isConnected) {
      const ret = await window.metaidwallet.connect();
      if (ret.status) {
        throw new Error(ret.status);
      }
    }
    const { pass, message } = await init();
    if (!pass) {
      throw new Error(message);
    }
  };

  const disConnect = async () => {
    if (!checkExtension()) return;
    if (window.metaidwallet.disconnect) {
      const ret = await window.metaidwallet.disconnect();
      if (ret?.status === "canceled") return;
    }
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
    if (connected) {
      getBal(true);
    }
  }, [network, connected, getBal]);

  useEffect(() => {
    const handleAccountChange = () => {
      init();
    };
    const handleNetChange = () => {
      init();
    };
    if (walletName === "metalet" && window.metaidwallet && connected) {
      window.metaidwallet.on("accountsChanged", handleAccountChange);
      window.metaidwallet.on("networkChanged", handleNetChange);
    }

    return () => {
      if (walletName === "metalet" && window.metaidwallet && connected) {
        window.metaidwallet.removeListener(
          "accountsChanged",
          handleAccountChange
        );
        window.metaidwallet.removeListener("networkChanged", handleNetChange);
      }
    };
  }, [walletName, connected, init]);

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
