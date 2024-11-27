import logo from "../../assets/react.svg";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <h1 className="header__title">Chef Cloude</h1>
    </header>
  );
};

export default Header;
