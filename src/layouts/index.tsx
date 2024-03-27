import { Link, Outlet } from "umi";
import "./index.less";
import logo from "@/assets/logo.svg";
import Nav from "./components/Nav";

export default function Layout() {
  return (
    <div className="page">
      <div className="header">
        <div className="headerwrap">
          <img src={logo} alt="" className="logo" />
          <div className="navWrap">
            <Nav />
            <div className="entryBtn">Enter APP</div>
          </div>
        </div>
      </div>
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
  );
}
