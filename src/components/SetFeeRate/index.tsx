import React from "react";
import { Col, Divider, InputNumber, Row } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useModel } from "umi";
import Popup from "../ResponPopup";
import NumberFormat from "../NumberFormat";
import { FeeRatePlan, MAX_CUSTOM_BTC_FEE_RATE } from "@/utils/mempool";
import "./index.less";

const PlanIcon: React.FC<{ plan: FeeRatePlan }> = ({ plan }) => {
  if (plan === "Fast") {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2L4 14h7l-1 8 10-12h-7l0-8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (plan === "Avg") {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 7v5l3.5 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (plan === "Slow") {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3a9 9 0 109 9c0-4.97-4.03-9-9-9zm0 4v5h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7h16M4 17h16M8 4v6M16 14v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default () => {
  const {
    feeRate,
    feeRateType,
    feeRates,
    minFeeRate,
    customFeeRate,
    feeRateModalVisible,
    setFeeRateModalVisible,
    selectFeeRatePlan,
    updateCustomFeeRate,
    commitCustomFeeRate,
  } = useModel("wallet");

  return (
    <Popup
      show={feeRateModalVisible}
      onClose={() => setFeeRateModalVisible(false)}
      title="BTC Network Fee"
      closable={true}
      modalWidth={420}
    >
      <div className="octopusFeeModal">
        <div className="heroRate">
          <div className="curRate">
            <NumberFormat value={feeRate} suffix=" sat/vB" />
          </div>
          <div className="subNote">
            Applies to both directions · MVC fixed at 1 sat/B
          </div>
        </div>

        <Divider
          style={{ borderColor: "rgba(255,255,255,0.08)", margin: "12px 0" }}
        />

        <div className="sectionLabel">Select Speed</div>

        <Row gutter={[10, 10]}>
          {feeRates.map((item) => {
            const active = feeRateType === item.label;
            return (
              <Col
                span={24}
                key={item.label}
                onClick={() => selectFeeRatePlan(item.label)}
              >
                <div className={`planCard ${active ? "active" : ""}`}>
                  <div className="planMain">
                    <span className="planIcon">
                      <PlanIcon plan={item.label} />
                    </span>
                    <div className="planMeta">
                      <span className="planName">{item.label}</span>
                      <span className="planEta">{item.time}</span>
                    </div>
                  </div>
                  <div className="planRight">
                    <span className="planRate">{item.value} sat/vB</span>
                    <span className="planCheck">
                      <CheckOutlined />
                    </span>
                  </div>
                </div>
              </Col>
            );
          })}

          <Col span={24} onClick={() => selectFeeRatePlan("Custom")}>
            <div
              className={`planCard ${
                feeRateType === "Custom" ? "active" : ""
              }`}
            >
              <div className="planMain">
                <span className="planIcon">
                  <PlanIcon plan="Custom" />
                </span>
                <div className="planMeta">
                  <span className="planName">Custom</span>
                  <span className="planEta">Min {minFeeRate} sat/vB</span>
                </div>
              </div>
              <div
                className="planRight customRow"
                onClick={(e) => e.stopPropagation()}
              >
                <InputNumber
                  value={customFeeRate}
                  onFocus={() => selectFeeRatePlan("Custom")}
                  onChange={(val) => {
                    selectFeeRatePlan("Custom");
                    updateCustomFeeRate(val);
                  }}
                  onBlur={commitCustomFeeRate}
                  min={minFeeRate}
                  max={MAX_CUSTOM_BTC_FEE_RATE}
                  precision={0}
                  controls={false}
                  placeholder={String(minFeeRate)}
                  className="customRateInput"
                />
                <span className="unitText">sat/vB</span>
                <span className="planCheck">
                  <CheckOutlined />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Popup>
  );
};
