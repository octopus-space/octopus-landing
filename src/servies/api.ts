import { Network } from "@/models/wallet";
import { request } from "umi";

const getHost = (network: Network) => {
  if (network === "mainnet") return "https://api.octopus.space/api-bridge-v3";
  if (network === "testnet")
    return "https://api.octopus.space/api-bridge-testnet";
};

const getOrdersHost = (network: Network) => {
  if (network === "mainnet")
    return "https://api.octopus.space/api-bridge-repost";
  if (network === "testnet")
    return "https://api.octopus.space/api-bridge-repost-testnet";
};

// assetList
export async function getAssets(
  network: Network,
  options?: { [key: string]: any }
) {
  return request<API.Ret<API.AssetsData>>(`${getHost(network)}/assetList`, {
    method: "GET",
    ...(options || {}),
  });
}

// orders
export async function createPrepayOrderRedeemBtc(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
    }>
  >(`${getHost(network)}/createPrepayOrderRedeemBtc`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function createPrepayOrderRedeemBrc20(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
    }>
  >(`${getHost(network)}/createPrepayOrderRedeemBrc20`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function submitPrepayOrderRedeemBtc(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
    }>
  >(`${getHost(network)}/submitPrepayOrderRedeemBtc`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function submitPrepayOrderRedeemBrc20(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
    }>
  >(`${getHost(network)}/submitPrepayOrderRedeemBrc20`, {
    method: "POST",
    data,
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
      bridgeRuleServiceAddress?: string
      bridgeRuleServiceMintFee?: number
    }>
  >(`${getOrdersHost(network)}/bridge/createPrepayOrderMintBtc`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function createPrepayOrderMintBRC20(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
    }>
  >(`${getHost(network)}/createPrepayOrderMintBRC20`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function submitPrepayOrderMintBtc(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
    }>
  >(`${getOrdersHost(network)}/bridge/submitPrepayOrderMintBtc`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function submitPrepayOrderMintBrc20(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
    }>
  >(`${getHost(network)}/submitPrepayOrderMintBrc20`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function createPrepayOrderMintRunes(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
    }>
  >(`${getHost(network)}/createPrepayOrderMintRunes`, {
    method: "POST",
    data,
    ...(options || {}),
  });
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
      bridgeRuleServiceAddress?: string
      bridgeRuleServiceMintFee?: number
    }>
  >(`${getOrdersHost(network)}/bridge/createPrepayOrderMintMrc20`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}
export async function submitPrepayOrderMintRunes(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
    }>
  >(`${getHost(network)}/submitPrepayOrderMintRunes`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function createPrepayOrderRedeemRunes(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
    }>
  >(`${getHost(network)}/createPrepayOrderRedeemRunes`, {
    method: "POST",
    data,
    ...(options || {}),
  });
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
    }>
  >(`${getHost(network)}/createPrepayOrderRedeemMrc20`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function submitPrepayOrderRedeemRunes(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
    }>
  >(`${getHost(network)}/submitPrepayOrderRedeemRunes`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function submitPrepayOrderRedeemMrc20(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
    }>
  >(`${getHost(network)}/submitPrepayOrderRedeemMrc20`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}

export async function submitPrepayOrderMintMrc20(
  network: Network,
  data: any,
  options?: { [key: string]: any }
) {
  return request<
    API.Ret<{
      orderId: string;
      bridgeAddress: string;
    }>
  >(`${getOrdersHost(network)}/bridge/submitPrepayOrderMintMrc20`, {
    method: "POST",
    data,
    ...(options || {}),
  });
}
// history
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

// TODO need replace with new api

export async function fetchRunesUtxos(
  address: string,
  runeId: string,
  network: Network,
  offset: number = 0,
  limit: number = 50
) {
  return request<API.Ret<{ list: API.UTXO[] }>>(
    getOrdersHost(network) + "/common/runes/address/utxo",
    {
      method: "GET",
      params: {
        address: address,
        runeId: runeId,
        offset: offset,
        limit: limit,
        net: network === "mainnet" ? "livenet" : "testnet",
      },
    }
  );
}

export async function getUserRunesBalance(
  address: string,
  network: Network,
  runeId: string
) {
  return request<API.Ret<API.RUNESItem>>(
    getOrdersHost(network) + "/common/runes/address/balance-info",
    {
      method: "GET",
      params: {
        address,
        runeId,
        net: network === "mainnet" ? "livenet" : "testnet",
      },
    }
  );
}

export async function getUserMrc20Balance(
  address: string,
  network: Network,
  tickId: string,
  cursor: number = 0,
  size: number = 50
) {
  return request<API.ListRet<API.MRC20Item>>(
    getOrdersHost(network) + "/common/mrc20/address/utxo",
    {
      method: "GET",
      params: {
        address,
        tickId,
        cursor: cursor * size,
        size,
        net: network === "mainnet" ? "livenet" : "testnet",
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
    getOrdersHost(network) + "/common/mrc20/address/balance-list",
    {
      method: "GET",
      params: {
        address,
        cursor: cursor * size,
        size,
        net: network === "mainnet" ? "livenet" : "testnet",
      },
    }
  );
}

export async function getUserBRC20(
  network: Network,
  params: { address: string; tick: string },
  options?: { [key: string]: any }
) {
  const { address, tick } = params;
  const url = getOrdersHost(network) + `/brc20/address/${address}/${tick}`;
  return request<API.Ret<API.BRC20Info>>(url, {
    method: "GET",
    params: { net: network },
    ...(options || {}),
  });
}

export async function getRawTx(
  network: Network,
  params: { txid: string },
  options?: { [key: string]: any }
) {
  const { txid } = params;
  const url =  getOrdersHost(network) + `/tx/raw`;
  return request<API.Ret<{ rawTx: string }>>(url, {
    method: "GET",
    params: { net: network, txId: txid },
    ...(options || {}),
  });
}
