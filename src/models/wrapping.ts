import { useModel } from "umi";
import { useCallback, useEffect, useState } from "react";
import { getAssets } from "@/servies/api";
import useIntervalAsync from "@/hooks/useIntervalAsync";
import btc from "@/assets/btc.png";
import mvc from "@/assets/mvc.png";
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
  const [fromChain, setFromChain] = useState<Chain>(defaultChains[0]);
  const [toChain, setToChain] = useState<Chain>(defaultChains[1]);
  const [asset, setAsset] = useState<API.AssetItem>();
  const [assets, setAssets] = useState<API.AssetItem[]>([]);
  const [protocolType, setProtocolType] = useState<Protocol>("btc");
  const [AssetsInfo, setAssetsInfo] = useState<API.AssetsData>();
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
      if (protocolType === "btc") {
        const find = AssetsInfo.assetList.find(
          (item) => item.network === "BTC"
        );
        const assets = AssetsInfo.assetList.filter(
          (item) => item.network === "BTC"
        );
        setAssets(assets);
        if (find) {
          setAsset(find);
        }
      }
      if (protocolType === "brc20") {
        const find = AssetsInfo.assetList.find(
          (item) => item.network === "BRC20"
        );
        const assets = AssetsInfo.assetList.filter(
          (item) => item.network === "BRC20"
        );
        setAssets(assets);
        if (find) {
          setAsset(find);
        }
      }

      if (protocolType === "runes") {
        const find = AssetsInfo.assetList.find(
          (item) => item.network === "RUNES"
        );
        const assets = AssetsInfo.assetList.filter(
          (item) => item.network === "RUNES"
        );
        setAssets(assets);
        if (find) {
          setAsset(find);
        }
      }
    }
  }, [AssetsInfo, protocolType]);

  const updateAssets: any = useIntervalAsync(fetchAssets, 90000);
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
  };
};
