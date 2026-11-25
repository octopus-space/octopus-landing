import Popup from "@/components/ResponPopup";
import metalet from "@/assets/metalet.png";
import "./index.less";
import { Button, message } from "antd";
import { useEffect, useState } from "react";
import { useModel } from "umi";

type Props = {
  show: boolean;
  onClose: () => void;
};

export default ({ show, onClose }: Props) => {
  const { connect, connected } = useModel("wallet");
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    if (connected && show) {
      onClose();
    }
  }, [connected, show, onClose]);

  const handleConnect = async () => {
    if (connecting) return;
    setConnecting(true);
    try {
      await connect();
      onClose();
    } catch (err: any) {
      if (err?.message && err.message !== "canceled") {
        message.error(err.message || "unknown error");
      }
    } finally {
      setConnecting(false);
    }
  };

  return (
    <Popup
      title="Connect Wallet"
      modalWidth={390}
      show={show}
      onClose={onClose}
      closable
      bodyStyle={{ padding: "28px 25px" }}
      className="walletModal"
    >
      <div className="walletWrap">
        <Button
          className="item"
          type="primary"
          onClick={handleConnect}
          loading={connecting}
          block
        >
          <img src={metalet} alt="" className="icon" />
          <span>Metalet Wallet</span>
        </Button>
      </div>
    </Popup>
  );
};
