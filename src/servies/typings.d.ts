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
  type TransactionSize = {
    BRC20_MINT: number;
    BRC20_REDEEM: number;
    BTC_MINT: number;
    BTC_REDEEM: number;
    RUNES_REDEEM: number;
    RUNES_MINT: number;
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
  };
  interface Ret<T> {
    success: boolean;
    code: number;
    message: string;
    msg: string;
    data: T;
  }
  interface ListRet<T> {
    success: boolean;
    code: number;
    message: string;
    data: {
      total: number;
      list: T[];
    };
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
    message: string;
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
    runes?: RUNESItem[];
  };
  type Network = "mainnet" | "testnet";
  type RuneSendParams = {
    runeId: string;
    feeRate: number;
    recipient: string;
    runeAmount: string;
    divisibility: number;
    net: Network;
    addressType: string;
    outputValue?: number;
  };
  type Tx = {
    address: string;
    value: number;
  };
}
