import Popup from "@/components/ResponPopup";
import "./index.less";
import { Avatar, Button, Input } from "antd";
import { useModel } from "umi";
import TokenIcon from "../TokenIcon";
import { Chain } from "@/models/wrapping";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
const { Search } = Input;
type Props = {
  show: boolean;
  onClose: () => void;
  onChange: (chain: API.AssetItem) => void;
};
export default ({ show, onClose, onChange }: Props) => {
  const { chains, assets, asset } = useModel("wrapping");
  const [searchWord, setSerachWord] = useState('');
  const [list, setList] = useState<API.AssetItem[]>([]);
  useEffect(()=>{
    if(searchWord){
      const _list =assets.filter(item => item.targetSymbol.toUpperCase().includes(searchWord.trim().toUpperCase())||item.originSymbol.toUpperCase().includes(searchWord.trim().toUpperCase()));
      setList(_list)
    }else{
      setList(assets)
    }
  },[searchWord,assets])
  return (
    <Popup
      title="Select Asset"
      modalWidth={390}
      show={show}
      onClose={onClose}
      closable
      bodyStyle={{ padding: "28px 25px" }}
      className="walletModal"
    >
      <div className="assetWrap">
        <Input
          placeholder="input symbol"
          onChange={(e) => setSerachWord(e.target.value)}
          allowClear
          variant="filled"
          size='large'
          suffix={<SearchOutlined/>}
        />
        {list.map((item) => (
          <Button
            className={`item ${
              asset?.originTokenId === item.originTokenId ? "selected" : ""
            }`}
            type="primary"
            onClick={() => onChange(item)}
            key={item.targetTokenId}
          >
            <Avatar.Group>
              <Avatar style={{ backgroundColor: "#000" }}>
                {item.originSymbol[0].toUpperCase()}
              </Avatar>
              <Avatar style={{ backgroundColor: "#000" }}>
                {item.targetSymbol[0].toUpperCase()}
              </Avatar>
            </Avatar.Group>

            <span className="symbol">
              {item.originSymbol}-{item.targetSymbol}
            </span>
          </Button>
        ))}
      </div>
    </Popup>
  );
};
