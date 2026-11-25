import mempoolJS from "@mempool/mempool.js";
import { getRecommendedFees } from "@/servies/api";
import { Network } from "@/models/wallet";

export type FeeRatePlan = "Slow" | "Avg" | "Fast" | "Custom";

export type FeeRateTier = {
  label: "Fast" | "Avg" | "Slow";
  value: number;
  time: string;
};

export const MAX_CUSTOM_BTC_FEE_RATE = 500;

function normalizeRecommended(raw?: Partial<API.RecommendedFees>): {
  tiers: FeeRateTier[];
  minimumFee: number;
} {
  const minimumFee = Math.max(1, Math.ceil(Number(raw?.minimumFee || 1)));
  const slow = Math.max(
    minimumFee,
    Math.ceil(Number(raw?.hourFee || raw?.economyFee || minimumFee))
  );
  const avg = Math.max(slow, Math.ceil(Number(raw?.halfHourFee || slow)));
  const fast = Math.max(avg, Math.ceil(Number(raw?.fastestFee || avg)));

  return {
    minimumFee,
    tiers: [
      {
        label: "Fast",
        value: fast,
        time: "~10 mins",
      },
      {
        label: "Avg",
        value: avg,
        time: "~30 mins",
      },
      {
        label: "Slow",
        value: slow,
        time: "~60 mins",
      },
    ],
  };
}

export async function fetchBtcFeeRateSummary(network: Network): Promise<{
  tiers: FeeRateTier[];
  minimumFee: number;
}> {
  try {
    const res = await getRecommendedFees(network);
    if (res?.data && (res.code === 0 || res.success)) {
      return normalizeRecommended(res.data);
    }
  } catch {}

  try {
    const {
      bitcoin: { fees },
    } = mempoolJS({
      hostname: "mempool.space",
      network: network === "mainnet" ? "main" : "testnet",
    });
    const rec = await fees.getFeesRecommended();
    return normalizeRecommended(rec);
  } catch {
    return normalizeRecommended({
      fastestFee: 3,
      halfHourFee: 2,
      hourFee: 1,
      economyFee: 1,
      minimumFee: 1,
    });
  }
}
