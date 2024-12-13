import { Link } from "react-router-dom";
import Navigation from "../Navigation";

import logo from "../../assets/culinary-ai-logo.svg";

import "./Header.css";
// import Logo from "../Logo";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__logo-container">
          {/* <Logo /> */}
          <img src={logo} alt="Logo" className="header__logo" />
        </Link>
      </div>
      <div className="header__right">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
