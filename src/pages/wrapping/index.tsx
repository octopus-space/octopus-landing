import {
  Button,
  Card,
  Dropdown,
  Flex,
  InputNumber,
  Segmented,
  Space,
  Spin,
  message,
  theme,
} from "antd";
import { DownOutlined, SyncOutlined, UpOutlined } from "@ant-design/icons";
import { useCallback, useEffect, useMemo, useState } from "react";
import "./index.less";
import { useModel } from "umi";
import switchIcon from "@/assets/switch.svg";
import historyIcon from "@/assets/history.svg";
import {
  FeeInfo,
  amountRaw,
  calcMintBrc20Info,
  calcMintBtcInfo,
  calcMintRunesInfo,
  calcRedeemBrc20Info,
  calcRedeemBtcInfo,
  calcRedeemRunesInfo,
  determineAddressInfo,
  formatSat,
} from "@/utils/utils";
import TokenIcon from "@/components/TokenIcon";
import History from "./components/History";
import FormButton from "@/components/FormButton";
import { SegOptions } from "./components/Options";
import SelectNet from "@/components/SelectNet";
import { Chain } from "@/models/wrapping";
import {
  SupportRedeemAddressType,
  mintBrc,
  mintBtc,
  mintRunes,
  redeemBrc20,
  redeemBtc,
  redeemRunes,
  supportRedeemAddressType,
} from "@/servies/wrapping";
import { getUserBRC20, getUserRunesBalance } from "@/servies/api";
import SelectAsset from "@/components/SelectAsset";
import Summary, { ConfirmProps } from "./components/Summary";
import SuccessModel from "@/components/SuccessModel";
const defalut: ConfirmProps = {
  show: false,
  amount: "",
  reciveAmount: "",
  bridgeFee: "",
  totalFee: "",
  minerFee: "",
  handleSubmit: async () => {},
  onClose: () => {},
};
export default () => {
  const {
    token: { colorBgBase, borderRadius, borderRadiusSM },
  } = theme.useToken();
  const [historyVisible, setHistoryVisible] = useState<boolean>(false);

  const { userBal, connected, btcAddress, network, getBal } =
    useModel("wallet");
  const [amount, setAmount] = useState<number | string>("");
  const [reciveAmount, setReciveAmount] = useState<number | string>("");
  const [selectChainVisible, setSelectChainVisible] = useState(false);
  const [selectAssetVisible, setSelectAssetVisible] = useState<
    "send" | "recive"
  >();
  const [successVisible, setSuccessVisible] = useState(false);
  const [chainType, setChainType] = useState<"from" | "to">();

  const [brc20Info, setBrc20Info] = useState<API.BRC20Info>();
  const [runesInfo, setRunesInfo] = useState<API.RUNESItem>();
  const [refreshBrc20, setRefreshBrc20] = useState<boolean>(false);
  const [inscription, setInscription] = useState<API.TransferbleBRC20>();
  const [confrimProps, setConfirmProps] = useState<ConfirmProps>(defalut);
  const [loadingBrc20, setLoadingBrc20] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [feeInfo, setFeeInfo] = useState<FeeInfo>({
    minerFee: "",
    bridgeFee: "",
    receiveAmount: "",
    totalFee: "",
    confirmNumber: "",
  });
  const {
    chains,
    fromChain,
    toChain,
    setFromChain,
    setToChain,
    asset,
    protocolType,
    AssetsInfo,
    setProtocolType,
    setAsset,
  } = useModel("wrapping");
  const switchChain = () => {
    const _from = fromChain;
    const _to = toChain;
    setToChain(_from);
    setFromChain(_to);
    resetInput();
  };

  const resetInput = () => {
    setAmount("");
    setReciveAmount("");
    setFeeInfo({
      minerFee: "",
      bridgeFee: "",
      receiveAmount: "",
      totalFee: "",
      confirmNumber: "",
    });
    setErrorMsg("");
    setInscription(undefined);
  };

  const handleHistory = () => {
    if (connected) {
      setHistoryVisible(true);
    } else {
      message.warning("please connect wallet");
    }
  };
  const bridgeType: "mint" | "redeem" = useMemo(() => {
    if (fromChain.key === "btc") return "mint";
    return "redeem";
  }, [fromChain]);
  const sendBal = useMemo(() => {
    if (asset && protocolType == "btc") {
      if (bridgeType === "mint") return userBal["btc"] || "0";
      if (bridgeType === "redeem")
        return userBal[asset.targetTokenGenesis] || "0";
    }
    if (asset && protocolType == "brc20") {
      if (bridgeType === "redeem")
        return userBal[asset.targetTokenGenesis] || "0";
      if (bridgeType === "mint")
        return (brc20Info && brc20Info.balance) || "--";
    }

    if (asset && protocolType == "runes") {
      if (bridgeType === "redeem")
        return userBal[asset.targetTokenGenesis] || "0";
      if (bridgeType === "mint" && runesInfo) {
        console.log();
        return Number(
          (
            Number(runesInfo.amount) /
            10 ** Number(runesInfo.divisibility)
          ).toFixed(2)
        );
      } else {
        return "--";
      }
    }
  }, [protocolType, bridgeType, asset, userBal, brc20Info, runesInfo]);

  const onInputChange = (value: string | number) => {
    setAmount(value);
    if (AssetsInfo && asset) {
      let info: FeeInfo;
      try {
        switch (bridgeType + protocolType) {
          case "redeembtc":
            info = calcRedeemBtcInfo(
              amountRaw(String(value), asset.decimals),
              AssetsInfo
            );
            break;
          case "redeembrc20":
            info = info = calcRedeemBrc20Info(
              amountRaw(value, asset.decimals - asset.trimDecimals),
              AssetsInfo,
              asset
            );
            break;
          case "mintbtc":
            info = info = calcMintBtcInfo(amountRaw(value, 8), AssetsInfo);
            break;
          case "mintbrc20":
            info = calcMintBrc20Info(value, AssetsInfo, asset);
            break;
          case "mintrunes":
            info = calcMintRunesInfo(Number(value), AssetsInfo, asset);
            break;
          case "redeemrunes":
            info = calcRedeemRunesInfo(
              amountRaw(value, asset.decimals - asset.trimDecimals),
              AssetsInfo,
              asset
            );
            break;
          default:
            throw new Error("unsupport protocol");
        }
        if (Number(info.receiveAmount) < 0) {
          throw new Error("low send amount");
        }
        setErrorMsg("");

        setReciveAmount(info.receiveAmount);
        setFeeInfo(info);
      } catch (err: any) {
        console.log(err);
        message.error(err.message || "unknown error");
        setReciveAmount("");
        setErrorMsg(err.message || "unknown error");
      }
    }
  };

  useEffect(() => {
    let didCancel = false;
    const fetch = async () => {
      if (
        network &&
        asset &&
        btcAddress &&
        bridgeType === "mint" &&
        protocolType === "brc20" &&
        asset.network === "BRC20"
      ) {
        setLoadingBrc20(true);
        const ret = await getUserBRC20(network, {
          address: btcAddress,
          tick: asset?.originSymbol,
        });
        if (didCancel) return;
        setBrc20Info(
          ret.data || {
            message: ret.message,
            balance: "0",
            transferBalanceList: [],
          }
        );
        setLoadingBrc20(false);
      }

      if (
        network &&
        asset &&
        btcAddress &&
        bridgeType === "mint" &&
        protocolType === "runes" &&
        asset.network === "RUNES"
      ) {
        setLoadingBrc20(true);
        const ret = await getUserRunesBalance(
          btcAddress,
          network,
          asset.originTokenId
        );
        if (didCancel) return;
        console.log(ret, "rrrr");
        setRunesInfo(ret.data);
        setLoadingBrc20(false);
      }
    };
    fetch();
    return () => {
      didCancel = true;
    };
  }, [protocolType, bridgeType, network, asset, btcAddress, refreshBrc20]);

  const handleChainChange = (chainType: "from" | "to", chain: Chain) => {
    if (chainType === "from") {
      if (fromChain.key !== chain.key) {
        switchChain();
      }
    }
    if (chainType === "to") {
      if (toChain.key !== chain.key) {
        switchChain();
      }
    }
    setSelectChainVisible(false);
  };

  const redeem = async () => {
    if (!btcAddress || !asset || !network) return;

    try {
      setSubmitting(true);
      const addressInfo = determineAddressInfo(btcAddress);
      const addressType: SupportRedeemAddressType =
        addressInfo.toUpperCase() as SupportRedeemAddressType;
      if (!supportRedeemAddressType.includes(addressType)) {
        throw new Error("unsupport address type");
      }
      if (bridgeType === "redeem" && protocolType === "btc") {
        await redeemBtc(
          amountRaw(String(amount), asset.decimals),
          asset,
          addressType,
          network
        );
      }
      if (asset && bridgeType === "redeem" && protocolType === "brc20") {
        await redeemBrc20(
          amountRaw(String(amount), asset.decimals - asset.trimDecimals),
          asset,
          addressType,
          network
        );
      }
      if (asset && bridgeType === "redeem" && protocolType === "runes") {
        await redeemRunes(
          amountRaw(String(amount), asset.decimals - asset.trimDecimals),
          asset,
          addressType,
          network
        );
      }
      setSuccessVisible(true);
      await getBal();
    } catch (err) {
      console.log(err);
      message.error(err.message || "unknown error");
    }

    setSubmitting(false);
  };

  const mint = async () => {
    if (!btcAddress || !asset || !network || !AssetsInfo) return;

    try {
      setSubmitting(true);
      const addressInfo = determineAddressInfo(btcAddress);
      const addressType: SupportRedeemAddressType =
        addressInfo.toUpperCase() as SupportRedeemAddressType;
      if (bridgeType === "mint" && protocolType === "btc") {
        const ret = await mintBtc(
          amountRaw(String(amount), 8),
          asset,
          addressType,
          network,
          AssetsInfo
        );
      }
      if (inscription && bridgeType === "mint" && protocolType === "brc20") {
        const ret = await mintBrc(
          Number(inscription.amount),
          asset,
          addressType,
          network,
          AssetsInfo,
          inscription
        );
      }

      if (bridgeType === "mint" && protocolType === "runes") {
        const ret = await mintRunes(
          amount,
          asset,
          addressType,
          network,
          AssetsInfo
        );
      }
      setSuccessVisible(true);
      await getBal();
    } catch (err) {
      console.log(err);
      message.error(err.message || "unknown error");
    }

    setSubmitting(false);
  };
  const Inscribe = async () => {
    if (connected && asset) {
      await window.metaidwallet.btc.inscribeTransfer(asset?.originSymbol);
    }
  };
  const conditions = useMemo(() => {
    return [
      {
        condition: !amount,
        text: "Entry Amount",
        type: "primary",
        onClick: () => {},
      },
      {
        condition: Number(reciveAmount) < 0,
        text: "Low Send Amount",
        type: "primary",
        onClick: () => {},
      },
      {
        condition: ErrorMsg,
        text: ErrorMsg,
        type: "primary",
        onClick: () => {},
      },
    ];
  }, [ErrorMsg, amount]);
  const handleSubmit = () => {
    if (bridgeType === "mint") return mint();
    if (bridgeType === "redeem") return redeem();
  };
  const handleConfirm = () => {
    setConfirmProps({
      show: true,
      amount,
      reciveAmount: String(reciveAmount),
      minerFee: String(feeInfo.minerFee),
      bridgeFee: String(feeInfo.bridgeFee),
      totalFee: String(feeInfo.totalFee),
      handleSubmit,
      onClose: () => setConfirmProps(defalut),
    });
  };

  return (
    <div className="wrapPage">
      <Segmented
        defaultValue="btc"
        style={{ width: 520, maxWidth: "100vw", marginBottom: 32 }}
        onChange={(value) => {
          setProtocolType(value);
          setAmount("");
          setReciveAmount("");
        }}
        options={SegOptions}
        size="large"
        block
      />
      <Card
        style={{
          width: 520,
          maxWidth: "100vw",
          position: "relative",
          border: "2px solid #6e66fa",
          height: 666,
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
          <div className="chains">
            <div className="from chain">
              <div className="label">From</div>
              <Dropdown
                dropdownRender={() => (
                  <div
                    style={{ marginTop: -100, paddingTop: 100 }}
                    onMouseLeave={() => setChainType(undefined)}
                  >
                    <SelectNet
                      defalutChain={fromChain}
                      onChange={(chain) => {
                        handleChainChange("from", chain);
                        setChainType(undefined);
                      }}
                    />
                  </div>
                )}
                open={chainType === "from"}
              >
                <Button
                  type="text"
                  className="selectWrap"
                  style={{ background: colorBgBase, borderRadius }}
                  onClick={() => {
                    setChainType("from");
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <TokenIcon
                      size={30}
                      src={fromChain.icon}
                      symbol={fromChain.label}
                    />
                    <span style={{ margin: "0 10px 0 5px" }}>
                      {fromChain.label}
                    </span>
                    <div
                      className={
                        chainType == "from" ? "spanRotate" : "spanReset"
                      }
                    >
                      <DownOutlined />
                    </div>
                  </div>
                </Button>
              </Dropdown>
            </div>
            <img
              src={switchIcon}
              alt=""
              className="switchIcon"
              onClick={switchChain}
            />
            <div className="to chain">
              <div className="label">To</div>
              <Dropdown
                dropdownRender={() => (
                  <div
                    style={{ marginTop: -100, paddingTop: 100 }}
                    onMouseLeave={() => setChainType(undefined)}
                  >
                    <SelectNet
                      defalutChain={toChain}
                      onChange={(chain) => {
                        handleChainChange("to", chain);
                        setChainType(undefined);
                      }}
                    />
                  </div>
                )}
                open={chainType === "to"}
                placement="bottomLeft"
                autoAdjustOverflow={false}
              >
                <Button
                  type="text"
                  className="selectWrap"
                  style={{ background: colorBgBase, borderRadius }}
                  onClick={() => {
                    setChainType("to");
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <TokenIcon
                      size={30}
                      src={toChain.icon}
                      symbol={toChain.label}
                    />
                    <span style={{ margin: "0 10px 0 5px" }}>
                      {toChain.label}
                    </span>
                    <div
                      className={chainType == "to" ? "spanRotate" : "spanReset"}
                    >
                      <DownOutlined />
                    </div>
                  </div>
                </Button>
              </Dropdown>
            </div>
          </div>
          {asset && (
            <div className="assets">
              <div className="send inputCardWrap">
                <div className="label">
                  <span>You send</span>
                  {!(protocolType === "brc20" && bridgeType === "mint") && (
                    <Space>
                      <span
                        className="tag"
                        style={{
                          background: colorBgBase,
                          borderRadius: borderRadiusSM,
                        }}
                        onClick={() =>
                          onInputChange((sendBal * 0.25).toFixed(8))
                        }
                      >
                        25%
                      </span>
                      <span
                        className="tag"
                        style={{
                          background: colorBgBase,
                          borderRadius: borderRadiusSM,
                        }}
                        onClick={() =>
                          onInputChange((sendBal * 0.5).toFixed(8))
                        }
                      >
                        50%
                      </span>
                      <span
                        className="tag"
                        style={{
                          background: colorBgBase,
                          borderRadius: borderRadiusSM,
                        }}
                        onClick={() => onInputChange(sendBal)}
                      >
                        Max
                      </span>
                    </Space>
                  )}
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
                    open={selectAssetVisible == "send"}
                    placement="bottomLeft"
                    autoAdjustOverflow={false}
                  >
                    <div
                      onClick={() => {
                        setSelectAssetVisible("send");
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <Space style={{ height: 50 }}>
                        <TokenIcon
                          size={40}
                          src=""
                          symbol={asset.originSymbol}
                        />
                        {bridgeType === "mint" ? (
                          <div>{asset.originSymbol} </div>
                        ) : (
                          <div>{asset.targetSymbol} </div>
                        )}
                        <div
                          className={
                            selectAssetVisible == "send"
                              ? "spanRotate"
                              : "spanReset"
                          }
                        >
                          <DownOutlined />
                        </div>
                      </Space>
                    </div>
                  </Dropdown>
                  <div className="inputWrap">
                    {protocolType === "brc20" && bridgeType === "mint" ? (
                      <Spin spinning={loadingBrc20}>
                        <Flex wrap="wrap" gap="small" justify="flex-end">
                          {brc20Info && brc20Info.message && (
                            <Button
                              type="text"
                              onClick={() => setRefreshBrc20(!refreshBrc20)}
                            >
                              {brc20Info.message} <SyncOutlined />
                            </Button>
                          )}

                          {brc20Info &&
                            brc20Info.transferBalanceList.map((item) => (
                              <div
                                className={`brcItem ${
                                  inscription &&
                                  inscription.inscriptionId ===
                                    item.inscriptionId
                                    ? "active"
                                    : ""
                                }`}
                                onClick={() => {
                                  setInscription(item);
                                  onInputChange(item.amount);
                                }}
                                key={item.inscriptionId}
                              >
                                <span className="tick">
                                  {bridgeType === "mint" ? (
                                    <div>{asset.originSymbol} </div>
                                  ) : (
                                    <div>{asset.targetSymbol} </div>
                                  )}
                                </span>
                                <span className="amount">{item.amount}</span>
                                <span className="number">
                                  #{item.inscriptionNumber}
                                </span>
                              </div>
                            ))}
                          {brc20Info &&
                            brc20Info.transferBalanceList.length === 0 &&
                            !brc20Info.message && (
                              <div>
                                No transferable
                                <Button
                                  type="text"
                                  className="inscribeBtn"
                                  onClick={Inscribe}
                                  style={{ color: "#6E66FA" }}
                                  disabled={Number(brc20Info.balance) === 0}
                                >
                                  Inscribe
                                </Button>
                              </div>
                            )}
                        </Flex>
                      </Spin>
                    ) : (
                      <InputNumber
                        className="input"
                        onChange={onInputChange}
                        value={amount}
                        // max={sendBal}
                        variant={"borderless"}
                        controls={false}
                      />
                    )}
                  </div>
                </div>
                <div className="bal">
                  Balance:
                  <span> {loadingBrc20 ? "--" : sendBal} </span>
                  {bridgeType === "mint"
                    ? asset.originSymbol
                    : asset.targetSymbol}
                </div>
              </div>

              <div className="recive inputCardWrap">
                <div className="label">
                  <span>You recive</span>
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
                    open={selectAssetVisible == "recive"}
                    placement="bottomLeft"
                    autoAdjustOverflow={false}
                  >
                    <Space
                      onClick={() => {
                        setSelectAssetVisible("recive");
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <TokenIcon size={40} src="" symbol={asset.originSymbol} />
                      {bridgeType === "redeem" ? (
                        <div>{asset.originSymbol} </div>
                      ) : (
                        <div>{asset.targetSymbol} </div>
                      )}
                      <div
                        className={
                          selectAssetVisible == "recive"
                            ? "spanRotate"
                            : "spanReset"
                        }
                      >
                        {" "}
                        <DownOutlined />
                      </div>
                    </Space>
                  </Dropdown>

                  <div className="inputWrap">
                    <InputNumber
                      className="input"
                      onChange={onInputChange}
                      value={reciveAmount}
                      variant={"borderless"}
                      controls={false}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="submitWrap">
            <FormButton conditions={conditions} onClick={handleConfirm}>
              Bridge
            </FormButton>
          </div>

          <History
            show={historyVisible}
            onClose={() => setHistoryVisible(false)}
            protocolType={protocolType}
            bridgeType={bridgeType}
          />
        </Spin>
      </Card>

      <Summary {...confrimProps} submitting={submitting} />
      <SuccessModel
        show={successVisible}
        onClose={() => {
          setSuccessVisible(false);
          setAmount("");
          setReciveAmount("");
          setInscription(undefined);
          setConfirmProps(defalut);
        }}
      />
    </div>
  );
};
