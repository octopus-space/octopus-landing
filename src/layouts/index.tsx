import { Link, Outlet, history, useLocation, useModel } from "umi";
import "./index.less";
import logo from "@/assets/logo.svg";
import Nav from "./components/Nav";
import { Alert, ConfigProvider, message, theme } from "antd";
import Header from "./components/Header";
const _themes = {
  token: {
    wireframe: false,
    colorText: "rgba(255, 255, 255, 1)",
    colorPrimary: "#6e66fa",
    colorInfo: "rgba(110, 102, 250, 0.32)",
    colorSuccess: "#6e66fa",
    colorWarning: "#f7931a",
    borderRadius: 8,
    colorBgBase: "#080731",
    fontFamily: "Montserrat",
  },
  components: {
    Segmented: {
      trackBg: "rgba(110, 102, 250, 0.32)",
      itemSelectedBg: "rgb(110, 102, 250)",
      fontSize: 13,
    },
    Card: {
      colorBgContainer: "#1A185F",
    },
    Modal: {
      contentBg: "#1b185d",
      headerBg: "#1b185d",
    },
    Input: {
      activeBorderColor: "rgb(110, 102, 250)",
      colorBgContainer: "rgb(8, 7, 49)",
    },
  },
};
export default function Layout() {
  const location = useLocation();
  const {network}=useModel('wallet')
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        ..._themes,
      }}
    >
      <Alert type="error" message="System upgrade in progress, expected to resume normal operation on Monday." banner showIcon={false} style={{ textAlign: 'center' }} />
      {network === 'testnet' && <Alert type="error" message="This is a test network. Coins have no value." banner showIcon={false} style={{ textAlign: 'center' }} />}
      <div className="page">
        {location.pathname !== "/" ? (
          <Header />
        ) : (
          <div className="header">
            <div className="headerwrap">
              <img src={logo} alt="" className="logo" onClick={()=>history.push('/')}/>
              <div className="navWrap">
                <Nav />
                <div
                  className="entryBtn"
                  onClick={()=>history.push('/wrapping')}
                >
                  Enter APP
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="content">
          <Outlet />
        </div>

        <div className="footer">
          <div className="footwrap">
           
            <div className="navWrap">
              <Nav />
            </div>
            <div className="corp" onClick={()=>history.push('/wrapping')}>Octopus.space@2024 All Rights Reserved</div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
