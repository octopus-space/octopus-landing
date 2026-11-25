import { Network } from "@/models/wallet";
import {
  createPrepayOrderMintBtc,
  createPrepayOrderMintMrc20,
  createPrepayOrderRedeemBtc,
  createPrepayOrderRedeemMrc20,
  submitPrepayOrderMintBtc,
  submitPrepayOrderMintMrc20,
  submitPrepayOrderRedeemBtc,
  submitPrepayOrderRedeemMrc20,
} from "./api";
import { transferBTCsWithMeta } from "@/utils/btc";
import { addUtxoSafe } from "@/utils/psbtBuildV2";

export type SupportRedeemAddressType = "P2TR" | "P2WPKH" | "P2PKH";
export const supportRedeemAddressType: SupportRedeemAddressType[] = [
  "P2TR",
  "P2WPKH",
  "P2PKH",
];

function extractApiErrorMessage(error: any): string {
  return (
    error?.response?.data?.message ||
    error?.response?.data?.msg ||
    error?.data?.message ||
    error?.data?.msg ||
    error?.message ||
    error?.msg ||
    "unknown error"
  );
}

/**
 * Local noBroadcast signing on MVC:
 * Chains [mvcFeeTx (SPACE), ftTransferTx (MCP02 FT)] in a single transfer({ broadcast: false })
 * call so the SPACE change UTXO feeds directly into the FT transfer without double-spending!
 */
async function signMvcRedeemBundle(params: {
  redeemAmount: string;
  bridgeAddress: string;
  targetTokenCodeHash: string;
  targetTokenGenesis: string;
  tokenDecimal: number;
  mvcFeeSats: number;
  mvcFeeAddress: string;
}): Promise<{
  mvcFeeTxHex?: string;
  txHexList: string[];
  txid: string;
}> {
  const {
    redeemAmount,
    bridgeAddress,
    targetTokenCodeHash,
    targetTokenGenesis,
    tokenDecimal,
    mvcFeeSats,
    mvcFeeAddress,
  } = params;

  const tasks: TransferOutput[] = [];
  const needSpaceFee = mvcFeeSats > 0 && Boolean(mvcFeeAddress);
  if (needSpaceFee) {
    tasks.push({
      type: "space",
      receivers: [
        {
          address: mvcFeeAddress,
          amount: String(mvcFeeSats),
          decimal: 8,
        },
      ],
    });
  }

  tasks.push({
    type: "token",
    codehash: targetTokenCodeHash,
    genesis: targetTokenGenesis,
    receivers: [
      {
        address: bridgeAddress,
        amount: String(redeemAmount),
        decimal: tokenDecimal,
      },
    ],
  });

  const res = await window.metaidwallet
    .transfer({
      broadcast: false,
      tasks,
    })
    .catch((e) => {
      throw new Error(extractApiErrorMessage(e));
    });

  if (res.status) {
    throw new Error(res.status);
  }
  if (!Array.isArray(res.res) || res.res.length < tasks.length) {
    throw new Error("MVC transaction signing cancelled or incomplete");
  }

  const mvcFeeTxHex = needSpaceFee ? res.res[0]?.txHex : undefined;
  const ftResult = needSpaceFee ? res.res[1] : res.res[0];

  if (!ftResult || !ftResult.txHex || !ftResult.txid) {
    throw new Error("Failed to sign MVC token redeem transaction");
  }

  const txHexList = ftResult.routeCheckTxHex
    ? [ftResult.routeCheckTxHex, ftResult.txHex]
    : [ftResult.txHex];

  return {
    mvcFeeTxHex,
    txHexList,
    txid: ftResult.txid,
  };
}

async function signRedeemPublicKeys(): Promise<{
  publicKey: string;
  publicKeySign: string;
  publicKeyReceiveSign: string;
  publicKeyReceive: string;
}> {
  const publicKey = await window.metaidwallet.getPublicKey();
  const publicKeyReceive = await window.metaidwallet.btc.getPublicKey();
  const publicKeyReceiveSign: any =
    await window.metaidwallet.btc.signMessage(publicKeyReceive);
  if (
    typeof publicKeyReceiveSign === "object" &&
    publicKeyReceiveSign?.status === "canceled"
  ) {
    throw new Error("canceled");
  }

  const ret: any = await window.metaidwallet.signMessage({
    message: publicKey,
    encoding: "base64",
  });
  if (ret?.status === "canceled") throw new Error("canceled");

  let publicKeySign =
    typeof ret?.signature === "string"
      ? ret.signature
      : ret?.signature?.signature;

  return {
    publicKey,
    publicKeySign,
    publicKeyReceiveSign: String(publicKeyReceiveSign),
    publicKeyReceive,
  };
}

async function signMintPublicKeys(): Promise<{
  publicKey: string;
  publicKeySign: string;
  publicKeyReceiveSign: string;
  publicKeyReceive: string;
}> {
  const publicKeyReceive = await window.metaidwallet.getPublicKey();
  const publicKey = await window.metaidwallet.btc.getPublicKey();

  const publicKeySign: any =
    await window.metaidwallet.btc.signMessage(publicKey);
  if (
    typeof publicKeySign === "object" &&
    publicKeySign?.status === "canceled"
  ) {
    throw new Error("canceled");
  }

  const ret: any = await window.metaidwallet.signMessage({
    message: publicKeyReceive,
    encoding: "base64",
  });
  if (ret?.status === "canceled") throw new Error("canceled");

  const publicKeyReceiveSign =
    typeof ret?.signature === "string"
      ? ret.signature
      : ret?.signature?.signature;

  return {
    publicKey,
    publicKeySign: String(publicKeySign),
    publicKeyReceiveSign,
    publicKeyReceive,
  };
}

export async function redeemBtc(
  redeemAmount: string | number,
  btcAsset: API.AssetItem,
  addressType: SupportRedeemAddressType,
  network: Network,
  assetInfo?: API.AssetsData,
  userBtcFeeRate?: number
): Promise<{ orderId: string; txid: string }> {
  try {
    const chosenBtcRate = Math.max(
      1,
      Math.ceil(Number(userBtcFeeRate || assetInfo?.feeBtc || 2))
    );
    const { publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive } =
      await signRedeemPublicKeys();

    const createPrepayOrderDto = {
      amount: String(redeemAmount),
      originTokenId: btcAsset.originTokenId,
      addressType,
      publicKey,
      publicKeySign,
      publicKeyReceive,
      publicKeyReceiveSign,
      btcFeeRate: chosenBtcRate,
    };

    const { data: createResp } = await createPrepayOrderRedeemBtc(
      network,
      createPrepayOrderDto
    );
    const {
      orderId,
      bridgeAddress,
      mvcFeeSats = 0,
      mvcFeeAddress = "",
      btcFeeSats = 0,
      btcFeeAddress = "",
    } = createResp;

    // 1. Local MVC signing (broadcast: false): [mvcFeeTx, routeCheckTx, ftTx]
    const { mvcFeeTxHex, txHexList, txid } = await signMvcRedeemBundle({
      redeemAmount: String(redeemAmount),
      bridgeAddress,
      targetTokenCodeHash: btcAsset.targetTokenCodeHash,
      targetTokenGenesis: btcAsset.targetTokenGenesis,
      tokenDecimal: btcAsset.decimals - btcAsset.trimDecimals,
      mvcFeeSats: Number(mvcFeeSats || 0),
      mvcFeeAddress,
    });

    // 2. Local BTC fee signing (signPsbt without broadcast)
    const btcAddress = await window.metaidwallet.btc.getAddress();
    let btcFeeTxHex: string | undefined;
    let btcChangeUtxo: { txId: string; vout: number } | undefined;
    if (Number(btcFeeSats) > 0 && btcFeeAddress) {
      const btcFeeTx = await transferBTCsWithMeta({
        transfers: [
          {
            toAddress: btcFeeAddress,
            satoshis: Number(btcFeeSats),
          },
        ],
        address: btcAddress,
        feeRate: chosenBtcRate,
        addressType,
        network,
      });
      btcFeeTxHex = btcFeeTx.rawTx;
      btcChangeUtxo = btcFeeTx.changeUtxo;
    }

    // 3. Atomic backend verification & topological broadcast
    const ret = await submitPrepayOrderRedeemBtc(network, {
      orderId,
      txid,
      txHexList,
      mvcFeeTxHex,
      btcFeeTxHex,
    });
    if (!ret.success) {
      throw new Error(ret.msg || ret.message || "Redeem BTC submit failed");
    }
    if (btcChangeUtxo) {
      await addUtxoSafe(btcAddress, [btcChangeUtxo]);
    }
    return { orderId, txid };
  } catch (error) {
    throw new Error(extractApiErrorMessage(error));
  }
}

export async function redeemMrc20(
  redeemAmount: string | number,
  asset: API.AssetItem,
  addressType: SupportRedeemAddressType,
  network: Network,
  assetInfo?: API.AssetsData,
  userBtcFeeRate?: number
): Promise<{ orderId: string; txid: string }> {
  try {
    const chosenBtcRate = Math.max(
      1,
      Math.ceil(Number(userBtcFeeRate || assetInfo?.feeBtc || 2))
    );
    const { publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive } =
      await signRedeemPublicKeys();

    const createPrepayOrderDto = {
      amount: String(redeemAmount),
      originTokenId: asset.originTokenId,
      addressType,
      publicKey,
      publicKeySign,
      publicKeyReceive,
      publicKeyReceiveSign,
      btcFeeRate: chosenBtcRate,
    };

    const { data: createResp } = await createPrepayOrderRedeemMrc20(
      network,
      createPrepayOrderDto
    );
    const {
      orderId,
      bridgeAddress,
      mvcFeeSats = 0,
      mvcFeeAddress = "",
      btcFeeSats = 0,
      btcFeeAddress = "",
    } = createResp;

    // 1. Local MVC signing (broadcast: false): [mvcFeeTx, routeCheckTx, ftTx]
    const { mvcFeeTxHex, txHexList, txid } = await signMvcRedeemBundle({
      redeemAmount: String(redeemAmount),
      bridgeAddress,
      targetTokenCodeHash: asset.targetTokenCodeHash,
      targetTokenGenesis: asset.targetTokenGenesis,
      tokenDecimal: asset.decimals - asset.trimDecimals,
      mvcFeeSats: Number(mvcFeeSats || 0),
      mvcFeeAddress,
    });

    // 2. Local BTC fee signing (signPsbt without broadcast)
    const btcAddress = await window.metaidwallet.btc.getAddress();
    let btcFeeTxHex: string | undefined;
    let btcChangeUtxo: { txId: string; vout: number } | undefined;
    if (Number(btcFeeSats) > 0 && btcFeeAddress) {
      const btcFeeTx = await transferBTCsWithMeta({
        transfers: [
          {
            toAddress: btcFeeAddress,
            satoshis: Number(btcFeeSats),
          },
        ],
        address: btcAddress,
        feeRate: chosenBtcRate,
        addressType,
        network,
      });
      btcFeeTxHex = btcFeeTx.rawTx;
      btcChangeUtxo = btcFeeTx.changeUtxo;
    }

    // 3. Atomic backend verification & topological broadcast
    const ret = await submitPrepayOrderRedeemMrc20(network, {
      orderId,
      txid,
      txHexList,
      mvcFeeTxHex,
      btcFeeTxHex,
    });
    if (!ret.success) {
      throw new Error(ret.msg || ret.message || "Redeem MRC20 submit failed");
    }
    if (btcChangeUtxo) {
      await addUtxoSafe(btcAddress, [btcChangeUtxo]);
    }
    return { orderId, txid };
  } catch (error) {
    throw new Error(extractApiErrorMessage(error));
  }
}

export async function mintBtc(
  mintAmount: string | number,
  btcAsset: API.AssetItem,
  addressType: SupportRedeemAddressType,
  network: Network,
  assetInfo: API.AssetsData,
  userBtcFeeRate?: number
) {
  try {
    const chosenBtcRate = Math.max(
      1,
      Math.ceil(Number(userBtcFeeRate || assetInfo.feeBtc || 2))
    );
    const { publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive } =
      await signMintPublicKeys();

    const createPrepayOrderDto = {
      amount: String(mintAmount),
      originTokenId: btcAsset.originTokenId,
      addressType,
      publicKey,
      publicKeySign,
      publicKeyReceive,
      publicKeyReceiveSign,
      btcFeeRate: chosenBtcRate,
    };

    const { data: createResp } = await createPrepayOrderMintBtc(
      network,
      createPrepayOrderDto
    );

    const {
      orderId,
      bridgeAddress,
      btcFeeAddress,
      btcFeeSats,
      bridgeRuleServiceAddress,
      bridgeRuleServiceMintFee,
    } = createResp;

    const serviceAddress = btcFeeAddress || bridgeRuleServiceAddress;
    const serviceFeeSats = Number(btcFeeSats ?? bridgeRuleServiceMintFee ?? 0);

    const transfers = [
      {
        toAddress: bridgeAddress,
        satoshis: Number(mintAmount),
      },
    ];
    if (serviceAddress && serviceFeeSats > 0) {
      transfers.push({
        toAddress: serviceAddress,
        satoshis: serviceFeeSats,
      });
    }

    const btcAddress = await window.metaidwallet.btc.getAddress();
    const { rawTx, changeUtxo } = await transferBTCsWithMeta({
      transfers,
      address: btcAddress,
      feeRate: chosenBtcRate,
      addressType,
      network,
    });

    const submitRes = await submitPrepayOrderMintBtc(network, {
      orderId,
      txHex: rawTx,
    });
    if (!submitRes.success) {
      throw new Error(submitRes.msg || submitRes.message || "Mint BTC failed");
    }
    if (changeUtxo) {
      await addUtxoSafe(btcAddress, [changeUtxo]);
    }
    return submitRes;
  } catch (error) {
    throw new Error(extractApiErrorMessage(error));
  }
}

export async function mintMrc20(
  mintAmount: string | number,
  asset: API.AssetItem,
  addressType: SupportRedeemAddressType,
  network: Network,
  assetInfo: API.AssetsData,
  userBtcFeeRate?: number
) {
  try {
    const chosenBtcRate = Math.max(
      1,
      Math.ceil(Number(userBtcFeeRate || assetInfo.feeBtc || 2))
    );
    const { publicKey, publicKeySign, publicKeyReceiveSign, publicKeyReceive } =
      await signMintPublicKeys();

    const amountStr = String(mintAmount).trim();
    const createPrepayOrderDto = {
      amount: amountStr,
      originTokenId: asset.originTokenId,
      addressType,
      publicKey,
      publicKeySign,
      publicKeyReceive,
      publicKeyReceiveSign,
      btcFeeRate: chosenBtcRate,
    };

    const { data: createResp } = await createPrepayOrderMintMrc20(
      network,
      createPrepayOrderDto
    );

    const {
      orderId,
      bridgeAddress,
      btcFeeAddress,
      btcFeeSats,
      bridgeRuleServiceAddress,
      bridgeRuleServiceMintFee,
    } = createResp;

    const serviceAddress = btcFeeAddress || bridgeRuleServiceAddress;
    const serviceFeeSats = Number(btcFeeSats ?? bridgeRuleServiceMintFee ?? 0);

    const params: any = {
      body: JSON.stringify([
        {
          amount: amountStr,
          vout: 1,
          id: asset.originTokenId,
        },
      ]),
      amount: amountStr,
      mrc20TickId: asset.originTokenId,
      flag: "metaid",
      revealAddr: bridgeAddress,
      commitFeeRate: chosenBtcRate,
      revealFeeRate: chosenBtcRate,
    };

    if (serviceAddress && serviceFeeSats > 0) {
      params.service = {
        address: serviceAddress,
        satoshis: String(serviceFeeSats),
      };
    }

    const mrc20Transfer = await window.metaidwallet.btc
      .transferMRC20(params)
      .catch((e) => {
        throw new Error(extractApiErrorMessage(e));
      });
    if (mrc20Transfer.status) {
      throw new Error(mrc20Transfer.status);
    }

    const { commitTx, revealTx } = mrc20Transfer;
    const submitRes = await submitPrepayOrderMintMrc20(network, {
      orderId,
      txHexList: [commitTx.rawTx, revealTx.rawTx],
    });
    if (!submitRes.success) {
      throw new Error(submitRes.msg || submitRes.message || "Mint MRC20 failed");
    }
    return submitRes;
  } catch (error) {
    throw new Error(extractApiErrorMessage(error));
  }
}
