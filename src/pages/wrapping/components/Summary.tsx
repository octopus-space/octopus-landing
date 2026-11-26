import Popup from "@/components/ResponPopup";
import { Spin, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import TokenIcon from "@/components/TokenIcon";
import { useModel } from "umi";
import "./index.less";
import arrow from "@/assets/arrowRight.svg";
import FormButton from "@/components/FormButton";
import { FeeBreakdownItem } from "@/utils/utils";

export type ConfirmProps = {
  show: boolean;
  onClose: () => void;
  amount: string | number;
  reciveAmount: string;
  bridgeFee: string;
  totalFee: string;
  minerFee: string;
  serviceFeeTooltip?: string;
  minerFeeBreakdown?: FeeBreakdownItem[];
  handleSubmit: () => void;
  submitting?: boolean;
};

export const MinerFeeBreakdownOverlay = ({
  items,
  total,
}: {
  items: FeeBreakdownItem[];
  total: string;
}) => (
  <div className="minerFeeTooltipContent">
    <div className="tooltipHeader">Network Miner Fee &amp; Postage Breakdown</div>
    <div className="tooltipRows">
      {items.map((row) => (
        <div className="tooltipRow" key={row.label}>
          <span className="tooltipRowLabel">{row.label}</span>
          <span className="tooltipRowVal">
            {row.value}
            {row.sub ? <span className="tooltipRowSub"> ({row.sub})</span> : null}
          </span>
        </div>
      ))}
    </div>
    <div className="tooltipFooter">
      <span>Est. Miner &amp; Postage Total</span>
      <span>{total}</span>
    </div>
  </div>
);

export default ({
  show,
  onClose,
  amount = "0",
  reciveAmount = "0",
  bridgeFee = "0",
  totalFee = "0",
  minerFee = "0",
  serviceFeeTooltip,
  minerFeeBreakdown,
  handleSubmit,
  submitting = false,
}: ConfirmProps) => {
  const { asset, fromChain, toChain } = useModel("wrapping");
  const { feeRate, feeRateType } = useModel("wallet");
  if (!asset) return null;
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
          <TokenIcon
            symbol={asset?.originName || asset?.originSymbol}
            src=""
            size={80}
          />
          <span className="symbol">
            {asset.originName || asset.originSymbol}-
            {asset.targetName || asset.targetSymbol}
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
              <span className="label">Token Deduction</span>
              <span className="value">0 (1:1 Full Arrival)</span>
            </div>
            <div className="item">
              <span className="label">Network Fee Rate</span>
              <span className="value">
                BTC {feeRate} sat/vB · MVC 1 sat/B
              </span>
            </div>
            <div className="item">
              <span className="label feeLabelWithHelp">
                Bridge Service Fee
                {serviceFeeTooltip ? (
                  <Tooltip
                    trigger={["hover", "click"]}
                    title={serviceFeeTooltip}
                    overlayInnerStyle={{
                      maxWidth: "min(330px, calc(100vw - 24px))",
                      background: "#14124a",
                      border: "1px solid rgba(110, 102, 250, 0.45)",
                      fontSize: 12,
                    }}
                  >
                    <QuestionCircleOutlined className="feeHelpIcon" />
                  </Tooltip>
                ) : null}
              </span>
              <span className="value">{bridgeFee}</span>
            </div>
            <div className="item">
              <span className="label feeLabelWithHelp">
                Est. Miner Fee
                {minerFeeBreakdown && minerFeeBreakdown.length > 0 ? (
                  <Tooltip
                    trigger={["hover", "click"]}
                    title={
                      <MinerFeeBreakdownOverlay
                        items={minerFeeBreakdown}
                        total={minerFee}
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
                ) : null}
              </span>
              <span className="value">{minerFee}</span>
            </div>
            <div className="item">
              <span className="label">Est. Total Outlay</span>
              <span className="value">{totalFee}</span>
            </div>
            <div className="item">
              <span className="label">Estimated Receipt Time</span>
              <span className="value">~20 minutes</span>
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
