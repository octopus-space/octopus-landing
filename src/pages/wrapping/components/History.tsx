import Popup from "@/components/ResponPopup";
import { Segmented, Tabs, TabsProps } from "antd";
import HistoryPanel from "./HistoryPanel";
import { useEffect, useState } from "react";
import { Protocol } from "@/models/wrapping";

type Props = {
  show: boolean;
  onClose: () => void;
  protocolType: Protocol;
  bridgeType: "mint" | "redeem";
};

const MVC2BTCItems: TabsProps["items"] = [
  {
    key: "mvcToBtc",
    label: "BTC",
    children: <HistoryPanel type="mvcToBtc" />,
    destroyInactiveTabPane: true,
  },
  {
    key: "mvcToMrc20",
    label: "MRC-20",
    children: <HistoryPanel type="mvcToMrc20" />,
    destroyInactiveTabPane: true,
  },
];

const BTC2MVCItems: TabsProps["items"] = [
  {
    key: "btcToMvc",
    label: "BTC",
    children: <HistoryPanel type="btcToMvc" />,
    destroyInactiveTabPane: true,
  },
  {
    key: "mrc20ToMvc",
    label: "MRC-20",
    children: <HistoryPanel type="mrc20ToMvc" />,
    destroyInactiveTabPane: true,
  },
];

export default ({ show, onClose, protocolType, bridgeType }: Props) => {
  const [segmentedValue, setSegmentedValue] = useState<string>("BTC TO MVC");
  const [activeKey, setActiveKey] = useState<string>("btcToMvc");
  const [mvc2btcKey, setMvc2BtcKey] = useState<string>("mvcToBtc");

  useEffect(() => {
    if (bridgeType === "redeem") {
      setSegmentedValue("MVC TO BTC");
      setMvc2BtcKey(protocolType === "mrc20" ? "mvcToMrc20" : "mvcToBtc");
    } else {
      setSegmentedValue("BTC TO MVC");
      setActiveKey(protocolType === "mrc20" ? "mrc20ToMvc" : "btcToMvc");
    }
  }, [protocolType, bridgeType]);

  return (
    <Popup
      title="History"
      modalWidth={520}
      show={show}
      onClose={onClose}
      closable
      className="historyWrap"
    >
      <Segmented
        options={["BTC TO MVC", "MVC TO BTC"]}
        block
        value={segmentedValue}
        onChange={(value) => {
          setSegmentedValue(String(value));
        }}
      />
      {segmentedValue === "BTC TO MVC" ? (
        <Tabs
          activeKey={activeKey}
          items={BTC2MVCItems}
          onChange={setActiveKey}
        />
      ) : (
        <Tabs
          activeKey={mvc2btcKey}
          items={MVC2BTCItems}
          onChange={setMvc2BtcKey}
        />
      )}
    </Popup>
  );
};
