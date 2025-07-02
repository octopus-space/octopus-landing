import Popup from "@/components/ResponPopup";
import { Segmented, Tabs, TabsProps } from "antd";
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
    key: "mvcToBtc",
    label: "BTC",
    children: <HistoryPanel type="mvcToBtc" />,
    destroyInactiveTabPane: true
  },
  {
    key: "mvcToMrc20",
    label: "MRC-20",
    children: <HistoryPanel type="mvcToMrc20" />,
    destroyInactiveTabPane: true
  },
  {
    key: "mvcToBrc20",
    label: "BRC20",
    children: <HistoryPanel type="mvcToBrc20" />,
    destroyInactiveTabPane: true
  },
  // {
  //   key: "mvcToRunes",
  //   label: "RUNES",
  //   children: <HistoryPanel type="mvcToRunes" />,
  //   destroyInactiveTabPane: true
  // },
  
];

const BTC2MVCItems: TabsProps["items"] = [
  {
    key: "btcToMvc",
    label: "BTC",
    children: <HistoryPanel type="btcToMvc" />,
    destroyInactiveTabPane: true
  },
  {
    key: "mrc20ToMvc",
    label: "MRC-20",
    children: <HistoryPanel type="mrc20ToMvc" />,
    destroyInactiveTabPane: true
  },
  {
    key: "brc20ToMvc",
    label: "BRC20",
    children: <HistoryPanel type="brc20ToMvc" />,
    destroyInactiveTabPane: true
  },
  // {
  //   key: "runesToMvc",
  //   label: "RUNES",
  //   children: <HistoryPanel type="runesToMvc" />,
  //   destroyInactiveTabPane: true
  // },
  
];
export default ({ show, onClose, protocolType, bridgeType }: Props) => {
  const [segmentedValue, setSegmentedValue] = useState<string>("BTC TO MVC");
  const [activeKey, setActiveKey] = useState<string>("btcToMvc");
  const [mvc2btcKey, setMvc2BtcKey] = useState<string>("mvcToBtc");
  const onChange = (key: string) => {
    setActiveKey(key);
  };
  const onChange2 = (key: string) => {
    setMvc2BtcKey(key);
  }
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
      setSegmentedValue("MVC TO BTC");
      setMvc2BtcKey(key);
    }

    if (bridgeType === "mint") {
      key += protocolType;
      key += "ToMvc";
      setSegmentedValue("BTC TO MVC");
      setActiveKey(key);
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
      <Segmented options={['BTC TO MVC', 'MVC TO BTC']} block value={segmentedValue} onChange={(value) => {
        setSegmentedValue(value);
      }} />
      {
        segmentedValue === 'BTC TO MVC' ?
          <Tabs activeKey={activeKey} items={BTC2MVCItems} onChange={onChange} /> :
          <Tabs activeKey={mvc2btcKey} items={items} onChange={onChange2} />
      }
    </Popup>
  );
};
