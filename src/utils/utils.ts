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

export type FeeBreakdownItem = {
  label: string;
  value: string;
  sub?: string;
};

export type ScenarioFeeBreakdown = {
  btcRate: number;
  btcServiceFeeSats: number;
  mvcServiceFeeSats: number;
  serviceFeeText: string;
  serviceFeeTooltip: string;
  estMinerBtcSats: number;
  estMinerMvcSats: number;
  minerFeeText: string;
  minerFeeBreakdown: FeeBreakdownItem[];
  btcOrderFeeOutputSats: number;
  mvcOrderFeeOutputSats: number;
  totalOutlayBtcSats: number;
  totalOutlayMvcSats: number;
  totalFeeText: string;
};

export type FeeInfo = {
  receiveAmount: string;
  minerFee: string;
  bridgeFee: string;
  totalFee: string;
  confirmNumber?: number | string;
  btcBridgeFeeSats?: number;
  mvcBridgeFeeSats?: number;
  serviceFeeTooltip?: string;
  minerFeeBreakdown?: FeeBreakdownItem[];
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
 * Single source of truth for the two-layer fee breakdown across all 4 bridge scenarios,
 * matching backend calculateBridgeFeeQuote 1:1:
 * 1. Est. Network Miner Fee: 1.0x actual chain miner fees (wallet tx + target-chain vault unlock/burn) + MRC20 546 sats carrier postage.
 * 2. Bridge Service Fee: Pure protocol revenue synchronously set to 2.0x of Est. Network Miner Fee (with 650 sats anti-dust floor on BTC Mint).
 */
export const computeScenarioFeeBreakdown = (params: {
  protocolType: "btc" | "mrc20";
  bridgeType: "mint" | "redeem";
  userBtcFeeRate?: number;
  quote?: API.FeeQuoteData;
  defaultBtcRate?: number;
}): ScenarioFeeBreakdown => {
  const { protocolType, bridgeType, userBtcFeeRate, quote, defaultBtcRate } =
    params;
  const btcRate = Math.min(
    100,
    Math.max(
      1,
      Math.ceil(Number(userBtcFeeRate || quote?.btcFeeRate || defaultBtcRate || 2))
    )
  );
  const svcMult = Number(quote?.serviceFeeMultiplier || 2.0);
  const mult = Number(quote?.safetyMultiplier || 1.0);
  const minCleanBtcSats = 650;
  const isRateMatchedQuote =
    Boolean(quote) && Number(quote?.btcFeeRate) === btcRate;

  if (bridgeType === "mint") {
    if (protocolType === "btc") {
      const walletBtcMinerSats = Math.ceil(160 * btcRate);
      const computedServiceSats = Math.max(
        minCleanBtcSats,
        Math.ceil(walletBtcMinerSats * svcMult)
      );
      const btcServiceFeeSats =
        isRateMatchedQuote && Number(quote?.btcServiceFeeSats) > 0
          ? Number(quote!.btcServiceFeeSats)
          : computedServiceSats;
      const serviceFeeText = `${formatSat(btcServiceFeeSats, 8)} BTC (${btcServiceFeeSats} sats)`;
      const hitFloor = btcServiceFeeSats > Math.ceil(walletBtcMinerSats * svcMult);
      const serviceFeeTooltip = hitFloor
        ? `Protocol service fee (2× estimated network miner fee, min ${minCleanBtcSats} sats anti-dust floor): ${btcServiceFeeSats} sats (${formatSat(
            btcServiceFeeSats,
            8
          )} BTC). Bridged token arrives 1:1 with zero deduction.`
        : `Protocol service fee (2× estimated network miner fee): ${btcServiceFeeSats} sats (${formatSat(
            btcServiceFeeSats,
            8
          )} BTC). Bridged token arrives 1:1 with zero deduction.`;
      const totalOutlayBtcSats = btcServiceFeeSats + walletBtcMinerSats;

      return {
        btcRate,
        btcServiceFeeSats,
        mvcServiceFeeSats: 0,
        serviceFeeText,
        serviceFeeTooltip,
        estMinerBtcSats: walletBtcMinerSats,
        estMinerMvcSats: 0,
        minerFeeText: `~${formatSat(walletBtcMinerSats, 8)} BTC`,
        minerFeeBreakdown: [
          {
            label: `BTC deposit tx miner fee (~160 vB × ${btcRate} sat/vB)`,
            value: `~${formatSat(walletBtcMinerSats, 8)} BTC`,
            sub: `~${walletBtcMinerSats} sats`,
          },
          {
            label: "MVC minting gas",
            value: "0 SPACE",
            sub: "Sponsored by bridge",
          },
        ],
        btcOrderFeeOutputSats: btcServiceFeeSats,
        mvcOrderFeeOutputSats: 0,
        totalOutlayBtcSats,
        totalOutlayMvcSats: 0,
        totalFeeText: `~${formatSat(totalOutlayBtcSats, 8)} BTC`,
      };
    }

    const walletCommitRevealSats = Math.ceil(300 * btcRate);
    const postageSats = 546;
    const estMinerBtcSats = walletCommitRevealSats + postageSats;
    const computedServiceSats = Math.max(
      minCleanBtcSats,
      Math.ceil(estMinerBtcSats * svcMult)
    );
    const btcServiceFeeSats =
      isRateMatchedQuote && Number(quote?.btcServiceFeeSats) > 0
        ? Number(quote!.btcServiceFeeSats)
        : computedServiceSats;
    const serviceFeeText = `${formatSat(btcServiceFeeSats, 8)} BTC (${btcServiceFeeSats} sats)`;
    const serviceFeeTooltip = `Protocol service fee (2× estimated network miner fee): ${btcServiceFeeSats} sats (${formatSat(
      btcServiceFeeSats,
      8
    )} BTC). Bridged token arrives 1:1 with zero deduction.`;
    const totalOutlayBtcSats = btcServiceFeeSats + estMinerBtcSats;

    return {
      btcRate,
      btcServiceFeeSats,
      mvcServiceFeeSats: 0,
      serviceFeeText,
      serviceFeeTooltip,
      estMinerBtcSats,
      estMinerMvcSats: 0,
      minerFeeText: `~${formatSat(estMinerBtcSats, 8)} BTC`,
      minerFeeBreakdown: [
        {
          label: `BTC commit + reveal miner fee (~300 vB × ${btcRate} sat/vB)`,
          value: `~${formatSat(walletCommitRevealSats, 8)} BTC`,
          sub: `~${walletCommitRevealSats} sats`,
        },
        {
          label: "MRC20 token UTXO postage",
          value: `${formatSat(postageSats, 8)} BTC`,
          sub: `${postageSats} sats`,
        },
        {
          label: "MVC minting gas",
          value: "0 SPACE",
          sub: "Sponsored by bridge",
        },
      ],
      btcOrderFeeOutputSats: btcServiceFeeSats,
      mvcOrderFeeOutputSats: 0,
      totalOutlayBtcSats,
      totalOutlayMvcSats: 0,
      totalFeeText: `~${formatSat(totalOutlayBtcSats, 8)} BTC`,
    };
  }

  // Redeem (MVC -> BTC / MVC -> MRC20)
  const bridgeBurnMvcMinerSats = Number(quote?.mvcBridgeMinerFeeSats ?? 20000);
  const walletMvcMinerSats = 25000; // MVC 1 sat/B MCP02 FT transfer + SPACE fee tx
  const estMinerMvcSats = walletMvcMinerSats + bridgeBurnMvcMinerSats;
  const mvcServiceFeeSats =
    quote && Number(quote.mvcServiceFeeSats) > 0
      ? Number(quote.mvcServiceFeeSats)
      : Math.ceil(estMinerMvcSats * svcMult);
  const mvcOrderFeeOutputSats = mvcServiceFeeSats + bridgeBurnMvcMinerSats;
  const walletBtcMinerSats = Math.ceil(150 * btcRate);

  if (protocolType === "btc") {
    const payoutVSize = Number(quote?.btcPayoutVSize || 170);
    const bridgePayoutBtcMinerSats = Math.ceil(payoutVSize * btcRate * mult);
    const estMinerBtcSats = walletBtcMinerSats + bridgePayoutBtcMinerSats;
    const rawService = Math.ceil(estMinerBtcSats * svcMult);
    const computedServiceSats =
      rawService + bridgePayoutBtcMinerSats < minCleanBtcSats
        ? Math.max(0, minCleanBtcSats - bridgePayoutBtcMinerSats)
        : rawService;
    const btcServiceFeeSats =
      isRateMatchedQuote && Number(quote?.btcServiceFeeSats) > 0
        ? Number(quote!.btcServiceFeeSats)
        : computedServiceSats;
    const btcOrderFeeOutputSats = btcServiceFeeSats + bridgePayoutBtcMinerSats;
    const totalOutlayMvcSats = mvcServiceFeeSats + estMinerMvcSats;
    const totalOutlayBtcSats = btcServiceFeeSats + estMinerBtcSats;
    const serviceFeeText = `${formatSat(mvcServiceFeeSats, 8)} SPACE + ${formatSat(
      btcServiceFeeSats,
      8
    )} BTC`;
    const serviceFeeTooltip = `Protocol service fee (2× estimated network miner fee on each chain): ${formatSat(
      mvcServiceFeeSats,
      8
    )} SPACE + ${formatSat(
      btcServiceFeeSats,
      8
    )} BTC (${btcServiceFeeSats} sats). Bridged token arrives 1:1 with zero deduction.`;

    return {
      btcRate,
      btcServiceFeeSats,
      mvcServiceFeeSats,
      serviceFeeText,
      serviceFeeTooltip,
      estMinerBtcSats,
      estMinerMvcSats,
      minerFeeText: `~${formatSat(estMinerMvcSats, 8)} SPACE + ~${formatSat(
        estMinerBtcSats,
        8
      )} BTC`,
      minerFeeBreakdown: [
        {
          label: `BTC prepay tx miner fee (~150 vB × ${btcRate} sat/vB)`,
          value: `~${formatSat(walletBtcMinerSats, 8)} BTC`,
          sub: `~${walletBtcMinerSats} sats`,
        },
        {
          label: `BTC vault payout miner fee (${payoutVSize} vB × ${btcRate} sat/vB)`,
          value: `${formatSat(bridgePayoutBtcMinerSats, 8)} BTC`,
          sub: `${bridgePayoutBtcMinerSats} sats`,
        },
        {
          label: "MVC wallet FT transfer fee (1 sat/B)",
          value: `~${formatSat(walletMvcMinerSats, 8)} SPACE`,
          sub: `~${walletMvcMinerSats} sats`,
        },
        {
          label: "MVC contract burn miner fee (1 sat/B)",
          value: `${formatSat(bridgeBurnMvcMinerSats, 8)} SPACE`,
          sub: `${bridgeBurnMvcMinerSats} sats`,
        },
      ],
      btcOrderFeeOutputSats,
      mvcOrderFeeOutputSats,
      totalOutlayBtcSats,
      totalOutlayMvcSats,
      totalFeeText: `~${formatSat(totalOutlayMvcSats, 8)} SPACE + ~${formatSat(
        totalOutlayBtcSats,
        8
      )} BTC`,
    };
  }

  const payoutVSize = Number(quote?.btcPayoutVSize || 430);
  const bridgePayoutBtcMinerSats = Math.ceil(payoutVSize * btcRate * mult);
  const postageSats = Number(quote?.btcPostageSats ?? 546);
  const estMinerBtcSats =
    walletBtcMinerSats + bridgePayoutBtcMinerSats + postageSats;
  const computedServiceSats = Math.ceil(estMinerBtcSats * svcMult);
  const btcServiceFeeSats =
    isRateMatchedQuote && Number(quote?.btcServiceFeeSats) > 0
      ? Number(quote!.btcServiceFeeSats)
      : computedServiceSats;
  const btcOrderFeeOutputSats =
    btcServiceFeeSats + bridgePayoutBtcMinerSats + postageSats;
  const totalOutlayMvcSats = mvcServiceFeeSats + estMinerMvcSats;
  const totalOutlayBtcSats = btcServiceFeeSats + estMinerBtcSats;
  const serviceFeeText = `${formatSat(mvcServiceFeeSats, 8)} SPACE + ${formatSat(
    btcServiceFeeSats,
    8
  )} BTC`;
  const serviceFeeTooltip = `Protocol service fee (2× estimated network miner fee on each chain): ${formatSat(
    mvcServiceFeeSats,
    8
  )} SPACE + ${formatSat(
    btcServiceFeeSats,
    8
  )} BTC (${btcServiceFeeSats} sats). Bridged token arrives 1:1 with zero deduction.`;

  return {
    btcRate,
    btcServiceFeeSats,
    mvcServiceFeeSats,
    serviceFeeText,
    serviceFeeTooltip,
    estMinerBtcSats,
    estMinerMvcSats,
    minerFeeText: `~${formatSat(estMinerMvcSats, 8)} SPACE + ~${formatSat(
      estMinerBtcSats,
      8
    )} BTC`,
    minerFeeBreakdown: [
      {
        label: `BTC prepay tx miner fee (~150 vB × ${btcRate} sat/vB)`,
        value: `~${formatSat(walletBtcMinerSats, 8)} BTC`,
        sub: `~${walletBtcMinerSats} sats`,
      },
      {
        label: `BTC commit + reveal payout miner fee (${payoutVSize} vB × ${btcRate} sat/vB)`,
        value: `${formatSat(bridgePayoutBtcMinerSats, 8)} BTC`,
        sub: `${bridgePayoutBtcMinerSats} sats`,
      },
      {
        label: "MRC20 token UTXO postage (returned to you)",
        value: `${formatSat(postageSats, 8)} BTC`,
        sub: `${postageSats} sats`,
      },
      {
        label: "MVC wallet FT transfer fee (1 sat/B)",
        value: `~${formatSat(walletMvcMinerSats, 8)} SPACE`,
        sub: `~${walletMvcMinerSats} sats`,
      },
      {
        label: "MVC contract burn miner fee (1 sat/B)",
        value: `${formatSat(bridgeBurnMvcMinerSats, 8)} SPACE`,
        sub: `${bridgeBurnMvcMinerSats} sats`,
      },
    ],
    btcOrderFeeOutputSats,
    mvcOrderFeeOutputSats,
    totalOutlayBtcSats,
    totalOutlayMvcSats,
    totalFeeText: `~${formatSat(totalOutlayMvcSats, 8)} SPACE + ~${formatSat(
      totalOutlayBtcSats,
      8
    )} BTC`,
  };
};

/**
 * 1:1 full arrival calculation for Mint (BTC -> WBTC, MRC20 -> MetaContract).
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

  const breakdown = computeScenarioFeeBreakdown({
    protocolType: asset.network === "BTC" ? "btc" : "mrc20",
    bridgeType: "mint",
    userBtcFeeRate,
    quote,
    defaultBtcRate: assetInfo.feeBtc,
  });

  const confirmAmountSats =
    asset.network === "BTC" ? dec.mul(1e8).toNumber() : 0;
  const confirmNumber = confirmNumberBySeqAndAmount(
    confirmAmountSats,
    assetInfo.confirmSequence,
    asset.network === "BTC" ? "BTC" : "MRC20"
  );

  return {
    receiveAmount: dec.toFixed(),
    bridgeFee: breakdown.serviceFeeText,
    minerFee: breakdown.minerFeeText,
    totalFee: breakdown.totalFeeText,
    confirmNumber,
    btcBridgeFeeSats: breakdown.btcServiceFeeSats,
    mvcBridgeFeeSats: 0,
    serviceFeeTooltip: breakdown.serviceFeeTooltip,
    minerFeeBreakdown: breakdown.minerFeeBreakdown,
  };
};

/**
 * 1:1 full arrival calculation for Redeem (WBTC -> BTC, MetaContract -> MRC20).
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

  const breakdown = computeScenarioFeeBreakdown({
    protocolType: asset.network === "BTC" ? "btc" : "mrc20",
    bridgeType: "redeem",
    userBtcFeeRate,
    quote,
    defaultBtcRate: assetInfo.feeBtc,
  });

  const confirmAmountSats =
    asset.network === "BTC" ? dec.mul(1e8).toNumber() : 0;
  const confirmNumber = confirmNumberBySeqAndAmount(
    confirmAmountSats,
    assetInfo.confirmSequence,
    "MVC"
  );

  return {
    receiveAmount: dec.toFixed(),
    bridgeFee: breakdown.serviceFeeText,
    minerFee: breakdown.minerFeeText,
    totalFee: breakdown.totalFeeText,
    confirmNumber,
    btcBridgeFeeSats: breakdown.btcServiceFeeSats,
    mvcBridgeFeeSats: breakdown.mvcServiceFeeSats,
    serviceFeeTooltip: breakdown.serviceFeeTooltip,
    minerFeeBreakdown: breakdown.minerFeeBreakdown,
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
