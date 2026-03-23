import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export const Nav = () => {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg header">
      <div className="container-fluid">
        <a className="navbar-brand brand" href="#">
          Services
        </a>

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
              <Link className="nav-link nav-link-custom" to="../admin/adminDash">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="../admin/createJob">
                Create a Job
              </Link>
            </li>
          </ul>

          <div>
            <button
              type="button"
              className="btn btn-custom"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
  
