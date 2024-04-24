import logo from "@/assets/logo.svg";
import LoginModal from "@/components/LoginModal";
import { Button } from "antd";
import { useMemo } from "react";
import { useModel } from "umi";
export default () => {
  const { disConnect, btcAddress, loginModalShow, setLoginModalShow, connected } =
    useModel("wallet");
  const showAddress = useMemo(() => {
    if (btcAddress) return btcAddress.replace(/(\w{5})\w+(\w{3})/, "$1...$2");
  }, [btcAddress]);
  return (
    <div className="header">
      <div className="headerwrap">
        <img src={logo} alt="" className="logo" />
        <div className="navWrap">
          {connected ? (
            <Button type="primary" onClick={disConnect}>
              {showAddress}
            </Button>
          ) : (
            <Button type="primary" onClick={() => setLoginModalShow(true)}>
              Connect
            </Button>
          )}
        </div>
      </div>
      <LoginModal
        show={loginModalShow}
        onClose={() => setLoginModalShow(false)}
      />
    </div>
  );
};
