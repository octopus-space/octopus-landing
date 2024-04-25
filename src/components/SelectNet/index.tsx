import Popup from "@/components/ResponPopup";
import "./index.less";
import { Button } from "antd";
import { useModel } from "umi";
import TokenIcon from "../TokenIcon";
import { Chain } from "@/models/wrapping";
type Props = {
  defalutChain:Chain|undefined
  onChange: (chain: Chain) => void;
};
export default ({  onChange,defalutChain }: Props) => {
  const { chains } = useModel("wrapping");

  return (
    <div className="selectNetWrap">
      {chains.map((item) => (
        <Button
          className={`item ${defalutChain?.key===item.key?'active':''}`}
          type="primary"
          onClick={() => onChange(item)}
          key={item.key}
        >
          <TokenIcon src={item.icon} symbol={item.label} size={30} />
          <span className="name">{item.label}</span>
        </Button>
      ))}
    </div>
  );
};
