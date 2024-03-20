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
    <Link to={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-16 h-16 text-white p-2 bg-primary rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-4xl tracking-wider font-bold">WrapIt</span>
    </Link>
  )
}
