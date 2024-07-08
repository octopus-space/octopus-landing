import {
  payments,
  initEccLib,
  networks,
  Psbt,
  Transaction,
  Payment,
} from "bitcoinjs-lib";
import Decimal from "decimal.js";
import { Network } from "@/models/wallet";
import * as ecc from "@bitcoin-js/tiny-secp256k1-asmjs";

import {
  createPrepayOrderMintBRC20,
  createPrepayOrderMintBtc,
  createPrepayOrderMintMrc20,
  createPrepayOrderMintRunes,
  createPrepayOrderRedeemBrc20,
  createPrepayOrderRedeemBtc,
  createPrepayOrderRedeemMrc20,
  createPrepayOrderRedeemRunes,
  fetchRunesUtxos,
  getRawTx,
  submitPrepayOrderMintBrc20,
  submitPrepayOrderMintBtc,
  submitPrepayOrderMintMrc20,
  submitPrepayOrderMintRunes,
  submitPrepayOrderRedeemBrc20,
  submitPrepayOrderRedeemBtc,
  submitPrepayOrderRedeemMrc20,
  submitPrepayOrderRedeemRunes,
} from "./api";
import { determineAddressInfo } from "@/utils/utils";
import { NetworkType } from "@unisat/wallet-sdk/lib/network";
import { sendRunes } from "@/utils/runes";

export type SupportRedeemAddressType = "P2TR" | "P2WPKH" | "P2PKH";
export const supportRedeemAddressType: SupportRedeemAddressType[] = [
  "P2TR",
  "P2WPKH",
  "P2PKH",
];

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
async function sendToken(
  amount: string,
  address: string,
  targetTokenCodeHash: string,
  targetTokenGenesis: string
): Promise<string> {
  const res = await window.metaidwallet
    .transfer({
      broadcast: true,
      tasks: [
        {
          type: "token",
          codehash: targetTokenCodeHash,
          genesis: targetTokenGenesis,
          receivers: [{ address, amount }],
        },
      ],
    })
    .catch((e) => {
      throw new Error(e as any);
    });
  if (res.status) throw new Error(res.status);
  if (res.res[0].txid) {
    return res.res[0].txid;
  } else {
    return "";
  }
}
async function signPublicKey(): Promise<{
  publicKey: string;
  publicKeySign: string;
  publicKeyReceiveSign: string;
  publicKeyReceive: string;
}> {
  const publicKey = await window.metaidwallet.getPublicKey();
  const publicKeyReceive = await window.metaidwallet.btc.getPublicKey();
  const publicKeyReceiveSign = await window.metaidwallet.btc.signMessage(
    publicKeyReceive
  );
  if (publicKeyReceiveSign.status === "canceled") throw new Error("canceled");
  const ret = await window.metaidwallet.signMessage({
    message: publicKey,
    encoding: "base64",
  });
  if (ret.status === "canceled") throw new Error("canceled");
  let {
    signature: { signature: publicKeySign },
  } = ret;

  if (typeof ret.signature === "string") {
    publicKeySign = ret.signature;
  }

  return {
    publicKey,
    publicKeySign,
    publicKeyReceiveSign,
    publicKeyReceive,
  };
}

async function signMintPublicKey(): Promise<{
  publicKey: string;
  publicKeySign: string;
  publicKeyReceiveSign: string;
  publicKeyReceive: string;
}> {
  const publicKeyReceive = await window.metaidwallet.getPublicKey();
  const publicKey = await window.metaidwallet.btc.getPublicKey();

  const publicKeySign = await window.metaidwallet.btc.signMessage(publicKey);
  if (publicKeySign.status === "canceled") throw new Error("canceled");
  const ret = await window.metaidwallet.signMessage({
    message: publicKeyReceive,
    encoding: "base64",
  });
  if (ret.status === "canceled") throw new Error("canceled");
  console.log(ret, "signMessage");
  let {
    signature: { signature: publicKeyReceiveSign },
  } = ret;
  //2.7 {signature:{signature:'xxx'}}
  //3.0 {signature:''}；
  if (typeof ret.signature === "string") {
    publicKeyReceiveSign = ret.signature;
  }

  return {
    publicKey,
    publicKeySign,
    publicKeyReceiveSign,
    publicKeyReceive,
  };
}
export async function redeemBtc(
  redeemAmount: number,
  btcAsset: API.AssetItem,
  addressType: SupportRedeemAddressType,
  network: Network
): Promise<{ orderId: string; txid: string }> {
  try {
    const { publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive } =
      await signPublicKey();

    const createPrepayOrderDto = {
      amount: redeemAmount,
      originTokenId: btcAsset.originTokenId,
      addressType,
      publicKey,
      publicKeySign,
      publicKeyReceive,
      publicKeyReceiveSign,
    };
    const { data: createResp } = await createPrepayOrderRedeemBtc(
      network,
      createPrepayOrderDto
    );
    const { orderId, bridgeAddress } = createResp;
    const { targetTokenCodeHash, targetTokenGenesis } = btcAsset;
    const txid = await sendToken(
      String(redeemAmount),
      bridgeAddress,
      targetTokenCodeHash,
      targetTokenGenesis
    );

    const submitPrepayOrderRedeemDto = {
      orderId,
      txid: txid,
    };
    await sleep(3000);
    const ret = await submitPrepayOrderRedeemBtc(
      network,
      submitPrepayOrderRedeemDto
    );
    if (!ret.success) {
      throw new Error(ret.msg);
    }
    return {
      orderId,
      txid,
    };
  } catch (error) {
    throw new Error(error as any);
  }
}

export async function redeemBrc20(
  redeemAmount: number,
  asset: API.AssetItem,
  addressType: SupportRedeemAddressType,
  network: Network
): Promise<{ orderId: string; txid: string }> {
  try {
    const { publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive } =
      await signPublicKey();
    const createPrepayOrderDto = {
      amount: redeemAmount,
      originTokenId: asset.originTokenId,
      addressType,
      publicKey,
      publicKeySign,
      publicKeyReceive,
      publicKeyReceiveSign,
    };
    const { data: createResp } = await createPrepayOrderRedeemBrc20(
      network,
      createPrepayOrderDto
    );
    const { orderId, bridgeAddress } = createResp;
    const { targetTokenCodeHash, targetTokenGenesis } = asset;
    const txid = await sendToken(
      String(redeemAmount),
      bridgeAddress,
      targetTokenCodeHash,
      targetTokenGenesis
    );
    const submitPrepayOrderRedeemDto = {
      orderId,
      txid: txid,
    };
    await sleep(3000);
    const ret = await submitPrepayOrderRedeemBrc20(
      network,
      submitPrepayOrderRedeemDto
    );
    if (!ret.success) {
      throw new Error(ret.msg);
    }
    return {
      orderId,
      txid,
    };
  } catch (error) {
    throw new Error(error as any);
  }
}

export async function redeemRunes(
  redeemAmount: number,
  asset: API.AssetItem,
  addressType: SupportRedeemAddressType,
  network: Network
): Promise<{ orderId: string; txid: string }> {
  try {
    const { publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive } =
      await signPublicKey();
    const createPrepayOrderDto = {
      amount: redeemAmount,
      originTokenId: asset.originTokenId,
      addressType,
      publicKey,
      publicKeySign,
      publicKeyReceive,
      publicKeyReceiveSign,
    };
    const { data: createResp } = await createPrepayOrderRedeemRunes(
      network,
      createPrepayOrderDto
    );
    const { orderId, bridgeAddress } = createResp;
    const { targetTokenCodeHash, targetTokenGenesis } = asset;
    const txid = await sendToken(
      String(redeemAmount),
      bridgeAddress,
      targetTokenCodeHash,
      targetTokenGenesis
    );
    const submitPrepayOrderRedeemDto = {
      orderId,
      txid: txid,
    };
    await sleep(3000);
    const ret = await submitPrepayOrderRedeemRunes(
      network,
      submitPrepayOrderRedeemDto
    );
    if (!ret.success) {
      throw new Error(ret.msg);
    }
    return {
      orderId,
      txid,
    };
  } catch (error) {
    throw new Error(error as any);
  }
}

export async function redeemMrc20(
  redeemAmount: number,
  asset: API.AssetItem,
  addressType: SupportRedeemAddressType,
  network: Network
): Promise<{ orderId: string; txid: string }> {
  try {
    const { publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive } =
      await signPublicKey();
    const createPrepayOrderDto = {
      amount: redeemAmount,
      originTokenId: asset.originTokenId,
      addressType,
      publicKey,
      publicKeySign,
      publicKeyReceive,
      publicKeyReceiveSign,
    };
    const { data: createResp } = await createPrepayOrderRedeemMrc20(
      network,
      createPrepayOrderDto
    );
    const { orderId, bridgeAddress } = createResp;
    const { targetTokenCodeHash, targetTokenGenesis } = asset;
    const txid = await sendToken(
      String(redeemAmount),
      bridgeAddress,
      targetTokenCodeHash,
      targetTokenGenesis
    );
    const submitPrepayOrderRedeemDto = {
      orderId,
      txid: txid,
    };
    await sleep(3000);
    const ret = await submitPrepayOrderRedeemMrc20(
      network,
      submitPrepayOrderRedeemDto
    );
    if (!ret.success) {
      throw new Error(ret.msg);
    }
    return {
      orderId,
      txid,
    };
  } catch (error) {
    throw new Error(error as any);
  }
}

async function buildTx(parmas: {
  toAddress: string;
  satoshis: number;
  options: {
    noBroadcast: boolean;
    feeRate: number;
  };
}) {
  const ret = await window.metaidwallet.btc.transfer(parmas);
  if (ret.status) throw new Error(ret.status);
  return ret.txHex;
}
export async function mintBtc(
  mintAmount: number,
  btcAsset: API.AssetItem,
  addressType: SupportRedeemAddressType,
  network: Network,
  assetInfo: API.AssetsData
) {
  const { publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive } =
    await signMintPublicKey();

  const createPrepayOrderDto = {
    amount: mintAmount,
    originTokenId: btcAsset.originTokenId,
    addressType: addressType,
    publicKey: publicKey,
    publicKeySign: publicKeySign,
    publicKeyReceive,
    publicKeyReceiveSign: publicKeyReceiveSign,
  };
  try {
    const { data: createResp } = await createPrepayOrderMintBtc(
      network,
      createPrepayOrderDto
    );

    const { orderId, bridgeAddress } = createResp;

    const txHex = await buildTx({
      toAddress: bridgeAddress,
      satoshis: Number(mintAmount),
      options: {
        noBroadcast: true,
        feeRate: assetInfo.feeBtc,
      },
    });

    const submitPrepayOrderMintDto = {
      orderId,
      txHex: txHex,
    };
    const submitRes = await submitPrepayOrderMintBtc(
      network,
      submitPrepayOrderMintDto
    );
    if (!submitRes.success) throw new Error(submitRes.msg);

    return submitRes;
    //成功
  } catch (error) {
    throw new Error((error as any).message || (error as any).msg);
  }
}
export interface UTXO {
  txId: string;
  vout: number;
  satoshi: number;
  confirmed: boolean;
  inscriptions:
    | {
        id: string;
        num: number;
      }[]
    | null;
}
function getTotalSatoshi(utxos: API.UTXO[]): Decimal {
  return utxos.reduce((total, utxo) => total.add(utxo.satoshi), new Decimal(0));
}

async function _createPayment(network: Network, address: string) {
  initEccLib(ecc);
  const btcNetwork =
    network === "mainnet" ? networks.bitcoin : networks.testnet;
  const publicKeyString = await window.metaidwallet.btc.getPublicKey();
  const publicKey = Buffer.from(publicKeyString, "hex");
  const addressType = determineAddressInfo(address);
  switch (addressType.toUpperCase()) {
    case "P2PKH":
      return payments.p2pkh({ pubkey: publicKey, network: btcNetwork });
    case "P2WPKH":
      return payments.p2wpkh({
        pubkey: publicKey,
        network: btcNetwork,
      });
    default:
      return payments.p2pkh({ pubkey: publicKey, network: btcNetwork });
  }
}

function getWitnessUtxo(out: any): any {
  delete out.address;
  out.script = Buffer.from(out.script, "hex");
  return out;
}
async function _createPayInput({
  utxo,
  addressType,
  network,
}: {
  utxo: API.UTXO;
  network: Network;
  addressType: string;
}) {
  const payInput: any = {
    hash: utxo.txId,
    index: utxo.vout,
  };
  const {
    data: { rawTx },
  } = await getRawTx(network, { txid: utxo.txId });
  const tx = Transaction.fromHex(rawTx);

  if (["P2WPKH"].includes(addressType)) {
    payInput["witnessUtxo"] = getWitnessUtxo(tx.outs[utxo.vout]);
  }
  if (["P2PKH"].includes(addressType)) {
    payInput["nonWitnessUtxo"] = tx.toBuffer();
  }
  return payInput;
}

function _calculateFee(psbt: Psbt, feeRate: number): number {
  const tx = psbt.extractTransaction();

  const size = tx.virtualSize();

  return size * feeRate;
}

const selectUTXOs = (utxos: UTXO[], targetAmount: Decimal): UTXO[] => {
  let totalAmount = new Decimal(0);
  const selectedUtxos: typeof utxos = [];
  for (const utxo of utxos) {
    selectedUtxos.push(utxo);
    totalAmount = totalAmount.add(utxo.satoshi);

    if (totalAmount.gte(targetAmount)) {
      break;
    }
  }
  if (totalAmount.lt(targetAmount)) {
    throw new Error("Insufficient funds to reach the target amount");
  }

  return selectedUtxos;
};
async function sendBRC(
  recipient: string,
  utxo: API.UTXO,
  feeRate: number,
  net: Network
) {
  const amount = getTotalSatoshi([utxo]);
  const btcNetwork = net === "mainnet" ? networks.bitcoin : networks.testnet;
  const address = await window.metaidwallet.btc.getAddress();
  const addressType = determineAddressInfo(address);
  const payment = await _createPayment(net, address);
  const utxos = await window.metaidwallet.btc.getUtxos();

  if (!utxos.length) {
    throw new Error("your account currently has no available UTXO.");
  }

  utxos.sort((a, b) => b.satoshi - a.satoshi);
  const buildPsbt = async (selectedUtxos: API.UTXO[], change: Decimal) => {
    const psbt = new Psbt({ network: btcNetwork });

    const payInput = await _createPayInput({
      utxo,
      network: net,
      addressType: addressType.toUpperCase(),
    });
    psbt.addInput(payInput);
    psbt.addOutput({
      value: utxo.satoshi,
      address: recipient,
    });

    if (change.gt(546)) {
      psbt.addOutput({
        value: change.toNumber(),
        address,
      });
    }

    for (const utxo of selectedUtxos) {
      const payInput = await _createPayInput({
        utxo,
        network: net,
        addressType: addressType.toUpperCase(),
      });
      psbt.addInput(payInput);
    }
    const _signPsbt = await window.metaidwallet.btc.signPsbt({
      psbtHex: psbt.toHex(),
    });
    if (_signPsbt.status === "canceled") throw new Error("canceled");
    const signPsbt = Psbt.fromHex(_signPsbt);
    return signPsbt;
  };

  let selecedtUTXOs = [utxos[0]];
  let total = getTotalSatoshi(selecedtUTXOs);
  let psbt = await buildPsbt(selecedtUTXOs, total.minus(amount));
  let fee = _calculateFee(psbt, feeRate);

  while (getTotalSatoshi(selecedtUTXOs).lt(amount.add(fee))) {
    if (selecedtUTXOs.length === utxos.length) {
      throw new Error("Insufficient funds");
    }
    selecedtUTXOs = selectUTXOs(utxos, amount.add(fee));
    total = getTotalSatoshi(selecedtUTXOs);
    const psbt = await buildPsbt(selecedtUTXOs, total.minus(amount).minus(fee));
    fee = _calculateFee(psbt, feeRate);
  }

  psbt = await buildPsbt(selecedtUTXOs, total.minus(amount).minus(fee));
  return psbt;
}

export const getOutput = (
  pubkey: string,
  _network: Network = "mainnet",
  _addressType: SupportRedeemAddressType = "P2PKH"
) => {
  const publicKeyBuffer = Buffer.from(pubkey, "hex");
  let _output;
  const network = _network === "mainnet" ? networks.bitcoin : networks.testnet;
  if (_addressType === "P2PKH") {
    _output = payments.p2pkh({
      pubkey: publicKeyBuffer,
      network,
    }).output;
  } else {
    _output = payments.p2wpkh({
      pubkey: publicKeyBuffer,
      network,
    }).output;
  }

  return _output;
};

function getVariableSize(n: number) {
  if (n < 0xfd) {
    return 1;
  } else if (n < 0x10000) {
    return 2 + 1;
  } else if (n < 0x100000000) {
    return 3 + 1;
  } else if (n < 0x10000000000000000) {
    return 4 + 1;
  }
  throw new Error("");
}

export function getBtcTxSizeByOutputType(
  segWitInputNumber: number,
  tapRootInputNumber: number,
  insNumber: number,
  outputTypeList: SupportRedeemAddressType[]
) {
  let sizeSum = 0;
  sizeSum += 4;
  sizeSum += 1;
  for (let i = 0; i < segWitInputNumber; i++) {
    sizeSum += 91;
  }
  for (let i = 0; i < tapRootInputNumber; i++) {
    sizeSum += (4 * (32 + 4 + 1 + 4) + 1 + 1 + 64) / 4;
  }
  sizeSum += insNumber * 33;
  sizeSum += 1;
  for (const outputTypeListElement of outputTypeList) {
    sizeSum += 8;
    if (outputTypeListElement === "P2PKH") {
      sizeSum += getVariableSize(25);
      sizeSum += 25;
    } else if (outputTypeListElement === "P2WPKH") {
      sizeSum += getVariableSize(22);
      sizeSum += 22;
    } else if (outputTypeListElement === "P2TR") {
      sizeSum += getVariableSize(34);
      sizeSum += 34;
    }
  }
  sizeSum += 4; //nLockTime
  return Math.ceil(sizeSum);
}

export async function mintBrc(
  mintAmount: number,
  btcAsset: API.AssetItem,
  addressType: SupportRedeemAddressType,
  network: Network,
  assetInfo: API.AssetsData,
  inscription: API.TransferbleBRC20
) {
  const { publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive } =
    await signMintPublicKey();

  const createPrepayOrderDto = {
    amount: String(mintAmount),
    originTokenId: btcAsset.originTokenId,
    addressType: addressType,
    publicKey: publicKey,
    publicKeySign: publicKeySign,
    publicKeyReceive,
    publicKeyReceiveSign: publicKeyReceiveSign,
  };

  try {
    const { data: createResp } = await createPrepayOrderMintBRC20(
      network,
      createPrepayOrderDto
    );

    const { orderId, bridgeAddress } = createResp;

    const inscriptionUtxo = {
      txId: inscription!.inscriptionId?.slice(0, -2),
      vout: +inscription!.inscriptionId?.split("i")[1],
      satoshi: +inscription!.outValue,
      confirmed: true,
      inscriptions: null,
    };
    const psbt = await sendBRC(
      bridgeAddress,
      inscriptionUtxo,
      assetInfo.feeBtc,
      network
    );
    const submitPrepayOrderMintDto = {
      orderId,
      txHex: psbt.extractTransaction().toHex(),
    };
    const submitRes = await submitPrepayOrderMintBrc20(
      network,
      submitPrepayOrderMintDto
    );
    if (!submitRes.success) throw new Error(submitRes.msg);
    return submitRes;
    //成功
  } catch (error) {
    throw new Error((error as any).message || (error as any).msg);
  }
}

export async function mintRunes(
  mintAmount: number,
  btcAsset: API.AssetItem,
  addressType: SupportRedeemAddressType,
  network: Network,
  assetInfo: API.AssetsData
) {
  const { publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive } =
    await signMintPublicKey();

  const createPrepayOrderDto = {
    amount: String(mintAmount),
    originTokenId: btcAsset.originTokenId,
    addressType: addressType,
    publicKey: publicKey,
    publicKeySign: publicKeySign,
    publicKeyReceive,
    publicKeyReceiveSign: publicKeyReceiveSign,
  };

  try {
    const { data: createResp } = await createPrepayOrderMintRunes(
      network,
      createPrepayOrderDto
    );

    const { orderId, bridgeAddress } = createResp;

    const { psbt } = await sendRunes({
      runeId: btcAsset.originTokenId,
      feeRate: assetInfo.feeBtc,
      net: network,
      recipient: bridgeAddress,
      runeAmount: String(mintAmount),
      divisibility: btcAsset.decimals,
      addressType,
    });
    const submitPrepayOrderMintDto = {
      orderId,
      txHex: psbt.extractTransaction().toHex(),
    };
    const submitRes = await submitPrepayOrderMintRunes(
      network,
      submitPrepayOrderMintDto
    );
    if (!submitRes.success) throw new Error(submitRes.msg);
    return submitRes;
  } catch (error) {
    throw new Error((error as any).message || (error as any).msg);
  }
}

export async function mintMrc20(
  mintAmount: number,
  asset: API.AssetItem,
  addressType: SupportRedeemAddressType,
  network: Network,
  assetInfo: API.AssetsData
) {
  const { publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive } =
    await signMintPublicKey();
  const createPrepayOrderDto = {
    amount: String(mintAmount),
    originTokenId: asset.originTokenId,
    addressType: addressType,
    publicKey: publicKey,
    publicKeySign: publicKeySign,
    publicKeyReceive,
    publicKeyReceiveSign: publicKeyReceiveSign,
  };
  const { data: createResp } = await createPrepayOrderMintMrc20(
    network,
    createPrepayOrderDto
  );
  console.log("createResp", createResp);
  const { orderId, bridgeAddress } = createResp;
  const MRC20Transfer = await window.metaidwallet.btc.transferMRC20({
    body: JSON.stringify([
      {
        amount: String(mintAmount),
        vout: 1,
        id: asset.originTokenId,
      },
    ]),
    amount: String(mintAmount),
    mrc20TickId: asset.originTokenId,
    flag: network === "mainnet" ? "metaid" : "testid",
    revealAddr: bridgeAddress,
    commitFeeRate: assetInfo.feeBtc,
    revealFeeRate: assetInfo.feeBtc,
  });
  if (MRC20Transfer.status) throw new Error(MRC20Transfer.status);
  const { commitTx, revealTx } = MRC20Transfer;
  console.log("commitTx", commitTx);
  const submitPrepayOrderMintDto = {
    orderId,
    txHexList: [commitTx.rawTx, revealTx.rawTx],
  };
  const submitRes = await submitPrepayOrderMintMrc20(
    network,
    submitPrepayOrderMintDto
  );
  if (!submitRes.success) throw new Error(submitRes.msg);
}
