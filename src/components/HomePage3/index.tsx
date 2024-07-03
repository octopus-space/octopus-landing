import QueueAnim from "rc-queue-anim";
import { OverPack } from "rc-scroll-anim";

import { Row, Col } from "antd";
import doge from "@/assets/Dogecoin.png";
import btc from "@/assets/btc.png";
import mvc from "@/assets/mvc.png";
import lite from "@/assets/lite.png";
import bgCricle from "@/assets/bgCricle.svg";
import "./index.less";
type Item = {
  title: string;
  image: string;
};
export const page3: Item[] = [
  {
    title: "Bitcoin",

    image: btc,
  },
  {
    title: "Microvisionchain",

    image: mvc,
  },
  {
    title: "Doge",

    image: doge,
  },
  {
    title: "Litecoin",

    image: lite,
  },
];

function GetLi(num: number, d: Item, i: number) {
  const t = num + 1;
  if (i > t * 2 - 1 || i < num * 2) {
    return null;
  }
  return (
    <Col className="col" lg={12} md={24} key={i}>
      <div className="card">
      <img src={d.image} alt="" />
      <span>{d.title}</span>
      </div>
     
    </Col>
  );
}
export default () => {
  const children = [];
  for (let i = 0; i < Math.floor(page3.length / 2); i++) {
    children.push(
      <QueueAnim component={Row} type="bottom" key={i}  componentProps={{ gutter: [42,36], className: "cardwrap" }}>
        {page3
          .map((item, index) => GetLi(i, item, index))
          .filter((item) => item)}
      </QueueAnim>
    );
  }
  return (
    <OverPack id="page3" className="homePage3" replay playScale="50vh">
      <div className="bg1">
        <img src={bgCricle} alt="" />
      </div>
      <div className="bg3">Public Chain</div>
      <QueueAnim
        className="home2Case"
        type="bottom"
        key="home2Case"
        ease="easeOutQuart"
        leaveReverse
      >
        <p key="p1" className="p1">
          <span className="colorPrimary">Public Chain </span> Support
        </p>
        <p key="p2" className="p2">
          All Leading UTXO Chains Will Be Supported
        </p>
        {children}
      </QueueAnim>
    </OverPack>
  );
};
