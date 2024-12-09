import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink
            to="/recipes"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
