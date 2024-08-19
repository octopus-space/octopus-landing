import { Decimal } from "decimal.js";
import { buildTx, createPsbtInput, getUtxos } from "./psbtBuild";
import { networks, Psbt } from "bitcoinjs-lib";
import { encodeRunestone } from "@magiceden-oss/runestone-lib";
import { fetchRunesUtxos } from "@/servies/api";
export const DUST_SIZE = 546;
const selectRuneUTXOs = (utxos: API.UTXO[], targetAmount: Decimal) => {
  let totalAmount = new Decimal(0);
  const selectedUtxos: typeof utxos = [];
  for (const utxo of utxos) {
    if (!utxo?.runes) {
      throw new Error("Invalid Rune UTXO");
    }
    selectedUtxos.push(utxo);
    totalAmount = totalAmount.add(
      utxo.runes.reduce((acc, cur) => acc + Number(cur.amount), 0)
    );

    if (totalAmount.gte(targetAmount)) {
      break;
    }
  }

  if (totalAmount.lt(targetAmount)) {
    throw new Error("Insufficient funds to reach the target rune amount");
  }

  return selectedUtxos;
};

const parseRuneid = (runeId: string) => {
  try {
    const [block, tx] = runeId.split(":");
    return {
      tx: parseInt(tx),
      block: BigInt(block),
    };
  } catch (err) {
    throw new Error("Invalid rune id");
  }
};

export const sendRunes = async ({
  runeId,
  feeRate,
  recipient,
  runeAmount,
  divisibility,
  outputValue = 546,
  net,
  addressType,
}: API.RuneSendParams) => {
  const senderAddress = await window.metaidwallet.btc.getAddress();
  const {
    data: { list: runeUtxos },
  } = await fetchRunesUtxos(senderAddress, runeId, net);
  const utxos = await getUtxos(senderAddress);
  const filteredUtxos = utxos.filter((utxo: API.UTXO) => {
    return !runeUtxos.some((runeUtxo) => {
      return (
        runeUtxo.txId === utxo.txId && runeUtxo.outputIndex === utxo.outputIndex
      );
    });
  });

  const selectedRuneUtxos = selectRuneUTXOs(runeUtxos, new Decimal(runeAmount));
  const btcNetwork = net === "mainnet" ? networks.bitcoin : networks.testnet;
  const ret = await buildTx<{
    runeId: string;
    recipient: string;
    runeUtxos: API.UTXO[];
    runeAmount: Decimal;
    outputValue?: number;
  }>(
    filteredUtxos,
    new Decimal(outputValue * 2),
    feeRate,
    {
      runeId,
      recipient,
      runeUtxos: selectedRuneUtxos,
      outputValue,
      runeAmount: new Decimal(10).toPower(divisibility).mul(runeAmount),
    },
    senderAddress,
    async (
      buildPsbtParams: {
        runeId: string;
        recipient: string;
        runeUtxos: API.UTXO[];
        runeAmount: Decimal;
        outputValue?: number;
      },
      selectedUTXOs: API.UTXO[],
      change: Decimal,
      needChange: boolean
    ) => {
      const {
        runeId,
        runeUtxos,
        runeAmount,
        recipient,
        outputValue = 546,
      } = buildPsbtParams;
      if (!runeUtxos.length) {
        throw new Error("No available rune to send");
      }
      const psbt = new Psbt({ network: btcNetwork });
      for (const runeUtxo of runeUtxos) {
        const psbtInput = await createPsbtInput({
          utxo: runeUtxo,
          network: net,
          addressType,
        });
        psbt.addInput(psbtInput);
      }

      for (const utxo of selectedUTXOs) {
        const psbtInput = await createPsbtInput({
          utxo: utxo,
          network: net,
          addressType,
        });
        psbt.addInput(psbtInput);
      }

      psbt.addOutput({
        address: senderAddress,
        value: outputValue,
      });

      psbt.addOutput({
        address: recipient,
        value: outputValue,
      });

      psbt.addOutput({
        value: 0,
        script: encodeRunestone({
          edicts: [
            {
              id: parseRuneid(runeId),
              amount: BigInt(runeAmount.toString()),
              output: 1,
            },
          ],
        }).encodedRunestone,
      });

      if (needChange || change.gt(DUST_SIZE)) {
        psbt.addOutput({
          address: senderAddress,
          value: change.toNumber(),
        });
      }

      const _signPsbt = await window.metaidwallet.btc.signPsbt({
        psbtHex: psbt.toHex(),
      });
      if (typeof _signPsbt === "object") {
        if (_signPsbt.status === "canceled") throw new Error("canceled");
        throw new Error("");
      }
      const signPsbt = Psbt.fromHex(_signPsbt);
      return signPsbt;
    }
  );
  return ret;
};
