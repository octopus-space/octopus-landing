import Popup from "@/components/ResponPopup";
import "./index.less";
import { Button } from "antd";
import { useModel } from "umi";
import TokenIcon from "../TokenIcon";
import { Chain } from "@/models/wrapping";
type Props = {
  show: boolean;
  onClose: () => void;
  onChange: (chain: Chain) => void;
};
export default ({ show, onClose, onChange }: Props) => {
  const { chains } = useModel("wrapping");

  return (
    <Popup
      title="Select Network"
      modalWidth={390}
      show={show}
      onClose={onClose}
      closable
      bodyStyle={{ padding: "28px 25px" }}
      className="walletModal"
    >
      <div className="walletWrap">
        {chains.map((item) => (
          <Button
            className="item"
            type="primary"
            onClick={() => onChange(item)}
            key={item.key}
          >
            <TokenIcon src={item.icon} symbol={item.label} size={40} />
            <span>{item.label}</span>
          </Button>
        ))}
      </div>
    </Popup>
  );
};
