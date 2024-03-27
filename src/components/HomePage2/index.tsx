import QueueAnim from "rc-queue-anim";
import { OverPack } from "rc-scroll-anim";

import { Row, Col } from "antd";
import metalet from "@/assets/metalet.png";
import orders from "@/assets/orders.png";
import mvcswap from "@/assets/mvcswap.png";
import bgSquare from "@/assets/bgSquare.svg";
import "./index.less";
export const page2 = [
  {
    title: "Metalet",
    subTitle: "One Wallet for All Bitcoin Ecosystems",
    url: "https://www.metalet.space",
    image: metalet,
  },
  {
    title: "Orders.Exchange",
    subTitle:
      "Orders.Exchange is a Decentralized Exchange for BRC-20 Totally built on Bitcoin",
    url: "https://www.orders.exchange",
    image: orders,
  },
  {
    title: "MVCSwap",
    subTitle:
      "Experience UTXO-Based DEX with Unmatched Security, Scalability, and Speed ",
    url: "https://mvcswap.com",
    image: mvcswap,
  },
];
export default () => {
  const children = page2.map((item, i) => {
    if (i > 2) {
      return <></>;
    }
    return (
      <Col key={i} className="col" lg={8} md={24}>
        <div className="card-content-wrapper home-hover">
          <div>
            <img src={item.image} alt={item.title} />
            <p className="title">{item.title}</p>
            <p className="subTitle">{item.subTitle}</p>
          </div>

          <a
            href={item.url}
            target="_blank"
            className={`button ${i === 1 ? "primary" : ""}`}
          >
            Details
          </a>
        </div>
      </Col>
    );
  });
  return (
    <OverPack id="page2" className="homePage2" replay playScale="50vh">
      <div className="bg1">
        <img src={bgSquare} alt="" />
      </div>
      <div className="bg2">
        <img src={bgSquare} alt="" />
      </div>
      <div className="bg3">Ecosystem</div>
      <QueueAnim
        className="home2Case"
        type="bottom"
        key="home2Case"
        ease="easeOutQuart"
        leaveReverse
      >
        <p key="p1" className="p1">
          <span className="colorPrimary">Ecosystem</span> Support
        </p>
        <p key="p2" className="p2">
          Support different Ecosystems
        </p>
        <QueueAnim
          key="content"
          component={Row}
          type="bottom"
          componentProps={{ gutter: 35, className: "cardwrap" }}
        >
          {children}
        </QueueAnim>
      </QueueAnim>
    </OverPack>
  );
};
