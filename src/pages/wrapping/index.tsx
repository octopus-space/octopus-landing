import {
  Card,
  Dropdown,
  InputNumber,
  Segmented,
  Space,
  Spin,
  message,
  theme,
  Grid,
  Alert,
} from "antd";
import { DownOutlined, EditOutlined } from "@ant-design/icons";
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
  computeRedeemBtcServiceFeeSats,
  determineAddressInfo,
  formatSat,
} from "@/utils/utils";
import History from "./components/History";
import FormButton from "@/components/FormButton";
import { SegOptions } from "./components/Options";
import {
  SupportRedeemAddressType,
  mintBtc,
  mintMrc20,
  redeemBtc,
  redeemMrc20,
  supportRedeemAddressType,
} from "@/servies/wrapping";
import { getUserMrc20Balances } from "@/servies/api";
import SelectAsset from "@/components/SelectAsset";
import Summary, { ConfirmProps } from "./components/Summary";
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

  const liveServiceFeeSummary = useMemo(() => {
    if (!asset) return "";
    if (bridgeType === "mint") {
      const btcFee = Number(
        feeQuote?.btcFeeSats ?? (protocolType === "btc" ? 800 : 1000)
      );
      return `${formatSat(btcFee, 8)} BTC (${btcFee} sats)`;
    }
    const btcFee = computeRedeemBtcServiceFeeSats(
      protocolType === "btc" ? "BTC" : "MRC20",
      feeRate,
      feeQuote
    );
    const mvcFee = Number(feeQuote?.mvcFeeSats ?? 50000);
    return `${formatSat(mvcFee, 8)} SPACE + ${formatSat(btcFee, 8)} BTC`;
  }, [asset, bridgeType, protocolType, feeQuote, feeRate]);

  const liveEstMinerFeeSummary = useMemo(() => {
    const btcRate = Math.max(1, Math.ceil(Number(feeRate || 2)));
    if (bridgeType === "mint") {
      const estSats =
        protocolType === "btc"
          ? Math.ceil(160 * btcRate)
          : 546 + Math.ceil(300 * btcRate);
      return `~${formatSat(estSats, 8)} BTC`;
    }
    const estBtcSats = Math.ceil(150 * btcRate);
    return `~${formatSat(4500, 8)} SPACE + ~${formatSat(estBtcSats, 8)} BTC`;
  }, [bridgeType, protocolType, feeRate]);

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
    const btcRate = Math.max(
      1,
      Math.ceil(Number(feeRate || feeQuote?.btcFeeRate || AssetsInfo?.feeBtc || 2))
    );

    if (bridgeType === "mint") {
      if (protocolType === "btc") {
        const principalSats = Number(amountRaw(decAmount.toFixed(), 8));
        const bridgeFeeSats = Number(feeQuote?.btcFeeSats ?? 800);
        const estMinerSats = Math.ceil(180 * btcRate);
        const requiredBtcSats = principalSats + bridgeFeeSats + estMinerSats;
        if (btcSats < requiredBtcSats) {
          return `Insufficient BTC balance: need ~${formatSat(
            requiredBtcSats,
            8
          )} BTC (amount + ${formatSat(
            bridgeFeeSats,
            8
          )} BTC bridge fee + miner fee @ ${btcRate} sat/vB), available ${
            userBal.btc || "0"
          } BTC.`;
        }
        return "";
      }

      if (protocolType === "mrc20") {
        if (decAmount.gt(new Decimal(String(sendBal || "0")))) {
          return `Insufficient ${asset.originSymbol} balance.`;
        }
        const bridgeFeeSats = Number(feeQuote?.btcFeeSats ?? 1000);
        const estCommitRevealSats = 546 + Math.ceil(320 * btcRate);
        const requiredBtcSats = bridgeFeeSats + estCommitRevealSats;
        if (btcSats < requiredBtcSats) {
          return `Insufficient BTC for bridge & network fee: need at least ~${formatSat(
            requiredBtcSats,
            8
          )} BTC (${bridgeFeeSats} sats bridge fee + commit/reveal gas @ ${btcRate} sat/vB), available ${
            userBal.btc || "0"
          } BTC.`;
        }
        return "";
      }
    }

    if (bridgeType === "redeem") {
      if (decAmount.gt(new Decimal(String(sendBal || "0")))) {
        return `Insufficient ${asset.targetSymbol} balance.`;
      }
      const mvcFeeSats = Number(feeQuote?.mvcFeeSats ?? 50000);
      const estMvcMinerSats = 6000;
      const requiredSpaceSats = mvcFeeSats + estMvcMinerSats;
      if (spaceSats < requiredSpaceSats) {
        return `Insufficient MVC SPACE for Redeem fee: need at least ${formatSat(
          requiredSpaceSats,
          8
        )} SPACE (${formatSat(
          mvcFeeSats,
          8
        )} SPACE bridge fee + MVC network gas), available ${
          userBal.space || "0"
        } SPACE.`;
      }

      const btcFeeSats = computeRedeemBtcServiceFeeSats(
        protocolType === "btc" ? "BTC" : "MRC20",
        btcRate,
        feeQuote
      );
      const estBtcMinerSats = Math.ceil(150 * btcRate);
      const requiredBtcSats = btcFeeSats + estBtcMinerSats;
      if (btcSats < requiredBtcSats) {
        return `Insufficient BTC for Redeem payout fee: need at least ${formatSat(
          requiredBtcSats,
          8
        )} BTC (${formatSat(
          btcFeeSats,
          8
        )} BTC bridge fee + BTC miner fee @ ${btcRate} sat/vB), available ${
          userBal.btc || "0"
        } BTC.`;
      }
    }

    return "";
  }, [
    connected,
    asset,
    amount,
    userBal,
    feeRate,
    feeQuote,
    AssetsInfo,
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
      const btcRate = Math.max(
        1,
        Math.ceil(Number(feeRate || feeQuote?.btcFeeRate || AssetsInfo?.feeBtc || 2))
      );
      const reserveBtc = new Decimal(
        Number(feeQuote?.btcFeeSats ?? 800) + Math.ceil(180 * btcRate)
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
        throw new Error("unsupport address type");
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
      message.error(err.message || "unknown error");
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
      const errMsg =
        err?.response?.data?.message ||
        err?.response?.data?.msg ||
        err?.data?.message ||
        err?.data?.msg ||
        err?.message ||
        err?.msg ||
        "unknown error";
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
        condition: !amount || Number(amount) <= 0,
        text: "Enter Amount",
        type: "primary" as const,
        onClick: () => {},
      },
      {
        condition: Boolean(ErrorMsg),
        text: ErrorMsg,
        type: "primary" as const,
        onClick: () => {},
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
  }, [ErrorMsg, amount, balCheck, isMintPaused, mintPausedMessage]);

  const handleSubmit = () => {
    if (bridgeType === "mint") return mint();
    if (bridgeType === "redeem") return redeem();
  };

  const handleConfirm = () => {
    if (isMintPaused) {
      message.warning(mintPausedMessage);
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
      minerFee: String(feeInfo.minerFee),
      bridgeFee: String(feeInfo.bridgeFee),
      totalFee: String(feeInfo.totalFee),
      handleSubmit,
      onClose: () => {
        setConfirmProps(defaultConfirmProps);
      },
    });
  };

  return (
    <div className="wrapPage">
      <Segmented
        style={{
          width: 520,
          maxWidth: "92vw",
          marginBottom: 32,
          overflow: "auto",
        }}
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
        style={{
          width: 520,
          maxWidth: "92vw",
          position: "relative",
          border: "2px solid #6e66fa",
          minHeight: 666,
        }}
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
                  Balance:
                  <span> {loadingInput ? "..." : sendBal} </span>
                  {bridgeType === "mint"
                    ? asset.originSymbol
                    : asset.targetSymbol}
                  {connected && bridgeType === "redeem" && (
                    <span style={{ marginLeft: 12, opacity: 0.8 }}>
                      | Gas: {userBal.space || "0"} SPACE ·{" "}
                      {userBal.btc || "0"} BTC
                    </span>
                  )}
                  {connected &&
                    bridgeType === "mint" &&
                    protocolType === "mrc20" && (
                      <span style={{ marginLeft: 12, opacity: 0.8 }}>
                        | BTC Gas: {userBal.btc || "0"} BTC
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

              <div className="item feeSelectorRow">
                <span className="label">
                  BTC Fee Rate
                  <span className="mvcSubBadge">MVC: 1 sat/B</span>
                </span>
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
                    <span className="chipLabel">
                      {feeRateType === "Custom"
                        ? `Custom · ${feeRate}`
                        : "Custom"}
                    </span>
                    <EditOutlined style={{ fontSize: 10 }} />
                  </button>
                </div>
              </div>

              <div className="item">
                <span className="label">Bridge Service Fee</span>
                <span className="value">{liveServiceFeeSummary}</span>
              </div>
              <div className="item">
                <span className="label">
                  Est. Network Miner Fee ({feeRate} sat/vB)
                </span>
                <span className="value">{liveEstMinerFeeSummary}</span>
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
