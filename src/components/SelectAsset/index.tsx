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
  type: "origin" | "target";
  onChange: (chain: API.AssetItem) => void;
};
export default ({ onChange, type }: Props) => {
  const { chains, assets, asset } = useModel("wrapping");
  const [searchWord, setSerachWord] = useState("");
  const [list, setList] = useState<API.AssetItem[]>([]);
  useEffect(() => {
    if (searchWord) {
      const _list = assets.filter(
        (item) =>
          item.targetName
            .toUpperCase()
            .includes(searchWord.trim().toUpperCase()) ||
          item.targetName
            .toUpperCase()
            .includes(searchWord.trim().toUpperCase())
      );
      setList(_list);
    } else {
      setList(assets);
    }
  }, [searchWord, assets]);
  return (
    <div className="selectAssetWrap">
      <div className="title">Select Asset</div>
      <div className="assetWrap">
        <div className="inputWrap">
          <Input
            placeholder="input symbol"
            onChange={(e) => setSerachWord(e.target.value)}
            allowClear
            variant="filled"
            size="large"
            suffix={<SearchOutlined />}
            style={{ height: 48 }}
          />
        </div>
        <div className="list">
          {list.map((item) => (
            <div
              className={`item ${
                asset?.originTokenId === item.originTokenId ? "selected" : ""
              }`}
              onClick={() => onChange(item)}
              key={item.targetTokenId}
            >
              <TokenIcon
                size={30}
                src=""
                symbol={
                  type === "origin" ? item.originName||item.originSymbol : item.targetName||item.targetSymbol
                }
              />

              <span className="symbol">
                {type === "origin" ? item.originName : item.targetName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
