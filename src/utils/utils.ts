import Decimal from "decimal.js";
import BigNumber from "bignumber.js";
import dayjs from 'dayjs'
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
  network: "BTC" | "BRC20" | "MVC"
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
export const calcRedeemBtcInfo = (
  redeemAmount: number,
  assetInfo: API.AssetsData
) => {
  const {
    feeBtc,
    amountLimitMaximum,
    amountLimitMinimum,
    confirmSequence,
    transactionSize,
    assetList,
  } = assetInfo;
  if (redeemAmount < Number(amountLimitMinimum)) {
    throw new Error("mint amount less than  minimum amount");
  }
  if (redeemAmount > Number(amountLimitMaximum)) {
    throw new Error("mint amount greater than  maximum amount");
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
  return {
    receiveAmount,
    minerFee,
    bridgeFee,
    totalFee,
    confirmNumber,
  };
};

export const calcRedeemBrc20Info = (
  redeemAmount: number,
  assetInfo: API.AssetsData,
  asset: API.AssetItem
) => {
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
    throw new Error("mint amount less than  minimum amount");
  }
  if (redeemBrc20EqualBtcAmount > Number(amountLimitMaximum)) {
    throw new Error("mint amount greater than  maximum amount");
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
    receiveAmount,
    minerFee,
    bridgeFee,
    totalFee,
    confirmNumber,
  };
};

export const calcMintBtcInfo = (
  mintAmount: number,
  assetInfo: API.AssetsData
) => {
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
    throw new Error("mint amount less than  minimum amount");
  }
  if (mintAmount > Number(amountLimitMaximum)) {
    throw new Error("mint amount greater than  maximum amount");
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
    receiveAmount,
    minerFee,
    bridgeFee,
    totalFee,
    confirmNumber,
  };
};

export const calcMintBrc20Info = (
  mintAmount: number,
  assetInfo: API.AssetsData,
  asset: API.AssetItem
) => {
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
    throw new Error("mint amount less than  minimum amount");
  }
  if (Number(mintBrc20EqualBtcAmount) > Number(amountLimitMaximum)) {
    throw new Error("mint amount greater than  maximum amount");
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
  cutThisYear = false,
) {
  if (isInSeconds) timestamp = timestamp * 1000

  if (cutThisYear) return dayjs(timestamp).format('MM-DD HH:mm:ss')

  return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
}

export const formatUnitToSats = (
  value: number | string,
  decimal: number = 8,
) => {
  if (!value) {
    return 0
  }
  return new Decimal(value).mul(10 ** decimal).toNumber()
}

export const formatUnitToBtc = (
  value: number | string,
  decimal: number = 8,
) => {
  if (!value) {
    return 0
  }
  return new Decimal(value).div(10 ** decimal).toNumber()
}
