import React from "react";
import { FaCode, FaBell, FaEnvelope } from "react-icons/fa";
import { ImLocation, ImEnvelop } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import "./landing.css";
import "./effect.css";
import logo from "../SvgImage/hiresathi.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Home() {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("./Admin/adminReg");
  };

  return (
    <>
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
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link link-custom" to="/">HomePage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-custom" to="./features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-custom" to="./about">About</Link>
              </li>
            </ul>

            <button className="btn btn-custom" onClick={redirect}>
              Admin Corner
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-section d-flex align-items-center justify-content-center">
        <div className="container text-center">
          <h1 className="hero-title">Welcome to HireSathi</h1>
          <p className="hero-subtitle">
            Your one-stop platform to track and showcase your skill progress.
          </p>

          <div className="mt-4 text-start mx-auto hero-content">
            <h3 className="section-title">What is HireSathi?</h3>

            <p className="section-text">
              With the increasing popularity of Competitive Environment, it's easy to lose track of upcoming job notifications and challenges across various platforms. Missing out on valuable notifications can be frustrating. But worry no more! With Job Finder, you can effortlessly keep track of all your skill profiles in one place and never miss another competition.
              <br /><br />
              Simply sign up with an active email to start receiving reminders of upcoming notifications for particular platform jobs. Job Finder is your one-stop platform to monitor and showcase your skill progress. Stay on top of your game and ensure you never miss an opportunity to compete and improve.
            </p>

            <Link to="/User/register" style={{ textDecoration: "none" }}>
              <button className="btn btn-custom mt-3">Sign Up Now</button>
            </Link>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="hero-image-container">
          <img
            src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg"
            alt="coding"
            className="hero-image"
          />
        </div>
      </header>

      {/* Footer is rendered globally by App so not included here */}
    </>
  );
}

export default Home;
