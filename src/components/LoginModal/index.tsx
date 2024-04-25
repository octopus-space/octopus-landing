import Popup from "@/components/ResponPopup";
import metalet from "@/assets/metalet.png";
import "./index.less";
import { Button, message } from "antd";
import { useModel } from "umi";
type Props = {
  show: boolean;
  onClose: () => void;
};
export default ({ show, onClose }: Props) => {
  const { connect } = useModel("wallet");
  const handleConnect = async () => {
    try {
      await connect();
      onClose();
    } catch (err:any) {
      message.error(err.message||'unknown error');
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
        <Button className="item" type="primary" onClick={handleConnect}block>
          <img src={metalet} alt="" className="icon" />
          <span>Metalet Wallet</span>
        </Button>
      </div>
    </Popup>
  );
};
