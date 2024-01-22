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
            <Link
              to="/carsharing-ua"
              className={location.pathname === "/carsharing-ua" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="catalog"
              className={
                location.pathname === "/carsharing-ua/catalog" ? "active" : ""
              }
            >
              Catalog
            </Link>
          </li>
          <li>
            <Link
              to="favorites"
              className={
                location.pathname === "/carsharing-ua/favorites" ? "active" : ""
              }
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
