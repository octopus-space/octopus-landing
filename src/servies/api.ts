import { Network } from "@/models/wallet";
import { request } from "umi";

const getHost = (network: Network) => {
  if (network === "mainnet") return "https://api.orders.exchange/api-bridge";
  if (network === "testnet")
    return "https://api.orders.exchange/api-bridge-testnet";
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

export async function getUserBRC20(
  network: Network,
  params: { address: string; tick: string },
  options?: { [key: string]: any }
) {
  const { address, tick } = params;
  const url = `https://www.orders.exchange/api-book/brc20/address/${address}/${tick}`;
  return request<API.Ret<API.BRC20Info>>(url, {
    method: "GET",
    params: { net:network },
    ...(options || {}),
  });
}

export async function getRawTx(
  network: Network,
  params: { txid: string },
  options?: { [key: string]: any }
) {
  const { txid } = params;
  const url = `https://www.orders.exchange/api-book/common/tx/raw`;
  return request<API.Ret<{ rawTx: string }>>(url, {
    method: "GET",
    params: { net:network,txId:txid },
    ...(options || {}),
  });
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
    }>
  >(`${getHost(network)}/createPrepayOrderMintBtc`, {
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
  >(`${getHost(network)}/submitPrepayOrderMintBtc`, {
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

export async function getBridgeHistory(network: Network,
  params: {
    type:string,
    cursor:number;
    size:number;
    order:string;
    address:string
  },
  options?: { [key: string]: any }){
    return request<
      {txList:API.HsitoryDetail[]}
    >(`${getHost(network)}/queryTransactionsByAddress`, {
      method: "GET",
      params,
      ...(options || {}),
    });
  }
