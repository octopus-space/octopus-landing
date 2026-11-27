import {
  Card,
  Dropdown,
  InputNumber,
  Segmented,
  Space,
  Spin,
  Tooltip,
  message,
  theme,
  Grid,
  Alert,
} from "antd";
import {
  DownOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useCallback, useEffect, useMemo, useState } from "react";
import "./index.less";
import { useModel } from "umi";
import Decimal from "decimal.js";
import historyIcon from "@/assets/history.svg";
import {
  FeeInfo,
  amountRaw,
  calcMintInfo,
  calcRedeemInfo,
  calculateQuantityLimitRange,
  computeScenarioFeeBreakdown,
  determineAddressInfo,
  formatSat,
  formatSatsInt,
} from "@/utils/utils";
import History from "./components/History";
import FormButton from "@/components/FormButton";
import { SegOptions } from "./components/Options";
import {
  SupportRedeemAddressType,
  extractApiErrorMessage,
  mintBtc,
  mintMrc20,
  redeemBtc,
  redeemMrc20,
  supportRedeemAddressType,
} from "@/servies/wrapping";
import { getUserMrc20Balances } from "@/servies/api";
import SelectAsset from "@/components/SelectAsset";
import Summary, {
  ConfirmProps,
  MinerFeeBreakdownOverlay,
} from "./components/Summary";
import SuccessModel from "@/components/SuccessModel";
import SwitchChain from "./components/SwitchChain";
import InputToken from "./components/InputToken";
import NumberFormat from "@/components/NumberFormat";
import { checkWalletAddress } from "@/utils/psbtBuild";

const defaultConfirmProps: ConfirmProps = {
  show: false,
  amount: "",
  reciveAmount: "",
  bridgeFee: "",
  totalFee: "",
  minerFee: "",
  handleSubmit: async () => {},
  onClose: () => {},
};

const { useBreakpoint } = Grid;

export default () => {
  const {
    token: { colorBgBase, borderRadius, borderRadiusSM },
  } = theme.useToken();
  const screens = useBreakpoint();
  const [historyVisible, setHistoryVisible] = useState<boolean>(false);

  const {
    userBal,
    connected,
    btcAddress,
    network,
    getBal,
    feeRates,
    feeRate,
    feeRateType,
    selectFeeRatePlan,
    setFeeRateModalVisible,
  } = useModel("wallet");
  const {
    asset,
    protocolType,
    AssetsInfo,
    feeQuote,
    setProtocolType,
    setAsset,
    resetInput,
    amount,
    setAmount,
    reciveAmount,
    setReciveAmount,
    feeInfo,
    setFeeInfo,
    ErrorMsg,
    setErrorMsg,
    bridgeType,
    mrc20Info,
    setMrc20Info,
  } = useModel("wrapping");

  const [selectAssetVisible, setSelectAssetVisible] = useState<
    "send" | "recive"
  >();
  const [successVisible, setSuccessVisible] = useState(false);
  const [confrimProps, setConfirmProps] =
    useState<ConfirmProps>(defaultConfirmProps);
  const [loadingInput, setLoadingInput] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleHistory = () => {
    if (connected) {
      setHistoryVisible(true);
    } else {
      message.warning("please connect wallet");
    }
  };

  const sendBal = useMemo(() => {
    if (!asset) return "0";
    if (bridgeType === "redeem") {
      return userBal[asset.targetTokenGenesis] || "0";
    }
    if (protocolType === "btc") {
      return userBal["btc"] || "0";
    }
    if (protocolType === "mrc20") {
      const find = mrc20Info?.find(
        (item) => item.mrc20Id === asset.originTokenId
      );
      return find ? find.balance : "0";
    }
    return "0";
  }, [protocolType, bridgeType, asset, userBal, mrc20Info]);

  const actionType = useMemo(() => {
    return bridgeType + protocolType;
  }, [bridgeType, protocolType]);

  const assetMaxDecimals = useMemo(() => {
    if (!asset) return 8;
    return asset.network === "BTC"
      ? asset.decimals
      : Math.max(0, asset.decimals - asset.trimDecimals);
  }, [asset]);

  const recomputeFeeAndReceive = useCallback(
    (val: string | number | null) => {
      if (val === null || val === undefined || val === "") {
        setReciveAmount("");
        setErrorMsg("");
        return;
      }
      if (AssetsInfo && asset) {
        try {
          const info: FeeInfo =
            bridgeType === "mint"
              ? calcMintInfo(val, AssetsInfo, asset, feeQuote, feeRate)
              : calcRedeemInfo(val, AssetsInfo, asset, feeQuote, feeRate);
          if (Number(info.receiveAmount) <= 0) {
            throw new Error("Low send amount");
          }
          setErrorMsg("");
          setReciveAmount(info.receiveAmount);
          setFeeInfo(info);
        } catch (err: any) {
          setReciveAmount("");
          setErrorMsg(err.message || "Invalid amount");
        }
      }
    },
    [
      AssetsInfo,
      asset,
      bridgeType,
      feeQuote,
      feeRate,
      setErrorMsg,
      setFeeInfo,
      setReciveAmount,
    ]
  );

  const onInputChange = (value: string | number | null) => {
    if (value === null || value === undefined || value === "") {
      setAmount("");
      setReciveAmount("");
      setErrorMsg("");
      return;
    }
    setAmount(value);
    recomputeFeeAndReceive(value);
  };

  useEffect(() => {
    if (amount !== "" && amount !== undefined && amount !== null) {
      recomputeFeeAndReceive(amount);
    }
  }, [feeQuote, feeRate, recomputeFeeAndReceive]);

  const mrc20OriginTokenId = useMemo(() => {
    if (asset && asset.network === "MRC20" && asset.originTokenId) {
      return asset.originTokenId;
    }
    return undefined;
  }, [asset]);

  useEffect(() => {
    if (!connected || !btcAddress) {
      setMrc20Info([]);
      setLoadingInput(false);
      return;
    }
    if (!network || actionType !== "mintmrc20" || !mrc20OriginTokenId) {
      return;
    }
    let didCancel = false;
    const fetchMrcBalances = async () => {
      setLoadingInput(true);
      try {
        let list: API.Mrc20BalItem[] = [];
        for (let i = 0; i < 10; i++) {
          const ret = await getUserMrc20Balances(btcAddress, network, i, 50);
          if (ret.code === 0 && Array.isArray(ret.data?.list)) {
            list = [...list, ...ret.data.list];
            if (ret.data.list.length < 50) break;
          } else {
            break;
          }
        }
        if (!didCancel) {
          setMrc20Info(list);
        }
      } catch (err) {
        console.log(err);
        if (!didCancel) {
          setMrc20Info([]);
        }
      } finally {
        if (!didCancel) setLoadingInput(false);
      }
    };
    fetchMrcBalances();
    return () => {
      didCancel = true;
    };
  }, [connected, actionType, network, btcAddress, mrc20OriginTokenId, setMrc20Info]);

  const inputRange = useMemo(() => {
    let minAmount = 0;
    let maxAmount = 0;
    if (AssetsInfo && asset) {
      try {
        [minAmount, maxAmount] = calculateQuantityLimitRange(AssetsInfo, asset);
      } catch {}
    }
    return { maxAmount, minAmount };
  }, [asset, AssetsInfo]);

  const orderedQuickTiers = useMemo(() => {
    const slow = feeRates.find((t) => t.label === "Slow");
    const avg = feeRates.find((t) => t.label === "Avg");
    const fast = feeRates.find((t) => t.label === "Fast");
    return [slow, avg, fast].filter(Boolean) as typeof feeRates;
  }, [feeRates]);

  const liveFeeBreakdown = useMemo(() => {
    return computeScenarioFeeBreakdown({
      protocolType,
      bridgeType,
      userBtcFeeRate: feeRate,
      quote: feeQuote,
      defaultBtcRate: AssetsInfo?.feeBtc,
    });
  }, [protocolType, bridgeType, feeRate, feeQuote, AssetsInfo]);

  /**
   * Dual-chain native gas & bridge fee pre-flight check:
   * - Mint: checks BTC (and MRC20 token balance); allows 0 SPACE new users.
   * - Redeem: checks MVC FT balance AND MVC SPACE balance AND BTC balance before allowing Submit!
   */
  const balCheck = useMemo(() => {
    if (!connected || !asset || !amount || Number(amount) <= 0) return "";
    let decAmount: Decimal;
    try {
      decAmount = new Decimal(String(amount));
      if (decAmount.lte(0)) return "";
    } catch {
      return "";
    }

    const btcSats = Number(userBal.btcSats ?? 0);
    const spaceSats = Number(userBal.spaceSats ?? 0);
    const {
      btcRate,
      btcServiceFeeSats,
      mvcServiceFeeSats,
      estMinerBtcSats,
      estMinerMvcSats,
      totalOutlayBtcSats,
      totalOutlayMvcSats,
    } = liveFeeBreakdown;

    if (bridgeType === "mint") {
      if (protocolType === "btc") {
        const principalSats = Number(amountRaw(decAmount.toFixed(), 8));
        const requiredBtcSats = principalSats + totalOutlayBtcSats;
        if (btcSats < requiredBtcSats) {
          return `Insufficient BTC balance: need ~${formatSat(
            requiredBtcSats,
            8
          )} BTC (amount + ${formatSatsInt(
            btcServiceFeeSats
          )} Sats service fee + ~${formatSatsInt(
            estMinerBtcSats
          )} Sats miner fee @ ${btcRate} sat/vB), available ${
            userBal.btc || "0"
          } BTC.`;
        }
        return "";
      }

      if (protocolType === "mrc20") {
        if (decAmount.gt(new Decimal(String(sendBal || "0")))) {
          return `Insufficient ${asset.originSymbol} balance.`;
        }
        const requiredBtcSats = totalOutlayBtcSats;
        if (btcSats < requiredBtcSats) {
          return `Insufficient BTC for fees: need ~${formatSatsInt(
            requiredBtcSats
          )} Sats (${formatSatsInt(
            btcServiceFeeSats
          )} Sats service fee + ~${formatSatsInt(
            estMinerBtcSats
          )} Sats miner fee & postage @ ${btcRate} sat/vB), available ${formatSatsInt(
            btcSats
          )} Sats.`;
        }
        return "";
      }
    }

    if (bridgeType === "redeem") {
      if (decAmount.gt(new Decimal(String(sendBal || "0")))) {
        return `Insufficient ${asset.targetSymbol} balance.`;
      }
      const requiredSpaceSats = totalOutlayMvcSats;
      if (spaceSats < requiredSpaceSats) {
        return `Insufficient MVC SPACE for Redeem: need ~${formatSat(
          requiredSpaceSats,
          8
        )} SPACE (${formatSat(
          mvcServiceFeeSats,
          8
        )} SPACE service fee + ~${formatSat(
          estMinerMvcSats,
          8
        )} SPACE network miner fee), available ${
          userBal.space || "0"
        } SPACE.`;
      }

      const requiredBtcSats = totalOutlayBtcSats;
      if (btcSats < requiredBtcSats) {
        return `Insufficient BTC for Redeem: need ~${formatSatsInt(
          requiredBtcSats
        )} Sats (${formatSatsInt(
          btcServiceFeeSats
        )} Sats service fee + ~${formatSatsInt(
          estMinerBtcSats
        )} Sats miner fee & postage @ ${btcRate} sat/vB), available ${formatSatsInt(
          btcSats
        )} Sats.`;
      }
    }

    return "";
  }, [
    connected,
    asset,
    amount,
    userBal,
    liveFeeBreakdown,
    bridgeType,
    protocolType,
    sendBal,
  ]);

  const handleQuickPercent = (ratio: number) => {
    if (!asset) return;
    const total = new Decimal(String(sendBal || "0"));
    if (total.lte(0)) {
      onInputChange("0");
      return;
    }
    if (bridgeType === "mint" && protocolType === "btc" && ratio === 1) {
      const reserveBtc = new Decimal(
        liveFeeBreakdown.btcServiceFeeSats +
          Math.ceil(180 * liveFeeBreakdown.btcRate)
      ).div(1e8);
      const maxSend = Decimal.max(0, total.minus(reserveBtc));
      onInputChange(
        maxSend.toDP(assetMaxDecimals, Decimal.ROUND_DOWN).toString()
      );
      return;
    }
    const target = total
      .mul(ratio)
      .toDP(assetMaxDecimals, Decimal.ROUND_DOWN)
      .toString();
    onInputChange(target);
  };

  const unsupportedBtcAddrMsg = useMemo(() => {
    if (!connected || !btcAddress) return "";
    try {
      const addrType = determineAddressInfo(
        btcAddress
      ).toUpperCase() as SupportRedeemAddressType;
      if (!supportRedeemAddressType.includes(addrType)) {
        return "Unsupported BTC address type (Nested Segwit / P2SH 3...). Please switch your BTC address in Metalet to Native Segwit (bc1q...), Taproot (bc1p...), or Legacy (1...).";
      }
    } catch {
      return "Invalid or unsupported BTC wallet address.";
    }
    return "";
  }, [connected, btcAddress]);

  const singleMintCapMsg = useMemo(() => {
    if (
      bridgeType !== "mint" ||
      protocolType !== "mrc20" ||
      !asset ||
      !amount ||
      Number(amount) <= 0
    ) {
      return "";
    }
    const capStr = feeQuote?.maxSingleMintAmount;
    if (capStr === undefined || capStr === null || capStr === "") return "";
    try {
      const decAmt = new Decimal(String(amount));
      const decCap = new Decimal(String(capStr));
      if (decAmt.gt(decCap)) {
        return `Single-order Mint limit is ${capStr} ${asset.originSymbol} (current lock-pool UTXO cap). Please split into smaller orders.`;
      }
    } catch {}
    return "";
  }, [bridgeType, protocolType, asset, amount, feeQuote?.maxSingleMintAmount]);

  const redeem = async () => {
    if (!btcAddress || !asset || !network) return;

    try {
      setSubmitting(true);
      const { status, message: addrErr } = await checkWalletAddress(btcAddress);
      if (!status) throw new Error(addrErr);
      const addressInfo = determineAddressInfo(btcAddress);
      const addressType: SupportRedeemAddressType =
        addressInfo.toUpperCase() as SupportRedeemAddressType;
      if (!supportRedeemAddressType.includes(addressType)) {
        throw new Error(
          "Unsupported BTC address type (P2SH/3...). Please switch to Native Segwit (bc1q), Taproot (bc1p), or Legacy (1...) in Metalet."
        );
      }
      if (protocolType === "btc") {
        await redeemBtc(
          amountRaw(String(amount), asset.decimals),
          asset,
          addressType,
          network,
          AssetsInfo,
          feeRate
        );
      } else if (protocolType === "mrc20") {
        await redeemMrc20(
          amountRaw(String(amount), asset.decimals - asset.trimDecimals),
          asset,
          addressType,
          network,
          AssetsInfo,
          feeRate
        );
      }
      setSuccessVisible(true);
      await getBal(true);
    } catch (err: any) {
      console.log(err);
      const errMsg = extractApiErrorMessage(err);
      if (errMsg === "canceled") {
        message.info("Signing canceled");
        return;
      }
      const replenishMsg =
        feeQuote?.hotVaultReplenishingMessage ||
        "系统冷钱包正在补充中，请稍后尝试";
      if (errMsg === replenishMsg || errMsg.includes("冷钱包正在补充")) {
        setConfirmProps(defaultConfirmProps);
        setErrorMsg(errMsg);
        message.warning(errMsg);
        return;
      }
      message.error(errMsg);
    } finally {
      setSubmitting(false);
    }
  };

  const isMintPaused = useMemo(() => {
    if (bridgeType !== "mint") return false;
    return Boolean(
      AssetsInfo?.mintPaused || (asset && asset.isEnableMint === false)
    );
  }, [AssetsInfo, asset, bridgeType]);

  const mintPausedMessage = useMemo(() => {
    return (
      AssetsInfo?.mintPausedMessage ||
      "该功能暂时关闭，重开时间请留意官方公告"
    );
  }, [AssetsInfo]);

  const mint = async () => {
    if (isMintPaused) {
      message.warning(mintPausedMessage);
      return;
    }
    if (!btcAddress || !asset || !network || !AssetsInfo) return;

    try {
      setSubmitting(true);
      const { status, message: addrErr } = await checkWalletAddress(btcAddress);
      if (!status) throw new Error(addrErr);
      const addressInfo = determineAddressInfo(btcAddress);
      const addressType: SupportRedeemAddressType =
        addressInfo.toUpperCase() as SupportRedeemAddressType;
      if (!supportRedeemAddressType.includes(addressType)) {
        throw new Error(
          "Unsupported BTC address type (P2SH/3...). Please switch to Native Segwit (bc1q), Taproot (bc1p), or Legacy (1...) in Metalet."
        );
      }
      if (protocolType === "btc") {
        await mintBtc(
          amountRaw(String(amount), 8),
          asset,
          addressType,
          network,
          AssetsInfo,
          feeRate
        );
      } else if (protocolType === "mrc20") {
        await mintMrc20(
          String(amount),
          asset,
          addressType,
          network,
          AssetsInfo,
          feeRate
        );
      }
      setSuccessVisible(true);
      await getBal(true);
    } catch (err: any) {
      console.log(err);
      const errMsg = extractApiErrorMessage(err);
      if (errMsg === "canceled") {
        message.info("Signing canceled");
        return;
      }
      message.error(errMsg);
    } finally {
      setSubmitting(false);
    }
  };

  const conditions = useMemo(() => {
    return [
      {
        condition: isMintPaused,
        text: mintPausedMessage,
        type: "primary" as const,
        onClick: () => {
          message.warning(mintPausedMessage);
        },
      },
      {
        condition: Boolean(unsupportedBtcAddrMsg),
        text: "Switch BTC Address Type",
        type: "primary" as const,
        danger: true,
        onClick: () => {
          message.warning(unsupportedBtcAddrMsg);
        },
      },
      {
        condition: !amount || Number(amount) <= 0,
        text: "Enter Amount",
        type: "primary" as const,
        onClick: () => {},
      },
      {
        condition: Boolean(ErrorMsg),
        text: ErrorMsg,
        type: "primary" as const,
        onClick: () => {
          message.warning(ErrorMsg);
        },
      },
      {
        condition: Boolean(singleMintCapMsg),
        text: "Exceeds Single-Order Limit",
        type: "primary" as const,
        danger: true,
        onClick: () => {
          message.warning(singleMintCapMsg);
        },
      },
      {
        condition: Boolean(balCheck),
        text: "Insufficient Balance",
        type: "primary" as const,
        danger: true,
        onClick: () => {
          message.warning(balCheck);
        },
      },
    ];
  }, [
    ErrorMsg,
    amount,
    balCheck,
    isMintPaused,
    mintPausedMessage,
    singleMintCapMsg,
    unsupportedBtcAddrMsg,
  ]);

  const handleSubmit = () => {
    if (bridgeType === "mint") return mint();
    if (bridgeType === "redeem") return redeem();
  };

  const handleConfirm = () => {
    if (isMintPaused) {
      message.warning(mintPausedMessage);
      return;
    }
    if (unsupportedBtcAddrMsg) {
      message.warning(unsupportedBtcAddrMsg);
      return;
    }
    if (singleMintCapMsg) {
      message.warning(singleMintCapMsg);
      return;
    }
    if (balCheck) {
      message.warning(balCheck);
      return;
    }
    setConfirmProps({
      show: true,
      amount,
      reciveAmount: String(reciveAmount),
      minerFee: String(feeInfo.minerFee || liveFeeBreakdown.minerFeeText),
      bridgeFee: String(feeInfo.bridgeFee || liveFeeBreakdown.serviceFeeText),
      totalFee: String(feeInfo.totalFee || liveFeeBreakdown.totalFeeText),
      serviceFeeTooltip:
        feeInfo.serviceFeeTooltip || liveFeeBreakdown.serviceFeeTooltip,
      minerFeeBreakdown:
        feeInfo.minerFeeBreakdown || liveFeeBreakdown.minerFeeBreakdown,
      handleSubmit,
      onClose: () => {
        setConfirmProps(defaultConfirmProps);
      },
    });
  };

  return (
    <div className="wrapPage">
      <Segmented
        className="protocolSegmented"
        value={protocolType}
        onChange={(value) => {
          setProtocolType(value as any);
          resetInput();
        }}
        options={SegOptions}
        size={screens.xs ? "middle" : "large"}
        block
      />
      <Card
        className="wrappingCard"
        id="wrapping"
        loading={!AssetsInfo}
      >
        <Spin spinning={!AssetsInfo}>
          <div className="title">
            Wrapping
            <div
              className="imgwrap"
              style={{ background: colorBgBase, borderRadius }}
              onClick={handleHistory}
            >
              <img src={historyIcon} alt="" />
            </div>
          </div>
          <SwitchChain />

          {asset && (
            <div className="assets">
              <div className="send inputCardWrap">
                <div className="label">
                  <span>You send</span>
                  <Space>
                    <span
                      className="tag"
                      style={{
                        background: colorBgBase,
                        borderRadius: borderRadiusSM,
                      }}
                      onClick={() => handleQuickPercent(0.25)}
                    >
                      25%
                    </span>
                    <span
                      className="tag"
                      style={{
                        background: colorBgBase,
                        borderRadius: borderRadiusSM,
                      }}
                      onClick={() => handleQuickPercent(0.5)}
                    >
                      50%
                    </span>
                    <span
                      className="tag"
                      style={{
                        background: colorBgBase,
                        borderRadius: borderRadiusSM,
                      }}
                      onClick={() => handleQuickPercent(1)}
                    >
                      Max
                    </span>
                  </Space>
                </div>

                <div
                  className="inputCard"
                  style={{ background: colorBgBase, borderRadius }}
                >
                  <Dropdown
                    dropdownRender={() => (
                      <div
                        style={{ marginTop: -100, paddingTop: 100 }}
                        onMouseLeave={() => setSelectAssetVisible(undefined)}
                      >
                        <SelectAsset
                          type={bridgeType === "mint" ? "origin" : "target"}
                          onChange={(_asset) => {
                            setAsset(_asset);
                            setSelectAssetVisible(undefined);
                            resetInput();
                          }}
                        />
                      </div>
                    )}
                    open={selectAssetVisible === "send"}
                    placement="bottomLeft"
                    autoAdjustOverflow={false}
                  >
                    <div
                      onClick={() => {
                        setSelectAssetVisible("send");
                      }}
                      style={{ cursor: "pointer" }}
                      className="tokenInputWrap"
                    >
                      <InputToken
                        asset={asset}
                        position="send"
                        bridgeType={bridgeType}
                      />
                      <div
                        className={
                          selectAssetVisible === "send"
                            ? "spanRotate"
                            : "spanReset"
                        }
                      >
                        <DownOutlined />
                      </div>
                    </div>
                  </Dropdown>
                  <div className="inputWrap">
                    <InputNumber
                      className="input"
                      onChange={onInputChange}
                      value={amount as any}
                      stringMode
                      variant={"borderless"}
                      controls={false}
                    />
                  </div>
                </div>
                <div className="bal">
                  <span className="balPrimary">
                    Balance: <span>{loadingInput ? "..." : sendBal}</span>{" "}
                    {bridgeType === "mint"
                      ? asset.originSymbol
                      : asset.targetSymbol}
                  </span>
                  {connected && bridgeType === "redeem" && (
                    <span className="balGasTag">
                      Gas: {userBal.space || "0"} SPACE ·{" "}
                      {formatSatsInt(userBal.btcSats ?? 0)} Sats
                    </span>
                  )}
                  {connected &&
                    bridgeType === "mint" &&
                    protocolType === "mrc20" && (
                      <span className="balGasTag">
                        BTC Gas: {formatSatsInt(userBal.btcSats ?? 0)} Sats
                      </span>
                    )}
                </div>
              </div>

              <div className="recive inputCardWrap">
                <div className="label">
                  <span>You receive (1:1 Full Amount)</span>
                </div>
                <div
                  className="inputCard"
                  style={{ background: colorBgBase, borderRadius }}
                >
                  <Dropdown
                    dropdownRender={() => (
                      <div
                        style={{ marginTop: -100, paddingTop: 100 }}
                        onMouseLeave={() => setSelectAssetVisible(undefined)}
                      >
                        <SelectAsset
                          type={bridgeType === "redeem" ? "origin" : "target"}
                          onChange={(_asset) => {
                            setAsset(_asset);
                            setSelectAssetVisible(undefined);
                            resetInput();
                          }}
                        />
                      </div>
                    )}
                    open={selectAssetVisible === "recive"}
                    placement="bottomLeft"
                    autoAdjustOverflow={false}
                  >
                    <div
                      onClick={() => {
                        setSelectAssetVisible("recive");
                      }}
                      style={{ cursor: "pointer" }}
                      className="tokenInputWrap"
                    >
                      <InputToken
                        asset={asset}
                        position="recive"
                        bridgeType={bridgeType}
                      />
                      <div
                        className={
                          selectAssetVisible === "recive"
                            ? "spanRotate"
                            : "spanReset"
                        }
                      >
                        <DownOutlined />
                      </div>
                    </div>
                  </Dropdown>

                  <div className="inputWrap">
                    <InputNumber
                      className="input"
                      value={reciveAmount as any}
                      stringMode
                      variant={"borderless"}
                      controls={false}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {asset && (
            <div className="range">
              {inputRange.maxAmount > 0 && (
                <>
                  <div className="item">
                    <span className="label">Minimum Bridging Quantity</span>
                    <span className="value">
                      <NumberFormat
                        value={inputRange.minAmount}
                        precision={assetMaxDecimals}
                      />{" "}
                      {bridgeType === "mint"
                        ? asset.originSymbol
                        : asset.targetSymbol}
                    </span>
                  </div>
                  <div className="item">
                    <span className="label">Maximum Bridging Quantity</span>
                    <span className="value">
                      <NumberFormat
                        value={inputRange.maxAmount}
                        precision={assetMaxDecimals}
                      />{" "}
                      {bridgeType === "mint"
                        ? asset.originSymbol
                        : asset.targetSymbol}
                    </span>
                  </div>
                </>
              )}

              <div className="feeSelectorBox">
                <div className="feeSelectorHeader">
                  <span className="feeSelectorTitle">BTC Fee Rate</span>
                  <span className="mvcSubBadge">MVC · 1 sat/B</span>
                </div>
                <div className="feeChipGroup">
                  {orderedQuickTiers.map((tier) => {
                    const active = feeRateType === tier.label;
                    return (
                      <button
                        key={tier.label}
                        type="button"
                        className={`feeChip ${active ? "active" : ""}`}
                        onClick={() => selectFeeRatePlan(tier.label)}
                      >
                        <span className="chipLabel">{tier.label}</span>
                        <span className="chipVal">{tier.value}</span>
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    className={`feeChip customChip ${
                      feeRateType === "Custom" ? "active" : ""
                    }`}
                    onClick={() => setFeeRateModalVisible(true)}
                  >
                    <span className="chipLabel">Custom</span>
                    {feeRateType === "Custom" ? (
                      <span className="chipVal">{feeRate}</span>
                    ) : (
                      <EditOutlined className="chipEditIcon" />
                    )}
                  </button>
                </div>
              </div>

              <div className="feeInfoBox">
                <div className="item feeRow">
                  <span className="label feeLabelWithHelp">
                    <span className="desktopFeeLabel">Bridge Service Fee</span>
                    <span className="mobileFeeLabel">Service Fee</span>
                    <Tooltip
                      trigger={["hover", "click"]}
                      title={liveFeeBreakdown.serviceFeeTooltip}
                      overlayInnerStyle={{
                        maxWidth: "min(330px, calc(100vw - 24px))",
                        background: "#14124a",
                        border: "1px solid rgba(110, 102, 250, 0.45)",
                        fontSize: 12,
                      }}
                    >
                      <QuestionCircleOutlined className="feeHelpIcon" />
                    </Tooltip>
                  </span>
                  <span className="value feeValue">
                    {liveFeeBreakdown.serviceFeeText}
                  </span>
                </div>
                <div className="item feeRow">
                  <span className="label feeLabelWithHelp">
                    <span className="desktopFeeLabel">
                      Est. Network Miner Fee ({liveFeeBreakdown.btcRate} sat/vB)
                    </span>
                    <span className="mobileFeeLabel">
                      Miner Fee ({liveFeeBreakdown.btcRate} sat/vB)
                    </span>
                    <Tooltip
                      trigger={["hover", "click"]}
                      title={
                        <MinerFeeBreakdownOverlay
                          items={liveFeeBreakdown.minerFeeBreakdown}
                          total={liveFeeBreakdown.minerFeeText}
                        />
                      }
                      overlayInnerStyle={{
                        maxWidth: "min(360px, calc(100vw - 24px))",
                        background: "#14124a",
                        border: "1px solid rgba(110, 102, 250, 0.45)",
                        padding: "10px 12px",
                      }}
                    >
                      <QuestionCircleOutlined className="feeHelpIcon" />
                    </Tooltip>
                  </span>
                  <span className="value feeValue">
                    {liveFeeBreakdown.minerFeeText}
                  </span>
                </div>
              </div>
            </div>
          )}

          {isMintPaused && (
            <Alert
              message={mintPausedMessage}
              type="warning"
              style={{ marginTop: 20 }}
              showIcon
            />
          )}
          {unsupportedBtcAddrMsg && (
            <Alert
              message={unsupportedBtcAddrMsg}
              type="warning"
              style={{ marginTop: 20 }}
              showIcon
            />
          )}
          {singleMintCapMsg && (
            <Alert
              message={singleMintCapMsg}
              type="warning"
              style={{ marginTop: 20 }}
              showIcon
            />
          )}
          {balCheck && (
            <Alert
              message={balCheck}
              type="warning"
              style={{ marginTop: 20 }}
              showIcon
            />
          )}
          {ErrorMsg && (
            <Alert
              message={ErrorMsg}
              type="warning"
              style={{ marginTop: 20 }}
              showIcon
            />
          )}

          {asset && (
            <div className="submitWrap">
              <FormButton conditions={conditions} onClick={handleConfirm}>
                Bridge
              </FormButton>
            </div>
          )}

          <History
            show={historyVisible}
            onClose={() => setHistoryVisible(false)}
            protocolType={protocolType}
            bridgeType={bridgeType}
          />
        </Spin>
      </Card>

      <Summary
        {...confrimProps}
        handleSubmit={handleSubmit}
        submitting={submitting}
      />
      <SuccessModel
        show={successVisible}
        onClose={() => {
          setSuccessVisible(false);
          resetInput();
          setConfirmProps(defaultConfirmProps);
          setHistoryVisible(true);
        }}
      />
    </div>
  );
};
