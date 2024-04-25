import Popup from "@/components/ResponPopup";
import { Tabs, TabsProps } from "antd";
import HistoryPanel from "./HistoryPanel";
type Props = {
  show: boolean;
  onClose: () => void;
};
export default ({ show, onClose }: Props) => {
  const items: TabsProps["items"] = [
    {
      key: "btcToMvc",
      label: "BTC",
      children: <HistoryPanel type="btcToMvc" />,
    },
    {
      key: "brc20ToMvc",
      label: "BRC20",
      children: <HistoryPanel type="brc20ToMvc" />,
    },
    {
      key: "mvcToBtc",
      label: "Redeem BTC",
      children: <HistoryPanel type="mvcToBtc" />,
    },
    {
      key: "mvcToBrc20",
      label: "Redeem BRC20",
      children: <HistoryPanel type="mvcToBrc20" />,
    },
  ];
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <Popup
      title="History"
      modalWidth={520}
      show={show}
      onClose={onClose}
      closable
      className="historyWrap"
    >
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </Popup>
  );
};
