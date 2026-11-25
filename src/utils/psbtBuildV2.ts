import { Decimal } from "decimal.js";
import {
  Psbt,
  Transaction,
  networks,
  payments,
} from "bitcoinjs-lib";
import mempoolJS from "@mempool/mempool.js";
import { isTaprootInput } from "bitcoinjs-lib/src/psbt/bip371";
import { Buffer } from "buffer";
import { determineAddressInfo } from "./utils";

const TX_EMPTY_SIZE = 4 + 1 + 1 + 4;
const TX_INPUT_BASE = 32 + 4 + 1 + 4; // 41
const TX_INPUT_PUBKEYHASH = 107;
const TX_INPUT_SEGWIT = 27;
const TX_INPUT_TAPROOT = 17; // round up 16.5 bytes
const TX_OUTPUT_BASE = 8 + 1;
const TX_OUTPUT_PUBKEYHASH = 25;
const TX_OUTPUT_SCRIPTHASH = 23;
const TX_OUTPUT_SEGWIT = 22;
const TX_OUTPUT_SEGWIT_SCRIPTHASH = 34;

export const getUtxoSats = (utxo?: Partial<API.UTXO> | null): number => {
  return Number(utxo?.satoshis ?? utxo?.satoshi ?? 0);
};

export const getUtxoVout = (utxo: Partial<API.UTXO>): number => {
  return Number(utxo.vout ?? utxo.outputIndex ?? 0);
};

function selectUTXOs(utxos: API.UTXO[], targetAmount: Decimal) {
  let totalAmount = new Decimal(0);
  const selectedUtxos: typeof utxos = [];
  for (const utxo of utxos) {
    const sats = getUtxoSats(utxo);
    if (sats <= 0) continue;
    selectedUtxos.push(utxo);
    totalAmount = totalAmount.add(sats);

    if (totalAmount.gte(targetAmount)) {
      break;
    }
  }

  if (totalAmount.lt(targetAmount)) {
    throw new Error("Insufficient BTC funds to reach the target amount");
  }

  return selectedUtxos;
}

export const getNetworks = (network: API.Network) => {
  return network === "mainnet" ? networks.bitcoin : networks.testnet;
};

function getTotalSatoshi(utxos: API.UTXO[]) {
  return utxos.reduce(
    (total, utxo) => total.add(getUtxoSats(utxo)),
    new Decimal(0)
  );
}

type PsbtInput = (typeof Psbt.prototype.data.inputs)[0];
export interface TransactionOutput {
  script: Buffer;
  value: number;
}
export interface PsbtTxOutput extends TransactionOutput {
  address: string | undefined;
}

function inputBytes(input: PsbtInput) {
  if (isTaprootInput(input)) {
    return TX_INPUT_BASE + TX_INPUT_TAPROOT;
  }
  if (input.redeemScript) return TX_INPUT_BASE + input.redeemScript.length;
  if (input.nonWitnessUtxo) return TX_INPUT_BASE + TX_INPUT_PUBKEYHASH;
  if (input.witnessUtxo) return TX_INPUT_BASE + TX_INPUT_SEGWIT;

  return TX_INPUT_BASE + TX_INPUT_PUBKEYHASH;
}

function outputBytes(output: PsbtTxOutput) {
  return (
    TX_OUTPUT_BASE +
    (output.script
      ? output.script.length
      : output.address?.startsWith("bc1") || output.address?.startsWith("tb1")
        ? output.address?.length === 42
          ? TX_OUTPUT_SEGWIT
          : TX_OUTPUT_SEGWIT_SCRIPTHASH
        : output.address?.startsWith("3") || output.address?.startsWith("2")
          ? TX_OUTPUT_SCRIPTHASH
          : TX_OUTPUT_PUBKEYHASH)
  );
}

function transactionBytes(inputs: PsbtInput[], outputs: PsbtTxOutput[]) {
  const inputsSize = inputs.reduce((a, x) => a + inputBytes(x), 0);
  const outputsSize = outputs.reduce((a, x) => a + outputBytes(x), 0);
  return TX_EMPTY_SIZE + inputsSize + outputsSize;
}

export function calcFee(psbt: Psbt, feeRate: number) {
  const inputs = psbt.data.inputs;
  const outputs = psbt.txOutputs;
  const bytes = transactionBytes(inputs, outputs);
  return new Decimal(bytes).mul(feeRate).ceil();
}

export async function buildTx<T>(
  utxos: API.UTXO[],
  amount: Decimal,
  feeRate: number,
  buildPsbtParams: T,
  address: string,
  buildPsbt: (
    buildPsbtParams: T,
    selectedUTXOs: API.UTXO[],
    change: Decimal,
    needChange: boolean,
    signPsbt: boolean
  ) => Promise<Psbt>,
  extract: boolean = false,
  signPsbt: boolean = true
): Promise<{
  psbt: Psbt;
  fee: string;
  txId: string;
  rawTx: string;
  txInputs: API.Tx[];
  txOutputs: API.Tx[];
}> {
  let selectedUTXOs = selectUTXOs(utxos, amount);
  let total = getTotalSatoshi(selectedUTXOs);
  let psbt = await buildPsbt(
    buildPsbtParams,
    selectedUTXOs,
    total.minus(amount),
    true,
    false
  );
  let estimatedFee = calcFee(psbt, feeRate);
  while (total.lt(amount.add(estimatedFee))) {
    if (selectedUTXOs.length === utxos.length) {
      throw new Error("Insufficient BTC funds for network fee");
    }
    selectedUTXOs = selectUTXOs(utxos, amount.add(estimatedFee));
    total = getTotalSatoshi(selectedUTXOs);
    psbt = await buildPsbt(
      buildPsbtParams,
      selectedUTXOs,
      total.minus(amount.add(estimatedFee)),
      true,
      false
    );
    estimatedFee = calcFee(psbt, feeRate);
  }

  psbt = await buildPsbt(
    buildPsbtParams,
    selectedUTXOs,
    total.minus(amount.add(estimatedFee)),
    false,
    signPsbt
  );

  const extractedTx = extract ? psbt.extractTransaction() : undefined;

  return {
    psbt,
    fee: total
      .minus(psbt.txOutputs.reduce((acc, cur) => acc + Number(cur.value), 0))
      .toString(),
    txId: extractedTx ? extractedTx.getId() : "",
    rawTx: extractedTx ? extractedTx.toHex() : psbt.toHex(),
    txInputs: selectedUTXOs.map((utxo) => ({
      address,
      value: getUtxoSats(utxo),
    })),
    txOutputs: psbt.txOutputs.map((out) => ({
      address: out.address || "",
      value: out.value,
    })),
  };
}

export async function createPsbtInput({
  utxo,
  addressType,
  publicKey,
  script,
  network,
}: {
  utxo: API.UTXO;
  publicKey: Buffer;
  script: Buffer;
  addressType: string;
  network: API.Network;
}) {
  const sats = getUtxoSats(utxo);
  const vout = getUtxoVout(utxo);
  const payInput: any = {
    hash: utxo.txId,
    index: vout,
    sequence: 0xffffffff,
  };
  if (["P2TR"].includes(addressType)) {
    payInput["tapInternalKey"] = toXOnly(publicKey);
    payInput["witnessUtxo"] = { value: sats, script };
  }
  if (["P2WPKH"].includes(addressType)) {
    payInput["witnessUtxo"] = { value: sats, script };
  }
  if (["P2PKH"].includes(addressType)) {
    if (utxo.rawTx) {
      const tx = Transaction.fromHex(utxo.rawTx);
      payInput["nonWitnessUtxo"] = tx.toBuffer();
    } else {
      const mempoolReturn = mempoolJS({
        hostname: "mempool.space",
        network: network === "testnet" ? "testnet" : "main",
      });
      const rawTx = await mempoolReturn.bitcoin.transactions.getTxHex({
        txid: utxo.txId,
      });
      const tx = Transaction.fromHex(rawTx);
      payInput["nonWitnessUtxo"] = tx.toBuffer();
    }
  }
  if (["P2SH"].includes(addressType)) {
    const { redeem } = payments.p2sh({
      redeem: payments.p2wpkh({
        pubkey: publicKey,
        network: getNetworks(network),
      }),
      network: getNetworks(network),
    });
    if (!redeem) throw new Error("redeemScript");
    payInput.redeemScript = redeem.output;
    payInput["witnessUtxo"] = { value: sats, script };
  }
  return payInput;
}

export const getUtxos = async (address: string, _network?: API.Network) => {
  const addressType = determineAddressInfo(address).toUpperCase();
  const utxos = await window.metaidwallet.btc.getUtxos({
    needRawTx: ["P2PKH"].includes(addressType),
    useUnconfirmed: true,
  });
  return Array.isArray(utxos) ? utxos : [];
};

export const addUtxoSafe = async (
  address: string,
  utxos: { txId: string; vout: number }[]
) => {
  if (!window.metaidwallet?.btc?.addSafeUtxo) return;
  for (let i = 0; i < utxos.length; i++) {
    try {
      const { txId, vout } = utxos[i];
      await window.metaidwallet.btc.addSafeUtxo({
        address,
        unspentOutput: `${txId}:${vout}`,
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export function toXOnly(pubKey: Buffer) {
  return pubKey.length === 32 ? pubKey : pubKey.slice(1, 33);
}

export const getUtxoBalance = async (address?: string) => {
  if (!address) {
    address = await window.metaidwallet.btc.getAddress();
  }
  const utxos = await getUtxos(address);
  return utxos.reduce((acc, cur) => acc + getUtxoSats(cur), 0);
};

export const checkWalletAddress = async (address: string) => {
  const _address = await window.metaidwallet.btc.getAddress();
  if (address !== _address) {
    return { status: false, message: "Wallet address is not matched" };
  }
  return { status: true };
};
