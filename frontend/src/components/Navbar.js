import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export const Navbar = () => {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand link-custom" href="#">Services</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link link-custom" to="../User/dashBoard">DashBoard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-custom" to="../User/notification">Notification</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-custom" to="../User/pastApplication">Past Application</Link>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-custom"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
