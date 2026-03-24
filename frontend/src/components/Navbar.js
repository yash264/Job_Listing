
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <nav className="navbar custom-navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand link-custom">
          HireSathi
        </NavLink>

        <button
          className="navbar-toggler border-0 bg-transparent"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="toggler-icon" style={{ color: "var(--violet)" }}>
            {open ? "✕" : "☰"}
          </span>
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link link-custom" end onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/features" className="nav-link link-custom" onClick={() => setOpen(false)}>
                Features
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link link-custom" onClick={() => setOpen(false)}>
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/User/dashBoard" className="nav-link link-custom" onClick={() => setOpen(false)}>
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/User/notification" className="nav-link link-custom" onClick={() => setOpen(false)}>
                Notifications
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/User/pastApplication" className="nav-link link-custom" onClick={() => setOpen(false)}>
                Past Applications
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <button type="button" className="btn btn-custom me-2" onClick={() => navigate("/User/login")}>
              Login
            </button>

            <button type="button" className="btn btn-outline-primary" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
