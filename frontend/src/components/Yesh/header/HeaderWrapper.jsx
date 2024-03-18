import HeaderInner from "./HeaderInner";
import { MyLink } from "simple-react-router-x";
import "./style/header.css";

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
        <MyLink to={"/"}>
          <span>Q</span>
          <p>productions</p>
        </MyLink>
      </div>
    </>
  );
}
