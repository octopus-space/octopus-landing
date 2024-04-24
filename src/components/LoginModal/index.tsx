import Popup from "@/components/ResponPopup";
import metalet from "@/assets/metalet.png";
import "./index.less";
import { Button } from "antd";
import { useModel } from "umi";
type Props = {
  show: boolean;
  onClose: () => void;
};
export default ({ show, onClose }: Props) => {
  const { connect } = useModel("wallet");
  const handleConnect = async () => {
    await connect();
    onClose();
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
        <Button className="item" type="primary" onClick={handleConnect}>
          <img src={metalet} alt="" className="icon" />
          <span>Metalet Wallet</span>
        </Button>
      </div>
    </Popup>
  );
};
