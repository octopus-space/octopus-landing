import Decimal from "decimal.js";
import BigNumber from "bignumber.js";
import dayjs from "dayjs";
import {
  SupportRedeemAddressType,
  supportRedeemAddressType,
} from "@/servies/wrapping";

export const formatSat = (value: string | number, dec = 8) => {
  if (value === undefined || value === null || value === "") return "0";

  const v = BigNumber(value).div(Math.pow(10, dec));
  const arr = v.toString().split(".");
  if (v.toString().indexOf("e") > -1 || (arr[1] && arr[1].length > dec)) {
    return BigNumber(v).toFixed(dec).replace(/\.?0+$/, "") || "0";
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

export const confirmNumberBySeqAndAmount = function (
  amount: number,
  seq: number[][],
  network: "BTC" | "MVC" | "MRC20"
) {
  if (!Array.isArray(seq)) return 1;
  for (const item of seq) {
    const [start, end, confirmBtc, confirmMvc] = item;
    if (end) {
      if (start <= amount && amount <= end) {
        return network === "MVC" ? confirmMvc : confirmBtc;
      }
    } else if (start <= amount) {
      return network === "MVC" ? confirmMvc : confirmBtc;
    }
  }
  return 2;
};

export type FeeInfo = {
  receiveAmount: string;
  minerFee: string;
  bridgeFee: string;
  totalFee: string;
  confirmNumber?: number | string;
  btcBridgeFeeSats?: number;
  mvcBridgeFeeSats?: number;
};

export function determineAddressInfo(address: string): string {
  if (!address) return "unknown";
  if (address.startsWith("bc1q") || address.startsWith("tb1q")) {
    return "p2wpkh";
  }
  if (address.startsWith("bc1p") || address.startsWith("tb1p")) {
    return "p2tr";
  }
  if (address.startsWith("1") || address.startsWith("m") || address.startsWith("n")) {
    return "p2pkh";
  }
  if (address.startsWith("3") || address.startsWith("2")) {
    return "p2sh";
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
  if (!value) return 0;
  return new Decimal(value).mul(10 ** decimal).toNumber();
};

export const formatUnitToBtc = (
  value: number | string,
  decimal: number = 8
) => {
  if (!value) return 0;
  return new Decimal(value).div(10 ** decimal).toNumber();
};

/**
 * Price-decoupled bridging quantity range:
 * - BTC: [amountLimitMinimum / 1e8, amountLimitMaximum / 1e8]
 * - MRC20: [0, 0] (no price-dependent limit; validated by > 0 and token precision)
 */
export const calculateQuantityLimitRange = (
  assetInfo: API.AssetsData,
  asset: API.AssetItem
): [number, number] => {
  if (asset.network === "BTC") {
    const minAmount = new Decimal(assetInfo.amountLimitMinimum || "10000")
      .div(1e8)
      .toNumber();
    const maxAmount = new Decimal(assetInfo.amountLimitMaximum || "100000000")
      .div(1e8)
      .toNumber();
    return [minAmount, maxAmount];
  }
  return [0, 0];
};

function validateAmountAndPrecision(
  rawInput: string | number,
  maxDecimals: number,
  minAmount: number,
  maxAmount: number
): Decimal {
  const str = String(rawInput).trim();
  if (!str || Number.isNaN(Number(str))) {
    throw new Error("Invalid amount");
  }
  const dec = new Decimal(str);
  if (dec.lte(0)) {
    throw new Error("Amount must be greater than 0");
  }
  if (dec.decimalPlaces() > maxDecimals) {
    throw new Error(`Maximum precision is ${maxDecimals} decimals`);
  }
  if (minAmount > 0 && dec.lt(minAmount)) {
    throw new Error(`Amount less than minimum (${minAmount})`);
  }
  if (maxAmount > 0 && dec.gt(maxAmount)) {
    throw new Error(`Amount greater than maximum (${maxAmount})`);
  }
  return dec;
}

/**
 * Computes the Redeem BTC payout fee (sats) synchronously for a chosen BTC fee rate,
 * matching backend calculateBridgeFeeQuote 1:1 so UI updates with zero latency.
 */
export const computeRedeemBtcServiceFeeSats = (
  assetNetwork: "BTC" | "MRC20" | string,
  userBtcFeeRate?: number,
  quote?: API.FeeQuoteData
): number => {
  const rate = Math.min(
    100,
    Math.max(1, Math.ceil(Number(userBtcFeeRate || quote?.btcFeeRate || 2)))
  );
  if (quote && Number(quote.btcFeeRate) === rate && Number(quote.btcFeeSats) > 0) {
    return Number(quote.btcFeeSats);
  }
  const mult = Number(quote?.safetyMultiplier || 2.0);
  if (assetNetwork === "BTC") {
    return Math.max(800, Math.ceil(rate * 220 * mult));
  }
  return Math.max(1800, Math.ceil(rate * 380 * mult) + 546);
};

/**
 * 1:1 full arrival calculation for Mint (BTC -> WBTC, MRC20 -> MetaContract).
 * Bridge service fee is paid externally in native BTC; user's BTC deposit miner fee uses userBtcFeeRate.
 */
export const calcMintInfo = (
  amount: number | string,
  assetInfo: API.AssetsData,
  asset: API.AssetItem,
  quote?: API.FeeQuoteData,
  userBtcFeeRate?: number
): FeeInfo => {
  const maxDecimals =
    asset.network === "BTC"
      ? asset.decimals
      : Math.max(0, asset.decimals - asset.trimDecimals);
  const [minAmount, maxAmount] = calculateQuantityLimitRange(assetInfo, asset);
  const dec = validateAmountAndPrecision(
    amount,
    maxDecimals,
    minAmount,
    maxAmount
  );

  const defaultFeeSats = asset.network === "BTC" ? 800 : 1000;
  const btcFeeSats = Number(quote?.btcFeeSats ?? defaultFeeSats);
  const btcRate = Math.max(
    1,
    Math.ceil(Number(userBtcFeeRate || quote?.btcFeeRate || assetInfo.feeBtc || 2))
  );
  const estMinerSats =
    asset.network === "BTC"
      ? Math.ceil(160 * btcRate)
      : 546 + Math.ceil(300 * btcRate);

  const confirmAmountSats =
    asset.network === "BTC" ? dec.mul(1e8).toNumber() : 0;
  const confirmNumber = confirmNumberBySeqAndAmount(
    confirmAmountSats,
    assetInfo.confirmSequence,
    asset.network === "BTC" ? "BTC" : "MRC20"
  );

  return {
    receiveAmount: dec.toFixed(),
    bridgeFee: `${formatSat(btcFeeSats, 8)} BTC`,
    minerFee: `~${formatSat(estMinerSats, 8)} BTC`,
    totalFee: `~${formatSat(btcFeeSats + estMinerSats, 8)} BTC`,
    confirmNumber,
    btcBridgeFeeSats: btcFeeSats,
    mvcBridgeFeeSats: 0,
  };
};

/**
 * 1:1 full arrival calculation for Redeem (WBTC -> BTC, MetaContract -> MRC20).
 * MVC defaults to 1 sat/B; BTC payout fee & BTC prepay miner fee scale with userBtcFeeRate.
 */
export const calcRedeemInfo = (
  amount: number | string,
  assetInfo: API.AssetsData,
  asset: API.AssetItem,
  quote?: API.FeeQuoteData,
  userBtcFeeRate?: number
): FeeInfo => {
  const maxDecimals =
    asset.network === "BTC"
      ? asset.decimals
      : Math.max(0, asset.decimals - asset.trimDecimals);
  const [minAmount, maxAmount] = calculateQuantityLimitRange(assetInfo, asset);
  const dec = validateAmountAndPrecision(
    amount,
    maxDecimals,
    minAmount,
    maxAmount
  );

  const mvcFeeSats = Number(quote?.mvcFeeSats ?? 50000);
  const btcRate = Math.max(
    1,
    Math.ceil(Number(userBtcFeeRate || quote?.btcFeeRate || assetInfo.feeBtc || 2))
  );
  const btcFeeSats = computeRedeemBtcServiceFeeSats(
    asset.network,
    btcRate,
    quote
  );
  const estBtcMinerSats = Math.ceil(150 * btcRate);
  const estMvcMinerSats = 4500; // MVC fixed at 1 sat/B

  const confirmAmountSats =
    asset.network === "BTC" ? dec.mul(1e8).toNumber() : 0;
  const confirmNumber = confirmNumberBySeqAndAmount(
    confirmAmountSats,
    assetInfo.confirmSequence,
    "MVC"
  );

  return {
    receiveAmount: dec.toFixed(),
    bridgeFee: `${formatSat(mvcFeeSats, 8)} SPACE + ${formatSat(btcFeeSats, 8)} BTC`,
    minerFee: `~${formatSat(estMvcMinerSats, 8)} SPACE + ~${formatSat(estBtcMinerSats, 8)} BTC`,
    totalFee: `${formatSat(mvcFeeSats + estMvcMinerSats, 8)} SPACE + ${formatSat(btcFeeSats + estBtcMinerSats, 8)} BTC`,
    confirmNumber,
    btcBridgeFeeSats: btcFeeSats,
    mvcBridgeFeeSats: mvcFeeSats,
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

export function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number = 5000,
  label: string = "Wallet request"
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`${label} timed out after ${timeoutMs}ms`));
    }, timeoutMs);
    Promise.resolve(promise).then(
      (val) => {
        clearTimeout(timer);
        resolve(val);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      }
    );
  });
}

export function normalizeWalletNetwork(rawNet?: string): "mainnet" | "testnet" {
  return rawNet === "testnet" ? "testnet" : "mainnet";
}
