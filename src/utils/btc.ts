import { SupportRedeemAddressType } from "@/servies/wrapping";
import Decimal from "decimal.js";
import {
  buildTx,
  createPsbtInput,
  getNetworks,
  getUtxos,
  getUtxoSats,
} from "./psbtBuildV2";
import { initEccLib, Psbt, address as addressLib } from "bitcoinjs-lib";
import * as ecc from "@bitcoin-js/tiny-secp256k1-asmjs";

export const SIGHASH_ALL = 0x01;
export const DUST_SIZE = 546;

export type TransferBTCParams = {
  transfers: {
    toAddress: string;
    satoshis: number;
  }[];
  address: string;
  feeRate: number;
  addressType: SupportRedeemAddressType;
  network: API.Network;
};

type BuildTransferBTCsPsbtParams = {
  addressType: SupportRedeemAddressType;
  address: string;
  publicKey: Buffer;
  script: Buffer;
  network: API.Network;
  transfers: {
    toAddress: string;
    satoshis: number;
  }[];
};

const _buildTransferBTCsPsbt = async (
  params: BuildTransferBTCsPsbtParams,
  selectedUTXOs: API.UTXO[],
  change: Decimal,
  needChange: boolean,
  signPsbt: boolean
) => {
  const { network, addressType, publicKey, script, transfers, address } =
    params;
  const psbt = new Psbt({ network: getNetworks(network) });
  for (const utxo of selectedUTXOs) {
    const psbtInput = await createPsbtInput({
      utxo,
      addressType,
      publicKey,
      script,
      network,
    });
    psbtInput.sighashType = SIGHASH_ALL;
    psbt.addInput(psbtInput);
  }
  for (const transfer of transfers) {
    psbt.addOutput({
      address: transfer.toAddress,
      value: Math.round(transfer.satoshis),
    });
  }
  if (needChange || change.gt(DUST_SIZE)) {
    psbt.addOutput({
      address: address,
      value: Math.floor(change.toNumber()),
    });
  }
  if (!signPsbt) return psbt;
  const _signed = await window.metaidwallet.btc.signPsbt({
    psbtHex: psbt.toHex(),
    options: {
      autoFinalized: true,
    },
  });
  if (typeof _signed === "object") {
    if (_signed.status === "canceled") throw new Error("canceled");
    throw new Error(_signed.status || "signPsbt rejected");
  }
  const signed = Psbt.fromHex(_signed);
  return signed;
};

export const transferBTCsWithMeta = async (params: TransferBTCParams) => {
  initEccLib(ecc);
  const { address, transfers, feeRate, addressType, network } = params;
  const totalAmount = transfers.reduce(
    (acc, cur) => acc + Math.round(cur.satoshis),
    0
  );
  const utxos = (await getUtxos(address, network)).sort(
    (a, b) => getUtxoSats(b) - getUtxoSats(a)
  );
  const publicKey = await window.metaidwallet.btc.getPublicKey();
  const script = addressLib.toOutputScript(address, getNetworks(network));
  const commitTx = await buildTx<BuildTransferBTCsPsbtParams>(
    utxos,
    new Decimal(totalAmount),
    Math.max(1, Math.ceil(feeRate || 2)),
    {
      addressType,
      address,
      publicKey: Buffer.from(publicKey, "hex"),
      script,
      network,
      transfers,
    },
    address,
    _buildTransferBTCsPsbt,
    true,
    true
  );
  const lastIndex = commitTx.txOutputs.length - 1;
  const changeUtxo =
    lastIndex >= transfers.length &&
    commitTx.txOutputs[lastIndex]?.address === address
      ? { txId: commitTx.txId, vout: lastIndex }
      : undefined;

  return {
    rawTx: commitTx.rawTx,
    txId: commitTx.txId,
    changeUtxo,
  };
};

export const transferBTCs = async (params: TransferBTCParams) => {
  const res = await transferBTCsWithMeta(params);
  return res.rawTx;
};
