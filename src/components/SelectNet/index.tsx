import Popup from "@/components/ResponPopup";
import "./index.less";
import { Button, Tag } from "antd";
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
        <div
          className={`item ${defalutChain?.key===item.key?'active':''}`}
         
          onClick={() => onChange(item)}
          key={item.key}
        >
          <TokenIcon src={item.icon} symbol={item.label} size={30} />
          <span className="name" style={{position:'relative'}}>{item.label}
          {item.key !== 'btc' && <Tag bordered={false} style={{borderRadius:6,fontSize:8,lineHeight:'12px',position:'absolute',left:0,bottom:-12,color:'#F7931A',background:'rgba(247, 147, 26, 0.2)'}}>Bitcoin sidechain</Tag>}
          </span>
        </div>
      ))}
    </div>
  );
};
