import { useModel } from "umi";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getAssets } from "@/servies/api";
import useIntervalAsync from "@/hooks/useIntervalAsync";
import btc from "@/assets/btc.png";
import mvc from "@/assets/mvc.png";
import { FeeInfo } from "@/utils/utils";
export type Chain = {
  key: string;
  label: string;
  icon: string;
};
export type Protocol = "btc" | "brc20" | "arc20" | "runes" | "mrc20";
const defaultChains: Chain[] = [
  {
    key: "btc",
    label: "BTC Network",
    icon: btc,
  },
  {
    key: "mvc",
    label: "MVC Network",
    icon: mvc,
  },
];

export default () => {
  const { network } = useModel("wallet");
  const [chains, setChains] = useState<Chain[]>(defaultChains);
  const [chainType, setChainType] = useState<"from" | "to">();
  const [fromChain, setFromChain] = useState<Chain>(defaultChains[0]);
  const [toChain, setToChain] = useState<Chain>(defaultChains[1]);
  const [asset, setAsset] = useState<API.AssetItem>();
  const [assets, setAssets] = useState<API.AssetItem[]>([]);
  const [protocolType, setProtocolType] = useState<Protocol>("btc");
  const [AssetsInfo, setAssetsInfo] = useState<API.AssetsData>();
  const [amount, setAmount] = useState<number | string>("");
  const [reciveAmount, setReciveAmount] = useState<number | string>("");
  const [ErrorMsg, setErrorMsg] = useState("");
  const [brc20Info, setBrc20Info] = useState<API.BRC20Info>();
  const [mrc20Info, setMrc20Info] = useState<API.Mrc20BalItem[]>();
  const [runesInfo, setRunesInfo] = useState<API.RUNESItem>();
  const [inscription, setInscription] = useState<API.TransferbleBRC20>();
  const [feeInfo, setFeeInfo] = useState<FeeInfo>({
    minerFee: "",
    bridgeFee: "",
    receiveAmount: "",
    totalFee: "",
    confirmNumber: "",
  });
  const fetchAssets = useCallback(
    async (retry: boolean = true) => {
      if (network) {
        try {
          const ret = await getAssets(network);
          setAssetsInfo(ret.data);
        } catch (err: any) {
          console.log(err);
          if (
            err.message === "Request failed with status code 500" &&
            retry === true
          ) {
            fetchAssets(false);
          }
        }
      }
    },
    [network]
  );

  useEffect(() => {
    if (AssetsInfo) {
      let assets: API.AssetItem[] = [];
      assets = AssetsInfo.assetList
        .filter((item) => item.network === protocolType.toUpperCase())
        .map((item) => {
          item.originName = item.originName || item.originSymbol;
          item.targetName = item.targetName || item.targetSymbol;
          return item;
        });
      if (assets.length > 0) {
        setAssets(assets);
        setAsset((prev) => {
          if (prev) {
            const find = assets.find(
              (item) => item.targetTokenId === prev.targetTokenId
            );
            if (find) return find;
          }
          return assets[0];
        });
      }
    }
  }, [AssetsInfo, protocolType]);

  const updateAssets: any = useIntervalAsync(fetchAssets, 20000);

  const resetInput = () => {
    setAmount("");
    setReciveAmount("");
    setFeeInfo({
      minerFee: "",
      bridgeFee: "",
      receiveAmount: "",
      totalFee: "",
      confirmNumber: "",
    });
    setErrorMsg("");
    setInscription(undefined);
  };
  const bridgeType: "mint" | "redeem" = useMemo(() => {
    if (fromChain.key === "btc") return "mint";
    return "redeem";
  }, [fromChain]);

  return {
    updateAssets,
    chains,
    fromChain,
    toChain,
    setFromChain,
    setToChain,
    asset,
    protocolType,
    setProtocolType,
    AssetsInfo,
    assets,
    setAsset,
    chainType,
    setChainType,
    amount,
    setAmount,
    reciveAmount,
    setReciveAmount,
    feeInfo,
    setFeeInfo,
    ErrorMsg,
    setErrorMsg,
    inscription,
    setInscription,
    resetInput,
    bridgeType,
    brc20Info,
    setBrc20Info,
    runesInfo,
    setRunesInfo,
    mrc20Info,
    setMrc20Info,
  };
};
