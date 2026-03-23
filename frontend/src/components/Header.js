  import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  return (
    <header className="custom-navbar p-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo / Brand */}
        <h3 className="link-custom m-0">HireSathi</h3>

        {/* Navigation Links */}
        <nav>
          <ul className="d-flex list-unstyled m-0">
            <li className="mx-3">
              <Link className="nav-link link-custom" to="/">Home</Link>
            </li>
            <li className="mx-3">
              <Link className="nav-link link-custom" to="/features">Features</Link>
            </li>
            <li className="mx-3">
              <Link className="nav-link link-custom" to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* Optional Icons  */}
        <div className="d-flex align-items-center">
          <FaBars className="link-custom mx-2" />
          <FaTimes className="link-custom mx-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
