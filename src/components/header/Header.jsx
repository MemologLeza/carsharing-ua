import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const location = useLocation();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/catalog"
              className={location.pathname === "/catalog" ? "active" : ""}
            >
              Catalog
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className={location.pathname === "/favorites" ? "active" : ""}
            >
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
