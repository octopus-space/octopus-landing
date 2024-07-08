import TokenIcon from "@/components/TokenIcon";
import btc from "@/assets/btc.png";
import metaid from "@/assets/metaid_b_y.png";
import BRC20 from "@/assets/brc20.png";
import arc20 from "@/assets/arc20.png";
import runes from "@/assets/runes.png";
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
        <TokenIcon symbol="BRC20" src={BRC20} size={28} />
        <span>BRC20</span>
      </div>
    ),
    value: "brc20",
  },
  {
    label: (
      <div style={{ padding: 4 }} className="SegmentedItem">
        <TokenIcon symbol="Runes" src={runes} size={28} />
        <span>Runes</span>
      </div>
    ),
    value: "runes",
    disabled: false,
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
  {
    label: (
      <div style={{ padding: 4 }} className="SegmentedItem">
        <TokenIcon symbol="BRC20" src={arc20} size={28} />
        <span>ARC20</span>
      </div>
    ),
    value: "arc20",
    disabled: true,
  },
  // {
  //   label: (
  //     <div style={{ padding: 4 }} className="SegmentedItem">
  //       <TokenIcon symbol="BRC20" src={arc20} size={28} />
  //       <span>ARC20</span>
  //     </div>
  //   ),
  //   value: "arc2012",
  //   disabled: true,
  // },
  // {
  //   label: (
  //     <div style={{ padding: 4 }} className="SegmentedItem">
  //       <TokenIcon symbol="BRC20" src={arc20} size={28} />
  //       <span>ARC20</span>
  //     </div>
  //   ),
  //   value: "arc201ee2",
  //   disabled: true,
  // },


];
