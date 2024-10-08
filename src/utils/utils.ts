import Decimal from "decimal.js";
import BigNumber from "bignumber.js";
import dayjs from "dayjs";
import { message } from "antd";
import {
  SupportRedeemAddressType,
  supportRedeemAddressType,
} from "@/servies/wrapping";
export const formatSat = (value: string | number, dec = 8) => {
  if (!value) return "0";

  const v = BigNumber(value).div(Math.pow(10, dec));
  const arr = v.toString().split(".");
  if (v.toString().indexOf("e") > -1 || (arr[1] && arr[1].length > dec)) {
    return BigNumber(v).toFixed(dec);
  }
  return v.toString();
};

export function amountRaw(
  amount: string,
  decimals: number,
  maxValue?: BigNumber | bigint | string
) {
  const _amountRaw = new BigNumber(amount).multipliedBy(Math.pow(10, decimals));
  if (maxValue) {
    const _maxValue = new BigNumber(maxValue.toString())
      .multipliedBy(9999999)
      .div(10000000);
    if (_amountRaw.gte(_maxValue)) {
      return maxValue.toString();
    }
  }
  return _amountRaw.toFixed(0);
}

const confirmNumberBySeqAndAmount = function (
  amount: number,
  seq: number[][],
  network: "BTC" | "BRC20" | "RUNES" | "MVC" | "MRC20"
) {
  for (const item of seq) {
    const [start, end, confirmBtc, confirmMvc] = item;
    if (end) {
      if (start <= amount && amount <= end) {
        if (network === "MVC") {
          return confirmMvc;
        } else {
          return confirmBtc;
        }
      }
    } else {
      if (start <= amount) {
        if (network === "MVC") {
          return confirmMvc;
        } else {
          return confirmBtc;
        }
      }
    }
  }
  return 5;
};

export type FeeInfo = {
  receiveAmount: number | string;
  minerFee: number | string;
  bridgeFee: number | string;
  totalFee: number | string;
};
export const calcRedeemBtcInfo = (
  redeemAmount: number,
  assetInfo: API.AssetsData
): FeeInfo => {
  const {
    feeBtc,
    amountLimitMaximum,
    amountLimitMinimum,
    confirmSequence,
    transactionSize,
    assetList,
  } = assetInfo;
  if (redeemAmount < Number(amountLimitMinimum)) {
    throw new Error("amount less than minimum amount");
  }
  if (redeemAmount > Number(amountLimitMaximum)) {
    throw new Error("amount greater than maximum amount");
  }
  const confirmNumber = confirmNumberBySeqAndAmount(
    redeemAmount,
    confirmSequence,
    // mint btc -> mvc, get mvc confirm number
    "MVC"
  );
  const btcAsset = assetList.find((item) => item.network === "BTC");
  if (!btcAsset) throw new Error("no assrt");
  const bridgeFee =
    (redeemAmount * btcAsset.feeRateNumeratorRedeem) / 10000 +
    btcAsset.feeRateConstRedeem;
  const minerFee = transactionSize.BTC_REDEEM * feeBtc;
  const totalFee = Math.floor(bridgeFee + minerFee);
  const receiveAmount = redeemAmount - totalFee;
  debugger;
  return {
    receiveAmount: formatSat(receiveAmount),
    minerFee: formatSat(minerFee),
    bridgeFee: formatSat(bridgeFee),
    totalFee: formatSat(totalFee),
    confirmNumber,
  };
};

export const calcRedeemBrc20Info = (
  redeemAmount: number,
  assetInfo: API.AssetsData,
  asset: API.AssetItem
): FeeInfo => {
  const {
    btcPrice,
    feeBtc,
    amountLimitMaximum,
    amountLimitMinimum,
    confirmSequence,
    transactionSize,
  } = assetInfo;

  const brcAmount = redeemAmount / 10 ** (asset.decimals - asset.trimDecimals);
  const redeemBrc20EqualBtcAmount =
    ((asset.price * Number(brcAmount)) / btcPrice) * 10 ** 8;

  if (redeemBrc20EqualBtcAmount < Number(amountLimitMinimum)) {
    throw new Error("amount less than minimum amount");
  }
  if (redeemBrc20EqualBtcAmount > Number(amountLimitMaximum)) {
    throw new Error("amount greater than maximum amount");
  }

  const confirmNumber = confirmNumberBySeqAndAmount(
    redeemBrc20EqualBtcAmount,
    confirmSequence,
    // mint btc -> mvc, get mvc confirm number
    "MVC"
  );
  const bridgeFeeConst = BigInt(
    Math.floor(
      (((asset.feeRateConstRedeem / 10 ** 8) * btcPrice) / asset.price) *
        10 ** (asset.decimals - asset.trimDecimals)
    )
  );
  const bridgeFeePercent =
    (BigInt(redeemAmount) * BigInt(asset.feeRateNumeratorRedeem)) / 10000n;
  const bridgeFee = bridgeFeeConst + bridgeFeePercent;
  const minerFee = BigInt(
    Math.floor(
      (((transactionSize.BRC20_REDEEM / 10 ** 8) * feeBtc * btcPrice) /
        asset.price) *
        10 ** (asset.decimals - asset.trimDecimals)
    )
  );
  const totalFee = bridgeFee + minerFee;
  const receiveAmount = BigInt(redeemAmount) - totalFee;
  return {
    receiveAmount: formatSat(
      String(receiveAmount),
      asset.decimals - asset.trimDecimals
    ),
    minerFee: formatSat(String(minerFee), asset.decimals - asset.trimDecimals),
    bridgeFee: formatSat(
      String(bridgeFee),
      asset.decimals - asset.trimDecimals
    ),
    totalFee: formatSat(String(totalFee), asset.decimals - asset.trimDecimals),
    confirmNumber,
  };
};

export const calcMintBtcInfo = (
  mintAmount: number,
  assetInfo: API.AssetsData
): FeeInfo => {
  const {
    btcPrice,
    mvcPrice,
    feeBtc,
    feeMvc,
    amountLimitMaximum,
    amountLimitMinimum,
    confirmSequence,
    transactionSize,
    assetList,
  } = assetInfo;
  if (mintAmount < Number(amountLimitMinimum)) {
    throw new Error("amount less than minimum amount");
  }
  if (mintAmount > Number(amountLimitMaximum)) {
    throw new Error("amount greater than maximum amount");
  }
  const confirmNumber = confirmNumberBySeqAndAmount(
    mintAmount,
    confirmSequence,
    // mint btc -> mvc, get mvc confirm number
    "BTC"
  );
  const btcAsset = assetList.find((item) => item.network === "BTC");
  if (!btcAsset) throw new Error("no asset");
  let bridgeFee: number = 0;
  let minerFee: number = 0;
  if (btcAsset.feeRateNumeratorMint > 0 || btcAsset.feeRateConstMint > 0) {
    bridgeFee =
      (mintAmount * btcAsset.feeRateNumeratorMint) / 10000 +
      btcAsset.feeRateConstMint;
    minerFee = (transactionSize.BTC_MINT * feeMvc * mvcPrice) / btcPrice;
  }
  const totalFee = Math.floor(bridgeFee + minerFee);
  const receiveAmount = mintAmount - totalFee;

  return {
    receiveAmount: formatSat(receiveAmount),
    minerFee: formatSat(minerFee),
    bridgeFee: formatSat(bridgeFee),
    totalFee: formatSat(totalFee),
    confirmNumber,
  };
};

export const calcMintBtcRange = (assetInfo: API.AssetsData) => {
  const { amountLimitMaximum, amountLimitMinimum } = assetInfo;
  return [
    Number(formatSat(amountLimitMinimum)),
    Number(formatSat(amountLimitMaximum)),
  ];
};

export const calcRedeemBtcRange = (assetInfo: API.AssetsData) => {
  const { amountLimitMaximum, amountLimitMinimum } = assetInfo;
  return [
    Number(formatSat(amountLimitMinimum)),
    Number(formatSat(amountLimitMaximum)),
  ];
};

export const calcMintBrc20Info = (
  mintAmount: number,
  assetInfo: API.AssetsData,
  asset: API.AssetItem
): FeeInfo => {
  const {
    btcPrice,
    mvcPrice,
    feeBtc,
    feeMvc,
    amountLimitMaximum,
    amountLimitMinimum,
    confirmSequence,
    transactionSize,
    assetList,
  } = assetInfo;
  const assetRdex = asset;
  const mintBrc20EqualBtcAmount =
    ((assetRdex.price * Number(mintAmount)) / btcPrice) * 10 ** 8;
  if (Number(mintBrc20EqualBtcAmount) < Number(amountLimitMinimum)) {
    throw new Error("amount less than minimum amount");
  }
  if (Number(mintBrc20EqualBtcAmount) > Number(amountLimitMaximum)) {
    throw new Error("amount greater than maximum amount");
  }

  const confirmNumber = confirmNumberBySeqAndAmount(
    mintBrc20EqualBtcAmount,
    confirmSequence,
    // mint btc -> mvc, get mvc confirm number
    "BRC20"
  );
  let bridgeFee: number = 0;
  let minerFee: number = 0;
  if (assetRdex.feeRateNumeratorMint > 0 || assetRdex.feeRateConstMint > 0) {
    bridgeFee =
      (Number(mintAmount) * assetRdex.feeRateNumeratorMint) / 10000 +
      ((assetRdex.feeRateConstMint / 10 ** 8) * btcPrice) / assetRdex.price;
    minerFee =
      (transactionSize.BTC_MINT * feeMvc * mvcPrice) /
      10 ** 8 /
      assetRdex.price;
  }
  const totalFee = bridgeFee + minerFee;
  const receiveAmount = Number(mintAmount) - totalFee;
  const receiveAmountFixed = receiveAmount.toFixed(
    assetRdex.decimals - assetRdex.trimDecimals
  );
  return {
    receiveAmount: receiveAmountFixed,
    minerFee,
    bridgeFee,
    totalFee,
    confirmNumber,
  };
};

export const calcMintBrc20Range = (
  assetInfo: API.AssetsData,
  asset: API.AssetItem
) => {
  const { btcPrice, amountLimitMaximum, amountLimitMinimum } = assetInfo;
  const assetRdex = asset;
  const minAmount =
    ((Number(amountLimitMinimum) / 1e8) * btcPrice) / assetRdex.price;
  const maxAmount =
    ((Number(amountLimitMaximum) / 1e8) * btcPrice) / assetRdex.price;
  return [minAmount, maxAmount];
};

export function determineAddressInfo(address: string): string {
  if (address.startsWith("bc1q")) {
    return "p2wpkh";
  }
  if (address.startsWith("tb1q")) {
    return "p2wpkh";
  }

  if (address.startsWith("bc1p")) {
    return "p2tr";
  }

  if (address.startsWith("tb1p")) {
    return "p2tr";
  }

  if (address.startsWith("1")) {
    return "p2pkh";
  }
  if (address.startsWith("3") || address.startsWith("2")) {
    return "p2sh";
  }
  if (address.startsWith("m") || address.startsWith("n")) {
    return "p2pkh";
  }
  return "unknown";
}

export function prettyTimestamp(
  timestamp: number,
  isInSeconds = false,
  cutThisYear = false
) {
  if (isInSeconds) timestamp = timestamp * 1000;

  if (cutThisYear) return dayjs(timestamp).format("MM-DD HH:mm:ss");

  return dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss");
}

export const formatUnitToSats = (
  value: number | string,
  decimal: number = 8
) => {
  if (!value) {
    return 0;
  }
  return new Decimal(value).mul(10 ** decimal).toNumber();
};

export const formatUnitToBtc = (
  value: number | string,
  decimal: number = 8
) => {
  if (!value) {
    return 0;
  }
  return new Decimal(value).div(10 ** decimal).toNumber();
};

export const calcMintRunesInfo = (
  mintAmount: number,
  assetInfo: API.AssetsData,
  asset: API.AssetItem
): FeeInfo => {
  const {
    btcPrice,
    mvcPrice,
    feeBtc,
    feeMvc,
    amountLimitMaximum,
    amountLimitMinimum,
    confirmSequence,
    transactionSize,
    assetList,
  } = assetInfo;
  console.log("asset:", asset);

  console.log(new Decimal(mintAmount).mul(10 ** asset.decimals));

  // // 转换成btc价值
  const mintRunesEqualBtcAmount =
    ((asset.price * Number(mintAmount)) / btcPrice) * 10 ** 8;
  console.log("mintRunesEqualBtcAmount:", mintRunesEqualBtcAmount);
  console.log(
    "mintRunesEqualBtcAmount:",
    amountLimitMinimum,
    amountLimitMaximum
  );

  if (Number(mintRunesEqualBtcAmount) < Number(amountLimitMinimum)) {
    throw new Error("amount less than minimum amount");
  }
  if (Number(mintRunesEqualBtcAmount) > Number(amountLimitMaximum)) {
    throw new Error("amount greater than maximum amount");
  }

  const confirmNumber = confirmNumberBySeqAndAmount(
    mintRunesEqualBtcAmount,
    confirmSequence,
    // mint btc -> mvc, get mvc confirm number
    "RUNES"
  );
  let bridgeFee: number = 0;
  let minerFee: number = 0;
  if (asset.feeRateNumeratorMint > 0 || asset.feeRateConstMint > 0) {
    bridgeFee =
      (Number(mintAmount) * asset.feeRateNumeratorMint) / 10000 +
      ((asset.feeRateConstMint / 10 ** 8) * btcPrice) / asset.price;
    minerFee =
      (transactionSize.BTC_MINT * feeMvc * mvcPrice) / 10 ** 8 / asset.price;
  }
  const totalFee = bridgeFee + minerFee;
  const receiveAmount = Number(mintAmount) - totalFee;
  const receiveAmountFixed = receiveAmount.toFixed(
    asset.decimals - asset.trimDecimals
  );
  return {
    receiveAmount: receiveAmountFixed,
    minerFee,
    bridgeFee,
    totalFee,
    confirmNumber,
  };
};

export const calcRedeemRunesInfo = (
  redeemAmount: number,
  assetInfo: API.AssetsData,
  asset: API.AssetItem
): FeeInfo => {
  const {
    btcPrice,
    feeBtc,
    amountLimitMaximum,
    amountLimitMinimum,
    confirmSequence,
    transactionSize,
  } = assetInfo;

  const runesAmount =
    redeemAmount / 10 ** (asset.decimals - asset.trimDecimals);
  const redeemBrc20EqualBtcAmount =
    ((asset.price * Number(runesAmount)) / btcPrice) * 10 ** 8;

  if (redeemBrc20EqualBtcAmount < Number(amountLimitMinimum)) {
    throw new Error("amount less than minimum amount");
  }
  if (redeemBrc20EqualBtcAmount > Number(amountLimitMaximum)) {
    throw new Error("amount greater than maximum amount");
  }

  const confirmNumber = confirmNumberBySeqAndAmount(
    redeemBrc20EqualBtcAmount,
    confirmSequence,
    // mint btc -> mvc, get mvc confirm number
    "MVC"
  );
  const bridgeFeeConst = BigInt(
    Math.floor(
      (((asset.feeRateConstRedeem / 10 ** 8) * btcPrice) / asset.price) *
        10 ** (asset.decimals - asset.trimDecimals)
    )
  );
  const bridgeFeePercent =
    (BigInt(redeemAmount) * BigInt(asset.feeRateNumeratorRedeem)) / 10000n;
  const bridgeFee = bridgeFeeConst + bridgeFeePercent;
  const minerFee = BigInt(
    Math.floor(
      (((transactionSize.RUNES_REDEEM / 10 ** 8) * feeBtc * btcPrice) /
        asset.price) *
        10 ** (asset.decimals - asset.trimDecimals)
    )
  );
  const totalFee = bridgeFee + minerFee;
  const receiveAmount = BigInt(redeemAmount) - totalFee;
  return {
    receiveAmount: formatSat(
      String(receiveAmount),
      asset.decimals - asset.trimDecimals
    ),
    minerFee: formatSat(String(minerFee), asset.decimals - asset.trimDecimals),
    bridgeFee: formatSat(
      String(bridgeFee),
      asset.decimals - asset.trimDecimals
    ),
    totalFee: formatSat(String(totalFee), asset.decimals - asset.trimDecimals),
    confirmNumber,
  };
};

export const calcRedeemMrc20Info = (
  redeemAmount: number,
  assetInfo: API.AssetsData,
  asset: API.AssetItem
): FeeInfo => {
  const {
    btcPrice,
    feeBtc,
    amountLimitMaximum,
    amountLimitMinimum,
    confirmSequence,
    transactionSize,
  } = assetInfo;

  const brcAmount = redeemAmount / 10 ** (asset.decimals - asset.trimDecimals);
  const redeemMrc20EqualBtcAmount =
    ((asset.price * Number(brcAmount)) / btcPrice) * 10 ** 8;

  if (redeemMrc20EqualBtcAmount < Number(amountLimitMinimum)) {
    throw new Error("amount less than minimum amount");
  }
  if (redeemMrc20EqualBtcAmount > Number(amountLimitMaximum)) {
    throw new Error("amount greater than maximum amount");
  }

  const confirmNumber = confirmNumberBySeqAndAmount(
    redeemMrc20EqualBtcAmount,
    confirmSequence,
    // mint btc -> mvc, get mvc confirm number
    "MVC"
  );
  const bridgeFeeConst = BigInt(
    Math.floor(
      (((asset.feeRateConstRedeem / 10 ** 8) * btcPrice) / asset.price) *
        10 ** (asset.decimals - asset.trimDecimals)
    )
  );
  const bridgeFeePercent =
    (BigInt(redeemAmount) * BigInt(asset.feeRateNumeratorRedeem)) / 10000n;
  const bridgeFee = bridgeFeeConst + bridgeFeePercent;
  const minerFee = BigInt(
    Math.floor(
      (((transactionSize.RUNES_REDEEM / 10 ** 8) * feeBtc * btcPrice) /
        asset.price) *
        10 ** (asset.decimals - asset.trimDecimals)
    )
  );
  const totalFee = bridgeFee + minerFee;
  const receiveAmount = BigInt(redeemAmount) - totalFee;
  return {
    receiveAmount: formatSat(
      String(receiveAmount),
      asset.decimals - asset.trimDecimals
    ),
    minerFee: formatSat(String(minerFee), asset.decimals - asset.trimDecimals),
    bridgeFee: formatSat(
      String(bridgeFee),
      asset.decimals - asset.trimDecimals
    ),
    totalFee: formatSat(String(totalFee), asset.decimals - asset.trimDecimals),
    confirmNumber,
  };
};

export const calcMintMRC20Info = (
  mintAmount: number,
  assetInfo: API.AssetsData,
  asset: API.AssetItem
): FeeInfo => {
  const {
    btcPrice,
    mvcPrice,
    feeBtc,
    feeMvc,
    amountLimitMaximum,
    amountLimitMinimum,
    confirmSequence,
    transactionSize,
    assetList,
  } = assetInfo;

  const mintRawAmount = new Decimal(mintAmount)
    .mul(10 ** asset.decimals)
    .toFixed(0);
  const mintMrc20EqualBtcAmount =
    ((asset.price * Number(mintAmount)) / btcPrice) * 10 ** 8;

  if (Number(mintMrc20EqualBtcAmount) < Number(amountLimitMinimum)) {
    throw new Error("amount less than minimum amount");
  }
  if (Number(mintMrc20EqualBtcAmount) > Number(amountLimitMaximum)) {
    throw new Error("amount greater than maximum amount");
  }

  const confirmNumber = confirmNumberBySeqAndAmount(
    mintMrc20EqualBtcAmount,
    confirmSequence,
    // mint btc -> mvc, get mvc confirm number
    "MRC20"
  );
  let bridgeFee: number = 0;
  let minerFee: number = 0;
  if (asset.feeRateNumeratorMint > 0 || asset.feeRateConstMint > 0) {
    bridgeFee =
      (Number(mintAmount) * asset.feeRateNumeratorMint) / 10000 +
      ((asset.feeRateConstMint / 10 ** 8) * btcPrice) / asset.price;
    minerFee =
      (transactionSize.BTC_MINT * feeMvc * mvcPrice) / 10 ** 8 / asset.price;
  }
  const totalFee = bridgeFee + minerFee;
  const receiveAmount = Number(mintAmount) - totalFee;
  const receiveAmountFixed = receiveAmount.toFixed(
    asset.decimals - asset.trimDecimals
  );
  return {
    receiveAmount: receiveAmountFixed,
    minerFee: minerFee.toFixed(asset.decimals),
    bridgeFee: bridgeFee.toFixed(asset.decimals),
    totalFee: totalFee.toFixed(asset.decimals),
    confirmNumber,
  };
};

const getTransactionSize = (
  transactionSize: API.TransactionSize,
  actionType: string
) => {
  switch (actionType) {
    case "mintbtc":
      return transactionSize.BTC_MINT;
    case "mintbrc20":
      return transactionSize.BTC_MINT;
    case "mintmrc20":
      return transactionSize.BTC_MINT;
    case "mintrunes":
      return transactionSize.BTC_MINT;
    case "redeembtc":
      return transactionSize.BTC_REDEEM;
    case "redeembrc20":
      return transactionSize.BRC20_REDEEM;
    case "redeemrunes":
      return transactionSize.BRC20_REDEEM;
    case "redeemmrc20":
      return transactionSize.BRC20_REDEEM;
    default:
      console.log(actionType);
      throw new Error("unsupport protocol");
  }
};
export const calculateQuantityLimitRange = (
  assetInfo: API.AssetsData,
  asset: API.AssetItem
) => {
  const { btcPrice, amountLimitMaximum, amountLimitMinimum } = assetInfo;
  const price = asset.network === "BTC" ? btcPrice : asset.price || 0
  const minAmount = new Decimal(amountLimitMinimum)
    .div(1e8)
    .mul(btcPrice)
    .div(price)
    .toNumber();
  const maxAmount = new Decimal(amountLimitMaximum)
    .div(1e8)
    .mul(btcPrice)
    .div(price)
    .toNumber();
  return [minAmount, maxAmount];
};
export const calcRedeemInfo = (
  amount: number,
  assetInfo: API.AssetsData,
  asset: API.AssetItem
) => {
  const { btcPrice, feeBtc, transactionSize } = assetInfo;
  const decimals = asset.decimals - asset.trimDecimals;
  const bigIntAmount = new Decimal(amount).mul(10 ** decimals).toFixed(0);
  // 资产价格
  const price = asset.network === "BTC" ? btcPrice : asset.price;

  // 判断是否在限额范围内
  const [minAmount, maxAmount] = calculateQuantityLimitRange(assetInfo, asset);
  if (amount < minAmount) {
    throw new Error("amount less than minimum amount");
  }
  if (amount > maxAmount) {
    throw new Error("amount greater than maximum amount");
  }
  // 固定费用
  const bridgeFeeConst = BigInt(
    Math.floor(
      (((asset.feeRateConstRedeem / 10 ** 8) * btcPrice) / price) *
        10 ** decimals
    )
  );
  // 按比例收取的费用
  const bridgeFeePercent =
    (BigInt(bigIntAmount) * BigInt(asset.feeRateNumeratorRedeem)) / 10000n;
  // 桥费
  const bridgeFee = bridgeFeeConst + bridgeFeePercent;
  const tragetTransactionSize = getTransactionSize(
    transactionSize,
    `redeem${asset.network.toLowerCase()}`
  );
  // target tx 矿工费

  const minerFee = BigInt(
    Math.floor(
      (((tragetTransactionSize / 10 ** 8) * feeBtc * btcPrice) / price) *
        10 ** decimals
    )
  );
  const totalFee = bridgeFee + minerFee;
  const receiveAmount = BigInt(bigIntAmount) - totalFee;
  return {
    receiveAmount: new Decimal(receiveAmount.toString())
      .div(10 ** decimals)
      .toFixed(decimals),
    minerFee: new Decimal(minerFee.toString())
      .div(10 ** decimals)
      .toFixed(decimals),
    bridgeFee: new Decimal(bridgeFee.toString())
      .div(10 ** decimals)
      .toFixed(decimals),
    totalFee: new Decimal(totalFee.toString())
      .div(10 ** decimals)
      .toFixed(decimals),
  };
};

export const calcMintInfo = (
  amount: number,
  assetInfo: API.AssetsData,
  asset: API.AssetItem
) => {
  const { btcPrice, mvcPrice, feeMvc, transactionSize } = assetInfo;
  const decimals = asset.decimals;
  const bigIntAmount = new Decimal(amount).mul(10 ** decimals).toFixed(0);
  // 资产价格
  const price = asset.network === "BTC" ? btcPrice : asset.price;
  const [minAmount, maxAmount] = calculateQuantityLimitRange(assetInfo, asset);
  if (amount < minAmount) {
    throw new Error("amount less than minimum amount");
  }
  if (amount > maxAmount) {
    throw new Error("amount greater than maximum amount");
  }
  const bridgeFeeConst = BigInt(
    Math.floor(
      (((asset.feeRateConstMint / 10 ** 8) * btcPrice) / price) * 10 ** decimals
    )
  );
  // 按比例收取的费用
  const bridgeFeePercent =
    (BigInt(bigIntAmount) * BigInt(asset.feeRateNumeratorMint)) / 10000n;
  const bridgeFee = bridgeFeeConst + bridgeFeePercent;
  const tragetTransactionSize = getTransactionSize(
    transactionSize,
    `mint${asset.network.toLowerCase()}`
  );
  // target tx 矿工费
  const minerFee = BigInt(
    Math.floor(
      (((tragetTransactionSize / 10 ** 8) * feeMvc * mvcPrice) / price) *
        10 ** decimals
    )
  );
  const totalFee = bridgeFee + minerFee;
  const receiveAmount = BigInt(bigIntAmount) - totalFee;
  return {
    receiveAmount: new Decimal(receiveAmount.toString())
      .div(10 ** decimals)
      .toFixed(asset.decimals - asset.trimDecimals),
    minerFee: new Decimal(minerFee.toString())
      .div(10 ** decimals)
      .toFixed(decimals),
    bridgeFee: new Decimal(bridgeFee.toString())
      .div(10 ** decimals)
      .toFixed(decimals),
    totalFee: new Decimal(totalFee.toString())
      .div(10 ** decimals)
      .toFixed(decimals),
  };
};

export const checkAddressType = (address: string) => {
  const addressType = determineAddressInfo(
    address
  ).toUpperCase() as SupportRedeemAddressType;
  if (supportRedeemAddressType.includes(addressType)) {
    return { pass: true, message: "" };
  }
  return {
    pass: false,
    message: `Only ${supportRedeemAddressType.join(",")} address is supported`,
  };
};
