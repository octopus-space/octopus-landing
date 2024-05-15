declare namespace API {
  type AssetItem = {
    decimals: number;
    feeRateConstMint: number;
    feeRateConstRedeem: number;
    feeRateNumeratorMint: number;
    feeRateNumeratorRedeem: number;
    isEnableMint: boolean;
    isEnableRedeem: boolean;
    network: string;
    originName: string;
    originSymbol: string;
    originTokenId: string;
    price: number;
    targetName: string;
    targetSymbol: string;
    targetTokenCodeHash: string;
    targetTokenGenesis: string;
    targetTokenId: string;
    trimDecimals: number;
  };
  type AssetsData = {
    amountLimitMaximum: string;
    amountLimitMinimum: string;
    assetList: AssetItem[];
    btcPrice: number;
    mvcPrice: number;
    confirmSequence: number[][];
    feeBtc: number;
    feeMvc: number;
    net: string;
    transactionSize: {
      BRC20_MINT: number;
      BRC20_REDEEM: number;
      BTC_MINT: number;
      BTC_REDEEM: number;
      RUNES_REDEEM: number;
      RUNES_MINT: number;
    };
  };
  interface Ret<T> {
    success: boolean;
    data: T;
  }
  type TransferbleBRC20 = {
    amount: string;
    inscriptionId: string;
    inscriptionNumber: string;
    outValue: number;
  };
  type BRC20Info = {
    balance: string;
    transferBalanceList: TransferbleBRC20[];
    message?: string;
  };
  enum PrepayOrderStatus {
    doing = "doing",
    success = "success",
    cancel = "cancel",
    failed = "failed",
  }
  type HsitoryDetail = {
    amount: string;
    timestamp: string;
    status: PrepayOrderStatus;
    symbol: string;
    originTxid: string;
    targetTxid: string;
    originNetwork: "BTC" | "MVC";
    targetNetwork: "BTC" | "MVC";
    decimals: number;
    blockHeight: number;
  };
  type RUNESItem = {
    amount: string;
    runeId: string;
    rune: string;
    spacedRune: string;
    symbol: string;
    divisibility: string;
  };
}
