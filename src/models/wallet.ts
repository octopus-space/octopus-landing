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
    const isConnected = await metaidwallet.isConnected();
    console.log(isConnected, "isConnected");
    if (!isConnected) {
      const ret = await window.metaidwallet.connect();
      console.log(ret);
    }
    await init();
  };

  const disConnect = async () => {
    if (!checkExtension()) return;
    const ret = await metaidwallet.disconnect();
    setConnected(false);
    setMVCAddress('');
    setBTCAddress('');
    setUserBal({});
  };
  const getBal = useCallback(async () => {
    if (network && connected) {
      //btc
      const btcBal = await metaidwallet.btc.getBalance(network);
      const tokens = await metaidwallet.token.getBalance();
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
    if (walletName === "metalet" && metaidwallet) {
      const isConnected = await metaidwallet.isConnected();
      if (isConnected) {
        const _mvc = await metaidwallet.getAddress();
        const { network } = await metaidwallet.getNetwork();
        const btcAddress = await metaidwallet.btc.getAddress();
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
    if (walletName === "metalet" && metaidwallet) {
      metaidwallet.on("accountsChanged", handleAccountChange);
      metaidwallet.on("networkChanged", handleNetChange);
    }

    return () => {
      if (walletName === "metalet" && metaidwallet) {
        metaidwallet.removeListener("accountsChanged", handleAccountChange);
        metaidwallet.removeListener("networkChanged", handleNetChange);
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
  };
};
