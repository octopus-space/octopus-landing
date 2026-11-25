import { Network } from "@/models/wallet";
import { request } from "umi";

const trimTrailingSlash = (url: string) => url.replace(/\/+$/, "");

export const getHost = (network: Network) => {
  if (network === "testnet") {
    return trimTrailingSlash(
      process.env.UMI_APP_BRIDGE_API_TESTNET ||
        "https://api.octopus.space/api-bridge-testnet"
    );
  }
  return trimTrailingSlash(
    process.env.UMI_APP_BRIDGE_API_MAINNET ||
      "https://api.octopus.space/api-bridge-v3"
  );
};

export async function getAssets(
  network: Network,
  options?: { [key: string]: any }
) {
  return request<API.Ret<API.AssetsData>>(`${getHost(network)}/assetList`, {
    method: "GET",
    ...(options || {}),
  });
}

export async function getRecommendedFees(
  network: Network,
  options?: { [key: string]: any }
) {
  return request<API.Ret<API.RecommendedFees>>(
    `${getHost(network)}/common/fee/recommended`,
    {
      method: "GET",
      ...(options || {}),
    }
  );
}

export async function getFeeQuote(
  network: Network,
  params: {
    network: "BTC" | "MRC20";
    direction: "mint" | "redeem";
    originTokenId?: string;
    btcFeeRate?: number;
  },
  options?: { [key: string]: any }
) {
  return request<API.Ret<API.FeeQuoteData>>(`${getHost(network)}/feeQuote`, {
    method: "GET",
    params,
    ...(options || {}),
  });
}

export async function createPrepayOrderMintBtc(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
      btcFeeSats?: number;
      btcFeeAddress?: string;
      bridgeRuleServiceAddress?: string;
      bridgeRuleServiceMintFee?: number;
      confirmNumber?: number;
      receiveAmount?: string;
      feeAmount?: string;
    }>
  >(`${getHost(network)}/createPrepayOrderMintBtc`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function submitPrepayOrderMintBtc(
  network: Network,
  data: { orderId: string; txHex: string },
  options?: { [key: string]: any }
) {
  return request<API.Ret<{ orderId?: string; bridgeAddress?: string }>>(
    `${getHost(network)}/submitPrepayOrderMintBtc`,
    {
      method: "POST",
      data,
      ...(options || {}),
    }
  );
}

export async function createPrepayOrderMintMrc20(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
      btcFeeSats?: number;
      btcFeeAddress?: string;
      bridgeRuleServiceAddress?: string;
      bridgeRuleServiceMintFee?: number;
      confirmNumber?: number;
      receiveAmount?: string;
      feeAmount?: string;
    }>
  >(`${getHost(network)}/createPrepayOrderMintMrc20`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function submitPrepayOrderMintMrc20(
  network: Network,
  data: { orderId: string; txHexList: string[] },
  options?: { [key: string]: any }
) {
  return request<API.Ret<{ orderId?: string; bridgeAddress?: string }>>(
    `${getHost(network)}/submitPrepayOrderMintMrc20`,
    {
      method: "POST",
      data,
      ...(options || {}),
    }
  );
}

export async function createPrepayOrderRedeemBtc(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
      mvcFeeSats?: number;
      mvcFeeAddress?: string;
      btcFeeSats?: number;
      btcFeeAddress?: string;
      confirmNumber?: number;
      receiveAmount?: string;
      feeAmount?: string;
    }>
  >(`${getHost(network)}/createPrepayOrderRedeemBtc`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function submitPrepayOrderRedeemBtc(
  network: Network,
  data: {
    orderId: string;
    txid: string;
    txHexList?: string[];
    mvcFeeTxHex?: string;
    btcFeeTxHex?: string;
  },
  options?: { [key: string]: any }
) {
  return request<API.Ret<{ orderId?: string; bridgeAddress?: string }>>(
    `${getHost(network)}/submitPrepayOrderRedeemBtc`,
    {
      method: "POST",
      data,
      ...(options || {}),
    }
  );
}

export async function createPrepayOrderRedeemMrc20(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
      mvcFeeSats?: number;
      mvcFeeAddress?: string;
      btcFeeSats?: number;
      btcFeeAddress?: string;
      confirmNumber?: number;
      receiveAmount?: string;
      feeAmount?: string;
    }>
  >(`${getHost(network)}/createPrepayOrderRedeemMrc20`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function submitPrepayOrderRedeemMrc20(
  network: Network,
  data: {
    orderId: string;
    txid: string;
    txHexList?: string[];
    mvcFeeTxHex?: string;
    btcFeeTxHex?: string;
  },
  options?: { [key: string]: any }
) {
  return request<API.Ret<{ orderId?: string; bridgeAddress?: string }>>(
    `${getHost(network)}/submitPrepayOrderRedeemMrc20`,
    {
      method: "POST",
      data,
      ...(options || {}),
    }
  );
}

export async function getBridgeHistory(
  network: Network,
  params: {
    type: string;
    cursor: number;
    size: number;
    order: string;
    address: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ txList: API.HsitoryDetail[] }>(
    `${getHost(network)}/queryTransactionsByAddress`,
    {
      method: "GET",
      params,
      ...(options || {}),
    }
  );
}

export async function getSafeBtcUtxos(
  address: string,
  network: Network,
  useUnconfirmed: boolean = true
) {
  return request<
    API.Ret<{
      list: API.UTXO[];
      total: number;
      totalSats: number;
    }>
  >(`${getHost(network)}/common/btc/address/utxo`, {
    method: "GET",
    params: {
      address,
      unconfirmed: useUnconfirmed ? "1" : "0",
    },
  });
}

export async function getUserMrc20Balance(
  address: string,
  network: Network,
  tickId: string,
  cursor: number = 0,
  size: number = 50
) {
  return request<API.ListRet<API.MRC20Item>>(
    `${getHost(network)}/common/mrc20/address/utxo`,
    {
      method: "GET",
      params: {
        address,
        tickId,
        cursor: cursor * size,
        size,
        net: network === "mainnet" ? "livenet" : "testnet",
        source: "mrc20-v2",
      },
    }
  );
}

export async function getUserMrc20Balances(
  address: string,
  network: Network,
  cursor: number = 0,
  size: number = 50
) {
  return request<API.ListRet<API.Mrc20BalItem>>(
    `${getHost(network)}/common/mrc20/address/balance-list`,
    {
      method: "GET",
      params: {
        address,
        cursor: cursor * size,
        size,
        net: network === "mainnet" ? "livenet" : "testnet",
        source: "mrc20-v2",
      },
    }
  );
}
