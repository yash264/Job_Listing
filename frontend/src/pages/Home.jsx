import React from "react";
import { FaCode, FaBell, FaEnvelope } from "react-icons/fa";
import { ImLocation, ImEnvelop } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import "./landing.css";
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
                  <Link className="nav-link link-custom" to="./features">Features</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-custom" to="./about">About</Link>
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

        <div className="min-h-screen text-white">
          <header className="relative pt-24 pb-32 flex content-center items-center justify-center min-h-screen">
            <div className="absolute top-0 w-full h-full bg-center bg-cover opacity-50">
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div className="container relative mx-auto">
              <div className="flex flex-wrap items-center">
                <div className="row">
                  <div className="col">
                    <div className="p-12">
                      <div className="w-full md:w-6/12 px-4 ml-auto mr-auto text-center">
                        <h1 className="text-white font-semibold text-4xl">
                          Welcome to HireSathi
                        </h1>
                        <p>Your one-stop platform to track and showcase your skill progress.</p>
                        <div className="mt-10 ml-8 text-left">
                          <h3 className="text-white font-semibold text-2xl m-3">
                            What is HireSathi?
                          </h3>
                          <p className="m-4 text-lg text-gray-300 text-pretty">
                            With the increasing popularity of Competitive Environment, it's easy to lose track of upcoming job notifications and challenges across various platforms. Missing out on valuable notifications can be frustrating. But worry no more! With Job Finder, you can effortlessly keep track of all your skill profiles in one place and never miss another competition.
                            <br /><br />
                            Simply sign up with an active email to start receiving reminders of upcoming notifications for particular platform jobs. Job Finder is your one-stop platform to monitor and showcase your skill progress. Stay on top of your game and ensure you never miss an opportunity to compete and improve.
                          </p>
                        </div>
                        <Link to="/User/register" style={{ textDecoration: "none" }}>
                          <button className="btn btn-custom">
                            Sign Up Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="p-12">
                      <div className="mt-12 w-full md:w-6/12 px-4 ml-auto mr-auto flex justify-center">
                        <img
                          src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg"
                          alt="coding"
                          className="max-w-full rounded-lg shadow-lg h-[60vw] md:h-[40vw]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default Home;
