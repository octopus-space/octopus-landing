import Popup from "@/components/ResponPopup";
import metalet from "@/assets/metalet.png";
import "./index.less";
import { Button } from "antd";
import checked  from '@/assets/check-fill.svg'
type Props = {
  show: boolean;
  onClose: () => void;
};
export default ({ show, onClose }: Props) => {
  return (
    <Popup
      title=""
      modalWidth={390}
      show={show}
      onClose={onClose}
      closable={false}
      bodyStyle={{ padding: "28px 25px" }}
      className="successModal"
    >
      <div className="successWrap">
        <img src={checked} alt="" className="icon" />
        <span className="desc">Success</span>
        <Button className="item" type="primary" onClick={onClose} style={{width: 324,
height: 68}}>
          OK
        </Button>
      </div>
    </Popup>
  );
};
