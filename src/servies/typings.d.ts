declare namespace API {
  type AssetItem = {
    decimals: number;
    feeRateConstMint: number;
    feeRateConstRedeem: number;
    feeRateNumeratorMint: number;
    feeRateNumeratorRedeem: number;
    isEnableMint: boolean;
    isEnableRedeem: boolean;
    isBeta?: boolean;
    network: "BTC" | "MRC20" | string;
    originName: string;
    originSymbol: string;
    originTokenId: string;
    price?: number;
    targetName: string;
    targetSymbol: string;
    targetTokenCodeHash: string;
    targetTokenGenesis: string;
    targetTokenId: string;
    trimDecimals: number;
  };

  type TransactionSize = {
    BTC_MINT: number;
    BTC_REDEEM: number;
    MRC20_MINT?: number;
    MRC20_REDEEM?: number;
    BRC20_MINT?: number;
    BRC20_REDEEM?: number;
    RUNES_REDEEM?: number;
    RUNES_MINT?: number;
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
    transactionSize: TransactionSize;
    mintPaused?: boolean;
    mintPausedMessage?: string;
  };

  type FeeQuoteData = {
    scenario: "btc_mint" | "mrc20_mint" | "btc_redeem" | "mrc20_redeem";
    network: "BTC" | "MRC20";
    direction: "mint" | "redeem";
    btcFeeRate: number;
    mvcFeeRate: number;
    safetyMultiplier: number;
    btcFeeSats: number;
    btcFeeAddress: string;
    mvcFeeSats: number;
    mvcFeeAddress: string;
    assetFeeAmount: "0";
  };

  interface Ret<T> {
    success: boolean;
    code?: number;
    message?: string;
    msg?: string;
    data: T;
  }

  interface ListRet<T> {
    success?: boolean;
    code: number;
    message: string;
    data: {
      total: number;
      list: T[];
    };
  }

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
    name: string;
    originTxid: string;
    targetTxid: string;
    originNetwork: "BTC" | "MVC";
    targetNetwork: "BTC" | "MVC";
    decimals: number;
    blockHeight: number;
    originTokenId: string;
    targetTokenId: string;
    progess?: number;
  };

  type MRC20Item = {
    chain: "btc";
    blockHeight: number;
    address: string;
    satoshi: number;
    satoshis: number;
    scriptPk: string;
    txId: string;
    vout: number;
    outputIndex: number;
    mrc20s: {
      tick: string;
      mrc20Id: string;
      txPoint: string;
      amount: string;
      decimals: string;
    }[];
    Mrc20Total: number;
    timestamp: number;
  };

  type Mrc20BalItem = {
    tick: string;
    tokenName: string;
    mrc20Id: string;
    balance: string;
    decimals: string;
  };

  type UTXO = {
    txId: string;
    vout: number;
    outputIndex: number;
    satoshis: number;
    satoshi: number;
    confirmed: boolean;
    rawTx?: string;
    inscriptions?:
      | {
          id: string;
          num: number;
        }[]
      | null;
  };

  type Network = "mainnet" | "testnet";

  type Tx = {
    address: string;
    value: number;
  };
}
