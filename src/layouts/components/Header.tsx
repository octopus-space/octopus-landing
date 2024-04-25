import logo from "@/assets/logo.svg";
import LoginModal from "@/components/LoginModal";
import { Button, Dropdown } from "antd";
import { useMemo } from "react";
import { useModel } from "umi";
import wrapping from "@/assets/wrapping.svg";
import mapping from "@/assets/mapping.svg";
import logoIcon from "@/assets/logoIcon.svg";
import exit from "@/assets/exit.svg";
export default () => {
  const {
    disConnect,
    btcAddress,
    loginModalShow,
    setLoginModalShow,
    connected,
  } = useModel("wallet");
  const showAddress = useMemo(() => {
    if (btcAddress) return btcAddress.replace(/(\w{5})\w+(\w{3})/, "$1...$2");
  }, [btcAddress]);
  return (
    <div className="header inside">
      <div className="headerwrap">
        <div className="left">
          <img src={logo} alt="" className="logo" />
          <div
            className="routes
        "
          >
            <div className="item">
              <img src={wrapping} alt="" />
              <div className="desc">
                <div className="title">Wrapping</div>
                <div className="subTitle">Smartcontrat Bridging</div>
              </div>
            </div>
            <div className="item disabled">
              <img src={mapping} alt="" />
              <div className="desc">
                <div className="title">Mapping</div>
                <div className="subTitle">Atomized Bridging</div>
              </div>
            </div>
          </div>
        </div>

        <div className="navWrap">
          {connected ? (
            <Dropdown
              dropdownRender={() => (
                <div className="walletInfo">
                  <Button
                    className={`item`}
                    type="primary"
                    //   onClick={() => onChange(item)}
                  >
                     <img src={logoIcon} alt="" />
                    <span className="name">{showAddress}</span>
                  </Button>
                  <Button
                    className={`item active`}
                    type="primary"
                    onClick={disConnect}
                  >
                    <img src={exit} alt="" />
                    <span className="name">Disconnect</span>
                  </Button>
                </div>
              )}
              placement='bottomRight'
            >
              <Button type="primary">{showAddress}</Button>
            </Dropdown>
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
