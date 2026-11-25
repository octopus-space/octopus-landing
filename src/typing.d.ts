declare module "slash2";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";

interface TransferReceiver {
  address: string;
  amount: string | number;
  decimal?: number | string;
}

interface TransferOutput {
  type?: "space" | "token";
  codehash?: string;
  genesis?: string;
  receivers: TransferReceiver[];
}

interface TransferResultItem {
  id: number;
  txid: string;
  txHex: string;
  routeCheckTxid?: string;
  routeCheckTxHex?: string;
}

interface TransferResponse {
  status?: string;
  res: TransferResultItem[];
  txids: string[];
  broadcasted: boolean;
}

declare interface Window {
  metaidwallet: {
    verifySignature(verifyObj: {
      message: unknown;
      signature: any;
      encoding: string;
    }): any;
    getPublicKey(): Promise<string>;
    signMessage(arg0: {
      message: string;
      encoding?: string;
    }): { signature: any; status?: string } | PromiseLike<{ signature: any; status?: string }>;
    getAddress(): Promise<string>;
    getBalance?: () => Promise<{
      address: string;
      confirmed: number;
      total: number;
      unconfirmed: number;
    }>;
    getMvcBalance: () => Promise<{
      address: string;
      confirmed: number;
      total: number;
      unconfirmed: number;
    }>;
    getUtxos?: () => Promise<Array<{ txId: string; outputIndex: number; satoshis: number; satoshi?: number }>>;
    disconnect?: () => Promise<{ status?: string }>;
    switchNetwork: (network: "livenet" | "testnet") => Promise<{
      address: string;
      network: "mainnet" | "testnet";
      status: string;
    }>;
    on: (
      eventName: string,
      handler: { mvcAddress: string; btcAddress: string } | any
    ) => void;
    removeListener: (
      eventName: string,
      handler: { mvcAddress: string; btcAddress: string } | any
    ) => void;
    getNetwork: () => Promise<{ network: "mainnet" | "testnet" }>;
    connect: () => Promise<{
      address?: string;
      pubKey?: string;
      status?: string;
    }>;
    isConnected: () => Promise<boolean | { status?: string }>;
    btc: {
      getAddress: () => Promise<string>;
      getPublicKey: () => Promise<string>;
      connect: () => Promise<{
        address?: string;
        pubKey?: string;
        status?: string;
      }>;
      transfer?: (params: any) => Promise<any>;
      transferMRC20: (params: any) => Promise<any>;
      getBalance: (chain?: string) => Promise<{ total: number; confirmed?: number; unconfirmed?: number }>;
      signMessage: (message: string) => Promise<string | { status?: string }>;
      signPsbt: ({
        psbtHex,
        options,
      }: {
        psbtHex: string;
        options?: any;
      }) => Promise<string | { status: string }>;
      pushPsbt: (psbt: string) => Promise<string>;
      signPsbts: (psbtHexs: string[], options?: any[]) => Promise<string[]>;
      getUtxos: (params?: any) => Promise<API.UTXO[]>;
      addSafeUtxo?: (params: { address: string; unspentOutput: string }) => Promise<any>;
    };
    token: {
      getBalance: () => Promise<any[]>;
    };
    transfer: (params: {
      tasks: TransferOutput[];
      broadcast: boolean;
    }) => Promise<TransferResponse>;
  };
}
