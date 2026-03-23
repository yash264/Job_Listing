import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./landing.css";
import logo from "../SvgImage/hiresathi.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Features() {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("./Admin/adminReg");
  };

  return (
    <>
      <div className="main-bg">
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid"
                style={{
                  height: "50px",
                  width: "auto",
                  borderRadius: "10px",
                  objectFit: "cover"
                }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link link-custom" to="/">HomePage</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-custom" to="../features">Features</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-custom" to="../about">About</Link>
                </li>
              </ul>
              <div>
                <button
                  type="button"
                  className="btn btn-custom"
                  onClick={redirect}
                >
                  Admin Corner
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="container px-4 text-center text-white">
          <div className="row gx-5">
            <div className="col text-center">
              <div className="p-3">
                <p>
                  Employment empowers people, enhances their self-esteem, and contributes to mental well-being. It fuels economic growth, reduces poverty, and fosters a sense of purpose among individuals. When new jobs are created, incomes rise, consumer spending increases, and businesses thrive, leading to a robust cycle of prosperity.
                </p>
                <h4>FEATURES</h4>
                <p>
                  1. Build a dynamic web application facilitating real time form submission.<br />
                  2. Created a feature that allow user to attach & upload documents.<br />
                  3. Implement JWT token to ensure security and privacy of the User.<br />
                  4. Designed a visual system which sends auto-generated email.<br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 text-center text-white">
          <div className="row gx-5">
            <div className="col text-left">
              <div className="p-3">
                <h5>ADMIN</h5>
                <p>1. Admin can create a job by providing specified details.</p>
                <p>2. Once job is created, admin can see the candidates list for that role.</p>
                <p>3. Admin can also option to accept the application based on his requirement.</p>
              </div>
            </div>
            <div className="col text-left">
              <div className="p-3">
                <h5>JOB FINDERS</h5>
                <p>1. User can register as a fresh candidate and after that logged in.</p>
                <p>2. After updating their profile, they are eligible to apply for the available notification.</p>
                <p>3. While registering for a form, user has the opportunity to upload the supported document as needed.</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Features;
