import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../../context/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./Navigation.css";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        {currentUser && (
          <li className="nav__list-item">
            <NavLink
              to="/recipes"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Recipes
            </NavLink>
          </li>
        )}
        <li className="nav__list-item">
          <NavLink
            to="/how-it-works"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            How It Works
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            About Us
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink
            to="/faq"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            FAQ
          </NavLink>
        </li>
        {!currentUser ? (
          <li className="nav__list-item">
            <NavLink
              to="/auth"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Authentication
            </NavLink>
          </li>
        ) : (
          <li className="nav__list-item">
            <span onClick={signOutUser}>Sign Out</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
