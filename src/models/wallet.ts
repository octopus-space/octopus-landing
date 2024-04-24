import { formatSat } from "@/utils/utils";
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
  const [network, setNetwork] = useState<Network>("testnet");
  const [connected, setConnected] = useState<boolean>(false);
  const [userBal, setUserBal] = useState<Record<string, any>>({});

  const connect = async () => {
    if (!checkExtension()) return;
    const isConnected = await window.metaidwallet.isConnected();
    console.log(isConnected, "isConnected");
    if (!isConnected) {
      const ret = await window.metaidwallet.connect();
      console.log(ret);
    }
    await init();
  };

  const disConnect = async () => {
    if (!checkExtension()) return;
    const ret = await window.metaidwallet.disconnect();
    setConnected(false);
    setMVCAddress('');
    setBTCAddress('');
    setUserBal({});
  };
  const getBal = useCallback(async () => {
    if (network && connected) {
      //btc
      const btcBal = await window.metaidwallet.btc.getBalance(network);
      const tokens = await window.metaidwallet.token.getBalance();
      const _bals: Record<string, any> = {
        btc: formatSat(btcBal.total),
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
      if (isConnected) {
        const _mvc = await window.metaidwallet.getAddress();
        const { network } = await window.metaidwallet.getNetwork();
        const btcAddress = await window.metaidwallet.btc.getAddress();
        setConnected(true);
        setMVCAddress(_mvc);
        setNetwork(network);
        setBTCAddress(btcAddress);
        getBal();
      }
    }
  }, [walletName]);
  useEffect(() => {
    init();
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
    if (walletName === "metalet" && window.metaidwallet) {
      window.metaidwallet.on("accountsChanged", handleAccountChange);
      window.metaidwallet.on("networkChanged", handleNetChange);
    }

    return () => {
      if (walletName === "metalet" && window.metaidwallet) {
        window.metaidwallet.removeListener("accountsChanged", handleAccountChange);
        window.metaidwallet.removeListener("networkChanged", handleNetChange);
      }
    };
  }, [walletName]);

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
    getBal
  };
};
