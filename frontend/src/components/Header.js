import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="custom-navbar p-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <NavLink to="/" className="navbar-brand link-custom m-0">
          HireSathi
        </NavLink>

        <button
          className="navbar-toggler border-0 bg-transparent"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <FaTimes className="link-custom" /> : <FaBars className="link-custom" />}
        </button>

        <nav className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item mx-2">
              <NavLink to="/" className="nav-link link-custom" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/features" className="nav-link link-custom">
                Features
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/about" className="nav-link link-custom">
                About
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/User/login" className="nav-link link-custom">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
