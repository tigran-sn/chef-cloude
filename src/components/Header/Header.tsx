import { Link } from "react-router-dom";
import logo from "../../assets/chef-claude-icon.png";
import Navigation from "../Navigation";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__logo-container">
          <img src={logo} alt="Logo" className="header__logo" />
          <h1 className="header__title">Chef Cloude</h1>
        </Link>
      </div>
      <div className="header__right">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
