import { Link, Outlet, useLocation } from "umi";
import "./index.less";
import logo from "@/assets/logo.svg";
import Nav from "./components/Nav";
import { ConfigProvider, message, theme } from "antd";
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
      colorBgContainer: "rgba(110, 102, 250, 0.32)",
    },
    Modal: {
      contentBg: "#232150",
      headerBg: "#232150",
    },
    Input: {
      activeBorderColor: "rgb(110, 102, 250)",
      colorBgContainer: "rgb(8, 7, 49)",
    },
  },
};
export default function Layout() {
  const location = useLocation();
  console.log(location);
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        ..._themes,
      }}
    >
      <div className="page">
        {location.pathname !== "/" ? (
          <Header />
        ) : (
          <div className="header">
            <div className="headerwrap">
              <img src={logo} alt="" className="logo" />
              <div className="navWrap">
                <Nav />
                <div
                  className="entryBtn"
                  onClick={() => {
                    message.info({
                      content: "coming soon",
                      icon: "🚀",
                    });
                  }}
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
            <img src={logo} alt="" className="logo" />
            <div className="navWrap">
              <Nav />
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
