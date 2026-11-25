import { useModel } from "umi";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getAssets, getFeeQuote } from "@/servies/api";
import useIntervalAsync from "@/hooks/useIntervalAsync";
import btc from "@/assets/btc.png";
import mvc from "@/assets/mvc.png";
import { FeeInfo } from "@/utils/utils";

export type Chain = {
  key: string;
  label: string;
  icon: string;
};

export type Protocol = "btc" | "mrc20";

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
  const { network, feeRate } = useModel("wallet");
  const [chains] = useState<Chain[]>(defaultChains);
  const [chainType, setChainType] = useState<"from" | "to">();
  const [fromChain, setFromChain] = useState<Chain>(defaultChains[0]);
  const [toChain, setToChain] = useState<Chain>(defaultChains[1]);
  const [asset, setAsset] = useState<API.AssetItem>();
  const [assets, setAssets] = useState<API.AssetItem[]>([]);
  const [protocolType, setProtocolType] = useState<Protocol>("btc");
  const [AssetsInfo, setAssetsInfo] = useState<API.AssetsData>();
  const [feeQuote, setFeeQuote] = useState<API.FeeQuoteData>();
  const [amount, setAmount] = useState<number | string>("");
  const [reciveAmount, setReciveAmount] = useState<number | string>("");
  const [ErrorMsg, setErrorMsg] = useState("");
  const [mrc20Info, setMrc20Info] = useState<API.Mrc20BalItem[]>();
  const [feeInfo, setFeeInfo] = useState<FeeInfo>({
    minerFee: "",
    bridgeFee: "",
    receiveAmount: "",
    totalFee: "",
    confirmNumber: "",
  });
  const [refetchAssets, setRefetchAssets] = useState(false);

  const bridgeType: "mint" | "redeem" = useMemo(() => {
    if (fromChain.key === "btc") return "mint";
    return "redeem";
  }, [fromChain]);

  useEffect(() => {
    let didCancel = false;
    const fetchAssets = async () => {
      if (network) {
        try {
          const ret = await getAssets(network);
          if (!didCancel && ret?.data) {
            setAssetsInfo(ret.data);
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchAssets();
    return () => {
      didCancel = true;
    };
  }, [network, refetchAssets]);

  useEffect(() => {
    if (AssetsInfo) {
      // Price-decoupled filtering: never drop MRC20 tokens whose price is 0 or undefined!
      const filtered = (AssetsInfo.assetList || [])
        .filter((item) => item.network === protocolType.toUpperCase())
        .map((item) => {
          const copy = { ...item };
          copy.originName = copy.originName || copy.originSymbol;
          copy.targetName = copy.targetName || copy.targetSymbol;
          if (copy.network === "BTC") {
            copy.targetName = "WBTC";
          }
          return copy;
        });

      setAssets(filtered);
      if (filtered.length > 0) {
        setAsset((prev) => {
          if (prev) {
            const find = filtered.find(
              (item) => item.targetTokenId === prev.targetTokenId
            );
            if (find) return find;
          }
          return filtered[0];
        });
      } else {
        setAsset(undefined);
      }
    }
  }, [AssetsInfo, protocolType]);

  useEffect(() => {
    let didCancel = false;
    const timer = window.setTimeout(async () => {
      if (!network) return;
      const assetNetwork: "BTC" | "MRC20" =
        protocolType === "btc" ? "BTC" : "MRC20";
      try {
        const ret = await getFeeQuote(network, {
          network: assetNetwork,
          direction: bridgeType,
          originTokenId: asset?.originTokenId,
          btcFeeRate: feeRate,
        });
        if (!didCancel && ret?.data) {
          setFeeQuote(ret.data);
        }
      } catch (err) {
        console.log("getFeeQuote error:", err);
      }
    }, 150);
    return () => {
      didCancel = true;
      window.clearTimeout(timer);
    };
  }, [network, protocolType, bridgeType, asset?.originTokenId, feeRate, refetchAssets]);

  const handleRefetchAssets = useCallback(async () => {
    setRefetchAssets((prev) => !prev);
  }, []);

  const updateAssets: any = useIntervalAsync(handleRefetchAssets, 20000);

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
  };

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
    feeQuote,
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
    resetInput,
    bridgeType,
    mrc20Info,
    setMrc20Info,
  };
};
