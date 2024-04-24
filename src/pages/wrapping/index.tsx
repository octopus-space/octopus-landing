import {
  Button,
  Card,
  Flex,
  InputNumber,
  Segmented,
  Select,
  Space,
  Spin,
  Tabs,
  TabsProps,
  message,
  theme,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useCallback, useEffect, useMemo, useState } from "react";
import "./index.less";
import { useModel } from "umi";
import switchIcon from "@/assets/switch.svg";
import historyIcon from "@/assets/history.svg";
import {
  amountRaw,
  calcMintBrc20Info,
  calcMintBtcInfo,
  calcRedeemBrc20Info,
  calcRedeemBtcInfo,
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
  redeemBrc20,
  redeemBtc,
  supportRedeemAddressType,
} from "@/servies/warpping";
import { getUserBRC20 } from "@/servies/api";
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

  const { userBal, connected, btcAddress, network } = useModel("wallet");
  const [amount, setAmount] = useState<number | string>("");
  const [reciveAmount, setReciveAmount] = useState<number | string>("");
  const [selectChainVisible, setSelectChainVisible] = useState(false);
  const [selectAssetVisible, setSelectAssetVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [chainType, setChainType] = useState<"from" | "to">();

  const [brc20Info, setBrc20Info] = useState<API.BRC20Info>();
  const [inscription, setInscription] = useState<API.TransferbleBRC20>();
  const [confrimProps, setConfirmProps] = useState<ConfirmProps>(defalut);
  const [loadingBrc20, setLoadingBrc20] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
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
  };
  const handleHistory = () => {
    if (connected) {
      setHistoryVisible(true);
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
    }
  }, [protocolType, bridgeType, asset, userBal]);

  const onInputChange = (value) => {
    setAmount(value);
    if (AssetsInfo && protocolType === "btc" && bridgeType === "redeem") {
      try {
        const info = calcRedeemBtcInfo(amountRaw(value, 8), AssetsInfo);
        setErrorMsg("");
        setReciveAmount(formatSat(info.receiveAmount));
      } catch (err) {
        console.log(err);
        message.error(err.message || "unknown error");
        setErrorMsg(err.message || "unknown error");
      }
    }
    if (
      AssetsInfo &&
      asset &&
      protocolType === "brc20" &&
      bridgeType === "redeem"
    ) {
      try {
        const info = calcRedeemBrc20Info(
          amountRaw(value, asset?.decimals),
          AssetsInfo,
          asset
        );
        setErrorMsg("");
        setReciveAmount(formatSat(info.receiveAmount));
      } catch (err) {
        console.log(err);
        message.error(err.message || "unknown error");
        setErrorMsg(err.message || "unknown error");
      }
    }
    if (AssetsInfo && protocolType === "btc" && bridgeType === "mint") {
      try {
        const info = calcMintBtcInfo(amountRaw(value, 8), AssetsInfo);
        setErrorMsg("");
        setReciveAmount(formatSat(info.receiveAmount));
      } catch (err) {
        console.log(err);
        message.error(err.message || "unknown error");
        setErrorMsg(err.message || "unknown error");
      }
    }

    if (
      AssetsInfo &&
      asset &&
      protocolType === "brc20" &&
      bridgeType === "mint"
    ) {
      try {
        const info = calcMintBrc20Info(value, AssetsInfo, asset);
        setErrorMsg("");
        setReciveAmount(info.receiveAmount);
      } catch (err) {
        console.log(err);
        message.error(err.message || "unknown error");
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
    };
    fetch();
    return () => {
      didCancel = true;
    };
  }, [protocolType, bridgeType, network, asset, btcAddress]);

  const handleChainChange = (chain: Chain) => {
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
    const addressInfo = determineAddressInfo(btcAddress);
    const addressType: SupportRedeemAddressType =
      addressInfo.toUpperCase() as SupportRedeemAddressType;

    try {
      if (!supportRedeemAddressType.includes(addressType)) {
        throw new Error("unsupport address type");
      }
      if (bridgeType === "redeem" && protocolType === "btc") {
        await redeemBtc(
          amountRaw(String(amount), 8),
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
    } catch (err) {
      console.log(err);
      message.error(err.message || "unknown error");
      setSuccessVisible(true)
    }
  };

  const mint = async () => {
    if (!btcAddress || !asset || !network || !AssetsInfo) return;

    const addressInfo = determineAddressInfo(btcAddress);
    const addressType: SupportRedeemAddressType =
      addressInfo.toUpperCase() as SupportRedeemAddressType;
    try {
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
    } catch (err) {
      console.log(err);
      message.error(err.message || "unknown error");
    }
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
      minerFee: "",
      bridgeFee: "",
      totalFee: "",
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
        }}
        options={SegOptions}
        size="large"
        block
      />
      <Card
        style={{ width: 520, maxWidth: "100vw", position: "relative" }}
        id="warapping"
      >
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
            <Button
              type="text"
              className="selectWrap"
              style={{ background: colorBgBase, borderRadius }}
              onClick={() => {
                setChainType("from");
                setSelectChainVisible(true);
              }}
            >
              <Space>
                <TokenIcon
                  size={30}
                  src={fromChain.icon}
                  symbol={fromChain.label}
                />
                <span>{fromChain.label}</span>
                <DownOutlined />
              </Space>
            </Button>
          </div>
          <img
            src={switchIcon}
            alt=""
            className="switchIcon"
            onClick={switchChain}
          />
          <div className="to chain">
            <div className="label">To</div>
            <Button
              type="text"
              className="selectWrap"
              style={{ background: colorBgBase, borderRadius }}
              onClick={() => {
                setChainType("to");
                setSelectChainVisible(true);
              }}
            >
              <Space>
                <TokenIcon
                  size={30}
                  src={toChain.icon}
                  symbol={toChain.label}
                />
                <span>{toChain.label}</span>
                <DownOutlined />
              </Space>
            </Button>
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
                      onClick={() => onInputChange(sendBal * 0.25)}
                    >
                      25%
                    </span>
                    <span
                      className="tag"
                      style={{
                        background: colorBgBase,
                        borderRadius: borderRadiusSM,
                      }}
                      onClick={() => onInputChange(sendBal * 0.5)}
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
                <div
                  onClick={() => {
                    setSelectAssetVisible(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Space>
                    <TokenIcon size={40} src="" symbol={asset.originSymbol} />
                    {bridgeType === "mint" ? (
                      <div>{asset.originSymbol} </div>
                    ) : (
                      <div>{asset.targetSymbol} </div>
                    )}
                    <DownOutlined />
                  </Space>
                </div>
                <div className="inputWrap">
                  {protocolType === "brc20" && bridgeType === "mint" ? (
                    <Spin spinning={loadingBrc20}>
                      <Flex
                        wrap="wrap"
                        gap="small"
                        justify="flex-end"
                        style={{ padding: "4px 0" }}
                      >
                        {brc20Info && brc20Info.message && brc20Info.message}
                        {brc20Info &&
                          brc20Info.transferBalanceList.map((item) => (
                            <div
                              className={`brcItem ${
                                inscription &&
                                inscription.inscriptionId === item.inscriptionId
                                  ? "active"
                                  : ""
                              }`}
                              onClick={() => {
                                setInscription(item);
                                onInputChange(item.amount);
                              }}
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
                              No transferable{" "}
                              <Button type="link" onClick={Inscribe}>
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
                      //   max={sendBal}
                      variant={"borderless"}
                      controls={false}
                    />
                  )}

                  <div className="bal">
                    Balance:
                    {protocolType === "brc20" && bridgeType === "mint"
                      ? brc20Info
                        ? brc20Info.balance
                        : "..."
                      : sendBal}
                    {bridgeType === "mint"
                      ? asset.originSymbol
                      : asset.targetSymbol}
                  </div>
                </div>
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
                <Space
                  onClick={() => {
                    setSelectAssetVisible(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <TokenIcon size={40} src="" symbol={asset.originSymbol} />
                  {bridgeType === "redeem" ? (
                    <div>{asset.originSymbol} </div>
                  ) : (
                    <div>{asset.targetSymbol} </div>
                  )}
                  <DownOutlined />
                </Space>

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
        />
      </Card>
      <SelectNet
        show={selectChainVisible}
        onClose={() => setSelectChainVisible(false)}
        onChange={handleChainChange}
      />

      <SelectAsset
        show={selectAssetVisible}
        onClose={() => setSelectAssetVisible(false)}
        onChange={(_asset) => {
          setAsset(_asset);
          setSelectAssetVisible(false);
        }}
      />
      <Summary {...confrimProps} />
      <SuccessModel
        show={successVisible}
        onClose={() => {
          setSuccessVisible(false);
        }}
      />
    </div>
  );
};
