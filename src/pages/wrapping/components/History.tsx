import Popup from "@/components/ResponPopup";
import { Tabs, TabsProps } from "antd";
import HistoryPanel from "./HistoryPanel";
import { useEffect, useMemo, useState } from "react";
import { Protocol } from "@/models/wrapping";
type Props = {
  show: boolean;
  onClose: () => void;
  protocolType: Protocol;
  bridgeType: "mint" | "redeem";
};

const items: TabsProps["items"] = [
  {
    key: "btcToMvc",
    label: "BTC",
    children: <HistoryPanel type="btcToMvc" />,
    destroyInactiveTabPane:true
  },
  {
    key: "brc20ToMvc",
    label: "BRC20",
    children: <HistoryPanel type="brc20ToMvc" />,
    destroyInactiveTabPane:true
  },
  {
    key: "runesToMvc",
    label: "RUNES",
    children: <HistoryPanel type="runesToMvc" />,
    destroyInactiveTabPane:true
  },
  {
    key: "mrc20ToMvc",
    label: "MRC-20",
    children: <HistoryPanel type="mrc20ToMvc" />,
    destroyInactiveTabPane:true
  },
  {
    key: "mvcToBtc",
    label: "Redeem BTC",
    children: <HistoryPanel type="mvcToBtc" />,
    destroyInactiveTabPane:true
  },
  {
    key: "mvcToBrc20",
    label: "Redeem BRC20",
    children: <HistoryPanel type="mvcToBrc20" />,
    destroyInactiveTabPane:true
  },
  {
    key: "mvcToRunes",
    label: "Redeem RUNES",
    children: <HistoryPanel type="mvcToRunes" />,
    destroyInactiveTabPane:true
  },
  {
    key: "mvcToMrc20",
    label: "Redeem MRC-20",
    children: <HistoryPanel type="mvcToMrc20" />,
    destroyInactiveTabPane:true
  },
];
export default ({ show, onClose, protocolType, bridgeType }: Props) => {
  const [activeKey, setActiveKey] = useState<string>("btcToMvc");
  const onChange = (key: string) => {
    setActiveKey(key);
  };
  useEffect(() => {
    let key = "";
    if (bridgeType === "redeem") {
      key += "mvcTo";
      if (protocolType === "btc") {
        key += "Btc";
      }
      if (protocolType === "brc20") {
        key += "Brc20";
      }
      if (protocolType === "runes") {
        key += "Runes";
      }
      if (protocolType === "mrc20") {
        key += "Mrc20";
      }
    }

    if (bridgeType === "mint") {
      key += protocolType;
      key += "ToMvc";
    }
    setActiveKey(key);
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
      <Tabs activeKey={activeKey} items={items} onChange={onChange} />
    </Popup>
  );
};
