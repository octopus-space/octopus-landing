import { Decimal } from "decimal.js";
import { Psbt, Transaction } from "bitcoinjs-lib";
import { getRawTx } from "@/servies/api";
import { determineAddressInfo } from "./utils";

function selectUTXOs(utxos: API.UTXO[], targetAmount: Decimal) {
  let totalAmount = new Decimal(0);
  const selectedUtxos: typeof utxos = [];
  for (const utxo of utxos) {
    selectedUtxos.push(utxo);
    totalAmount = totalAmount.add(utxo.satoshis);

    if (totalAmount.gte(targetAmount)) {
      break;
    }
  }

  if (totalAmount.lt(targetAmount)) {
    throw new Error("Insufficient funds to reach the target amount");
  }

  return selectedUtxos;
}

function getTotalSatoshi(utxos: API.UTXO[]) {
  return utxos.reduce(
    (total, utxo) => total.add(utxo.satoshis),
    new Decimal(0)
  );
}
function calculateEstimatedFee(psbt: Psbt, feeRate: number) {
  const tx = psbt.extractTransaction();
  const size = tx.virtualSize();
  return new Decimal(size).mul(feeRate);
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
    needChange: boolean
  ) => Promise<Psbt>
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
    true
  );
  let estimatedFee = calculateEstimatedFee(psbt, feeRate);
  while (total.lt(amount.add(estimatedFee))) {
    if (selectedUTXOs.length === utxos.length) {
      throw new Error("Insufficient funds");
    }
    selectedUTXOs = selectUTXOs(utxos, amount.add(estimatedFee));
    total = getTotalSatoshi(selectedUTXOs);
    psbt = await buildPsbt(
      buildPsbtParams,
      selectedUTXOs,
      total.minus(amount.add(estimatedFee)),
      true
    );
    estimatedFee = calculateEstimatedFee(psbt, feeRate);
  }

  psbt = await buildPsbt(
    buildPsbtParams,
    selectedUTXOs,
    total.minus(amount.add(estimatedFee)),
    false
  );

  return {
    psbt,
    fee: total
      .minus(psbt.txOutputs.reduce((acc, cur) => acc + Number(cur.value), 0))
      .toString(),
    txId: psbt.extractTransaction().getId(),
    rawTx: psbt.extractTransaction().toHex(),
    txInputs: selectedUTXOs.map((utxo) => ({
      address,
      value: utxo.satoshis,
    })),
    txOutputs: psbt.txOutputs.map((out) => ({
      address: out.address || "",
      value: out.value,
    })),
  };
}

function getWitnessUtxo(out: any): any {
  delete out.address;
  out.script = Buffer.from(out.script, "hex");
  return out;
}

export async function createPsbtInput({
  utxo,
  addressType,
  network,
}: {
  utxo: API.UTXO;
  network: API.Network;
  addressType: string;
}) {
  const payInput: any = {
    hash: utxo.txId,
    index: utxo.vout || utxo.outputIndex,
  };
  const {
    data: { rawTx },
  } = await getRawTx(network, { txid: utxo.txId });
  const tx = Transaction.fromHex(rawTx);

  if (["P2WPKH"].includes(addressType)) {
    payInput["witnessUtxo"] = getWitnessUtxo(
      tx.outs[utxo.vout || utxo.outputIndex]
    );
  }
  if (["P2PKH"].includes(addressType)) {
    payInput["nonWitnessUtxo"] = tx.toBuffer();
  }
  return payInput;
}

export const getUtxos = async (address?: string) => {
  if (!address) {
    address = await window.metaidwallet.btc.getAddress();
  }
  const addressType = determineAddressInfo(address).toUpperCase();
  const utxos = await window.metaidwallet.btc.getUtxos({
    needRawTx: ["P2PKH"].includes(addressType),
    useUnconfirmed: true,
  });
  console.log(utxos, "utxos");

  return utxos;
};

export const getUtxoBalance = async (address?: string) => {
  if (!address) {
    address = await window.metaidwallet.btc.getAddress();
  }
  const utxos = await getUtxos(address);
  return utxos.reduce((acc, cur) => acc + cur.satoshis, 0);
};


export const checkWalletAddress = async (address: string) => {
  const _address = await window.metaidwallet.btc.getAddress()
  if (address !== _address) {
    return { status: false, message: 'Wallet address is not matched' }
  }
  return { status: true }
}
