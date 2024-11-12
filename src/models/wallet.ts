import { getUtxoBalance } from "@/utils/psbtBuild";
import { checkAddressType, formatSat } from "@/utils/utils";
import { useCallback, useEffect, useState } from "react";
export type Network = "mainnet" | "testnet";
type WalletName = "metalet";
const { metaidwallet } = window;
const checkExtension = () => {
  if (!window.metaidwallet) {
    window.open(
      "https://chromewebstore.google.com/detail/metalet/lbjapbcmmceacocpimbpbidpgmlmoaao"
    );
    return false;
  }
  return true;
};
export default () => {
  const [walletName, setWalletName] = useState<WalletName>("metalet");
  const [mvcAddress, setMVCAddress] = useState<string>();
  const [btcAddress, setBTCAddress] = useState<string>();
  const [loginModalShow, setLoginModalShow] = useState<boolean>(false);
  const [network, setNetwork] = useState<Network>("mainnet");
  const [connected, setConnected] = useState<boolean>(false);
  const [userBal, setUserBal] = useState<Record<string, any>>({});

  const connect = async () => {
    if (!checkExtension()) return;
    const isConnected = await window.metaidwallet.isConnected();
    console.log(isConnected, "isConnected");
    if (isConnected.status === "locked") {
      throw new Error("unlock first");
    }
    if (!isConnected) {
      const ret = await window.metaidwallet.connect();
      console.log(ret);
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
    const ret = await window.metaidwallet.disconnect();
    if (ret.status === "canceled") return;
    setConnected(false);
    setMVCAddress("");
    setBTCAddress("");
    setUserBal({});
  };
  const getBal = useCallback(async () => {
    if (network && connected) {
      //btc
      const btcBal = await getUtxoBalance();
      const tokens = await window.metaidwallet.token.getBalance();
      const _bals: Record<string, any> = {
        btc: formatSat(btcBal),
      };
      tokens.forEach((item: any) => {
        const balance =
          BigInt(item.confirmedString) + BigInt(item.unconfirmedString);
        _bals[item.genesis as string] = formatSat(
          balance.toString(),
          item.decimal
        );
      });
      setUserBal(_bals);
    }
  }, [network, connected]);
  const init = useCallback(async () => {
    if (walletName === "metalet" && window.metaidwallet) {
      const isConnected = await window.metaidwallet.isConnected();
      if (isConnected === true) {
        const _mvc = await window.metaidwallet.getAddress();
        const { network } = await window.metaidwallet.getNetwork();
        const btcAddress = await window.metaidwallet.btc.getAddress();
        const { pass, message } = checkAddressType(btcAddress);
        if (!pass) {
          return { pass, message };
        }
        setConnected(true);
        setMVCAddress(_mvc);
        setNetwork(network);
        setBTCAddress(btcAddress);
        getBal();
        return { pass, message };
      }
    }
    return { pass: true, message: "" };
  }, [walletName]);
  useEffect(() => {
    //
    setTimeout(() => {
      init();
    }, 500);
  }, [init]);
  useEffect(() => {
    getBal();
  }, [getBal]);

  useEffect(() => {
    const handleAccountChange = (newAccount: any) => {
      init();
    };
    const handleNetChange = (network: string) => {
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
  }, [walletName, connected]);

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
