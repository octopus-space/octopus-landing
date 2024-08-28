import { SupportRedeemAddressType } from "@/servies/wrapping";
import Decimal from "decimal.js";
import { buildTx, createPsbtInput, getNetworks, getUtxos } from "./psbtBuildV2";
import { initEccLib, Psbt, address as addressLib } from "bitcoinjs-lib";
import * as ecc from "@bitcoin-js/tiny-secp256k1-asmjs";
export const SIGHASH_ALL = 0x01;
export const DUST_SIZE = 546;
type TransferBTCParams = {
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
      value: transfer.satoshis,
    });
  }
  if (needChange || change.gt(DUST_SIZE)) {
    psbt.addOutput({
      address: address,
      value: change.toNumber(),
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
    throw new Error("");
  }
  const signed = Psbt.fromHex(_signed);
  return signed;
};

export const transferBTCs = async (params: TransferBTCParams) => {
  initEccLib(ecc);
  const { address, transfers, feeRate, addressType, network } = params;
  const totalAmount = transfers.reduce((acc, cur) => acc + cur.satoshis, 0);
  const utxos = (await getUtxos(address, network)).sort(
    (a, b) => b.satoshi - a.satoshi
  );
  const publicKey = await window.metaidwallet.btc.getPublicKey();
  const script = addressLib.toOutputScript(address, getNetworks(network));
  const commitTx = await buildTx<BuildTransferBTCsPsbtParams>(
    utxos,
    new Decimal(totalAmount),
    feeRate,
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
  return commitTx.rawTx;
};
