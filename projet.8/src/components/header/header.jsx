import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./header.css";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/src/assets/logo.png" alt="Logo" />
        </Link>
      </div>
      <nav className="nav">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          À propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
