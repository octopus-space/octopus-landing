import Popup from "@/components/ResponPopup";
import { Spin, Tabs, TabsProps } from "antd";
import HistoryPanel from "./HistoryPanel";
import TokenIcon from "@/components/TokenIcon";
import { useModel } from "umi";
import "./index.less";
import arrow from "@/assets/arrowRight.svg";
import FormButton from "@/components/FormButton";
export type ConfirmProps = {
  show: boolean;
  onClose: () => void;
  amount: string | number;
  reciveAmount: string;
  bridgeFee: string;
  totalFee: string;
  minerFee: string;
  handleSubmit: () => void;
  submitting?: boolean;
};
export default ({
  show,
  onClose,
  amount = "0",
  reciveAmount = "0",
  bridgeFee = "0",
  totalFee = "0",
  minerFee = "0",
  handleSubmit,
  submitting = false,
}: ConfirmProps) => {
  const { asset, fromChain, toChain } = useModel("wrapping");
  if (!asset) return;
  return (
    <Popup
      title="Summary"
      modalWidth={520}
      show={show}
      onClose={onClose}
      closable
    >
      <Spin spinning={submitting}>
        <div className="summaryWrap">
          <TokenIcon symbol={asset?.originName||asset?.originSymbol} src="" size={80}></TokenIcon>
          <span className="symbol">
            {asset.originName||asset.originSymbol}-{asset.targetName||asset.targetSymbol}
          </span>
          <div className="netWrap">
            <div className="item">
              <div className="amount">{amount}</div>
              <div className="chain">
                <TokenIcon
                  size={16}
                  src={fromChain.icon}
                  symbol={fromChain.label}
                />
                <span>{fromChain.label}</span>
              </div>
            </div>
            <img src={arrow} alt="" className="arrow" />
            <div className="item">
              <div className="amount">{reciveAmount}</div>
              <div className="chain">
                <TokenIcon
                  size={16}
                  src={toChain.icon}
                  symbol={toChain.label}
                />
                <span>{toChain.label}</span>
              </div>
            </div>
          </div>
          <div className="feeList">
            <div className="item">
              <span className="label">Service Fee</span>
              <span className="value">{bridgeFee}{fromChain.key === "btc"
                      ? asset.originSymbol
                      : asset.targetSymbol}</span>
            </div>
            <div className="item">
              <span className="label">Network Fee</span>
              <span className="value">{minerFee}{fromChain.key === "btc"
                      ? asset.originSymbol
                      : asset.targetSymbol}</span>
            </div>
            <div className="item">
              <span className="label">Total Fee</span>
              <span className="value">{totalFee}{fromChain.key === "btc"
                      ? asset.originSymbol
                      : asset.targetSymbol}</span>
            </div>
            <div className="item">
              <span className="label">Estimated Receipt Time</span>
              <span className="value">20 minutes </span>
            </div>
          </div>
          <div className="submitWrap">
            <FormButton conditions={[]} onClick={handleSubmit}>
              Confirm bridge
            </FormButton>
          </div>
        </div>
      </Spin>
    </Popup>
  );
};
