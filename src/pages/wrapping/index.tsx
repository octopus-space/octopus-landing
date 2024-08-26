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
  Grid,
  Alert
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useCallback, useEffect, useMemo, useState } from "react";
import "./index.less";
import { useModel } from "umi";
import historyIcon from "@/assets/history.svg";
import {
  FeeInfo,
  amountRaw,
  calcMintInfo,
  calcRedeemInfo,
  calculateQuantityLimitRange,
  determineAddressInfo,
} from "@/utils/utils";
import History from "./components/History";
import FormButton from "@/components/FormButton";
import { SegOptions } from "./components/Options";
import {
  SupportRedeemAddressType,
  mintBrc,
  mintBtc,
  mintMrc20,
  mintRunes,
  redeemBrc20,
  redeemBtc,
  redeemMrc20,
  redeemRunes,
  supportRedeemAddressType,
} from "@/servies/wrapping";
import { getUserBRC20, getUserMrc20Balance, getUserMrc20Balances, getUserRunesBalance } from "@/servies/api";
import SelectAsset from "@/components/SelectAsset";
import Summary, { ConfirmProps } from "./components/Summary";
import SuccessModel from "@/components/SuccessModel";
import SwitchChain from "./components/SwitchChain";
import MintBrc20Input from "./components/MintBrc20Input";
import InputToken from "./components/InputToken";
import NumberFormat from "@/components/NumberFormat";
import { checkWalletAddress } from "@/utils/psbtBuild";
const defalut: ConfirmProps = {
  show: false,
  amount: "",
  reciveAmount: "",
  bridgeFee: "",
  totalFee: "",
  minerFee: "",
  handleSubmit: async () => { },
  onClose: () => { },
};
const { useBreakpoint } = Grid;
export default () => {
  const {
    token: { colorBgBase, borderRadius, borderRadiusSM },
  } = theme.useToken();
  const screens = useBreakpoint();
  const [historyVisible, setHistoryVisible] = useState<boolean>(false);

  const { userBal, connected, btcAddress, network, getBal } =
    useModel("wallet");
  const {
    fromChain,
    asset,
    protocolType,
    AssetsInfo,
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
    brc20Info,
    setBrc20Info,
    runesInfo,
    setRunesInfo,
    inscription,
    setInscription,
    mrc20Info, setMrc20Info
  } = useModel("wrapping");
  const [selectAssetVisible, setSelectAssetVisible] = useState<
    "send" | "recive"
  >();
  const [successVisible, setSuccessVisible] = useState(false);



  const [refreshInput, setRefreshInput] = useState<boolean>(false);
  const [confrimProps, setConfirmProps] = useState<ConfirmProps>(defalut);
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
    if (!asset) return 0;
    if (bridgeType === 'redeem') {
      return userBal[asset.targetTokenGenesis] || "0";
    }
    switch (protocolType) {
      case "btc": return userBal["btc"] || "0";
      case "brc20": return (brc20Info && brc20Info.balance) || "--";
      case "runes": return runesInfo ? Number(
        (
          Number(runesInfo.amount) /
          10 ** Number(runesInfo.divisibility)
        ).toFixed(2)
      ) : '--';
      // case "mrc20": return mrc20Info ? mrc20Info.reduce((a, b) => {
      //   return a + b.mrc20s.reduce((c, d) => {
      //     return c + Number(d.amount)
      //   }, 0)
      // }, 0) : "--";
      case "mrc20": {
        const find = mrc20Info?.find((item) => item.mrc20Id === asset?.originTokenId)
        if (find) {
          return find.balance
        } else {
          return '0'
        }
      }
    }

  }, [protocolType, bridgeType, asset, userBal, brc20Info, runesInfo, mrc20Info]);

  const actionType = useMemo(() => {
    return bridgeType + protocolType
  }, [bridgeType, protocolType])

  const onInputChange = (value: string | number | null) => {
    if (!value) return
    setAmount(value);
    if (AssetsInfo && asset) {
      let info: FeeInfo;
      try {
        if (bridgeType === 'mint') {
          info = calcMintInfo(Number(value), AssetsInfo, asset)
        } else {
          info = calcRedeemInfo(Number(value), AssetsInfo, asset)
        }
        if (Number(info.receiveAmount) < 0) {
          throw new Error("low send amount");
        }
        setErrorMsg("");
        setReciveAmount(info.receiveAmount);
        setFeeInfo(info);
      } catch (err: any) {
        console.log(err);
        setReciveAmount("");
        setErrorMsg(err.message || "unknown error");
      }
    }
  };
  const brc20OriginSymbol = useMemo(() => {
    if (asset && asset.network == 'BRC20' && asset.originSymbol) {
      return asset.originSymbol
    }
  }, [asset])

  const runesOriginTokenId = useMemo(() => {
    if (asset && asset.network == 'RUNES' && asset.originTokenId) {
      return asset.originTokenId
    }
  }, [asset])

  const mrc20OriginTokenId = useMemo(() => {
    if (asset && asset.network == 'MRC20' && asset.originTokenId) {
      return asset.originTokenId
    }
  }, [asset])

  useEffect(() => {
    let didCancel = false;
    const fetch = async () => {
      if (!network || !btcAddress) return
      if (actionType === 'mintbrc20' && brc20OriginSymbol) {
        setLoadingInput(true);
        const ret = await getUserBRC20(network, {
          address: btcAddress,
          tick: brc20OriginSymbol,
        });
        if (didCancel) return;
        setBrc20Info(
          ret.data || {
            message: ret.message,
            balance: "0",
            transferBalanceList: [],
          }
        );
        setLoadingInput(false);
      }

      if (
        actionType === 'mintrunes' && runesOriginTokenId
      ) {
        setLoadingInput(true);
        const ret = await getUserRunesBalance(
          btcAddress,
          network,
          runesOriginTokenId
        );
        if (didCancel) return;
        setRunesInfo(ret.data);
        setLoadingInput(false);
      }

      if (actionType === 'mintmrc20' && mrc20OriginTokenId) {
        setLoadingInput(true);
        let list: API.Mrc20BalItem[] = [];
        for (let i = 0; i < 10; i++) {
          const ret = await getUserMrc20Balances(btcAddress, network, i, 50);
          if (ret.code === 0) {
            list = [...list, ...ret.data.list];
            if (ret.data.list.length < 50) break;
          }
        }

        if (didCancel) return;
        setMrc20Info(list);
        setLoadingInput(false);
      }
    };
    fetch();
    return () => {
      didCancel = true;
    };
  }, [actionType, brc20OriginSymbol, runesOriginTokenId, network, btcAddress, refreshInput, mrc20OriginTokenId]);

  const inputRange = useMemo(() => {
    let minAmount = 0;
    let maxAmount = 0;
    if (AssetsInfo && asset) {
      try{
        [minAmount, maxAmount] = calculateQuantityLimitRange(AssetsInfo, asset)
      }catch(err){

      }
      
    }
    return {
      maxAmount,
      minAmount
    }
  }, [asset, actionType, AssetsInfo]);



  const redeem = async () => {
    if (!btcAddress || !asset || !network) return;

    try {
      setSubmitting(true);
      const { status, message } = await checkWalletAddress(btcAddress);
      if (!status) throw new Error(message)
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
      if (asset && bridgeType === "redeem" && protocolType === "mrc20") {
        await redeemMrc20(
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
      const { status, message } = await checkWalletAddress(btcAddress);
      if (!status) throw new Error(message)
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

      if (actionType === 'mintmrc20') {
        const ret = await mintMrc20(
          Number(amount),
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

  const conditions = useMemo(() => {
    return [
      {
        condition: !amount,
        text: "Enter Amount",
        type: "primary",
        onClick: () => { },
      },
      {
        condition: Number(reciveAmount) < 0,
        text: "Low Send Amount",
        type: "primary",
        onClick: () => { },
      },
      {
        condition: ErrorMsg,
        text: ErrorMsg,
        type: "primary",
        onClick: () => { },
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

  const balCheck = useMemo(() => {
    if (Number(amount) > Number(sendBal)) {
      return 'Insufficient balance.'
    }
    return ''
  }, [amount, sendBal])



  return (
    <div className="wrapPage">
      <Segmented
        style={{ width: 520, maxWidth: "92vw", marginBottom: 32, overflow: 'scroll' }}
        onChange={(value) => {
          setProtocolType(value);
          setAmount("");
          setReciveAmount("");
        }}
        options={SegOptions}
        size={screens.xs ? 'middle' : "large"}
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
                  {actionType !== 'mintbrc20' && (
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
                      className="tokenInputWrap"
                    >
                      <InputToken asset={asset} position="send" bridgeType={bridgeType} />


                      <div
                        className={
                          selectAssetVisible == "send"
                            ? "spanRotate"
                            : "spanReset"
                        }
                      >
                        <DownOutlined />
                      </div>

                    </div>
                  </Dropdown>
                  <div className="inputWrap">
                    {actionType === 'mintbrc20' ? (
                      <MintBrc20Input onInputChange={onInputChange} loading={loadingInput} refresh={() => { setRefreshInput(prev => !prev) }} />
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
                  <span> {loadingInput ? "..." : sendBal} </span>
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
                    <div
                      onClick={() => {
                        setSelectAssetVisible("recive");
                      }}
                      style={{ cursor: "pointer" }}
                      className="tokenInputWrap"
                    >
                      <InputToken asset={asset} position="recive" bridgeType={bridgeType} />
                      <div
                        className={
                          selectAssetVisible == "recive"
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
          {
            asset && <div className="range">
              <div className="item">
                <span className="label">Minimum Bridging Quantity</span>
                <span className="value"><NumberFormat value={inputRange.minAmount} precision={bridgeType === 'mint' ? asset.decimals : asset.decimals - asset.trimDecimals} />   {bridgeType === "mint"
                  ? asset.originSymbol
                  : asset.targetSymbol}</span>
              </div>
              <div className="item">
                <span className="label">Maximum Bridging Quantity</span>
                <span className="value"><NumberFormat value={inputRange.maxAmount} precision={bridgeType === 'mint' ? asset.decimals : asset.decimals - asset.trimDecimals} />   {bridgeType === "mint"
                  ? asset.originSymbol
                  : asset.targetSymbol}</span>
              </div>



            </div>
          }
          {
            balCheck && <Alert message={balCheck} type='warning' style={{ marginTop: 20 }} showIcon />
          }
          {
            ErrorMsg && <Alert message={ErrorMsg} type="warning" style={{ marginTop: 20 }} showIcon />
          }
          {asset && <div className="submitWrap">
            <FormButton conditions={conditions} onClick={handleConfirm}>
              Bridge
            </FormButton>
          </div>}



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
