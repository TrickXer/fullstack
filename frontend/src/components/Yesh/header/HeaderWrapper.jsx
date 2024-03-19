import "./style/header.css";
import HeaderInner from "./HeaderInner";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header-wrapper">
        <LogoBox />
        <HeaderInner />
      </div>
    </>
  );
}

function LogoBox() {
  return (
    <>
      <div className="header-logo-box">
        <Link to={"/"}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span>Q</span>
            <p>productions</p>
          </div>
        </Link>
      </div>
    </>
  );
}
