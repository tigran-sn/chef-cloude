import { Link } from "react-router-dom";
import Navigation from "../Navigation";

import "./Header.css";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__logo-container">
          <Logo height={50} />
        </Link>
      </div>
      <div className="header__right">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
