import TokenIcon from "@/components/TokenIcon";
import btc from "@/assets/btc.png";
import metaid from "@/assets/metaid_b_y.png";
import { SegmentedOptions } from "antd/es/segmented";

export const SegOptions: SegmentedOptions<any> = [
  {
    label: (
      <div style={{ padding: 4, minWidth: 90 }} className="SegmentedItem">
        <TokenIcon symbol="btc" src={btc} size={28} />
        <span>BTC</span>
      </div>
    ),
    value: "btc",
  },
  {
    label: (
      <div style={{ padding: 4 }} className="SegmentedItem">
        <TokenIcon symbol="MRC20" src={metaid} size={28} />
        <span>MRC20</span>
      </div>
    ),
    value: "mrc20",
  },
];
