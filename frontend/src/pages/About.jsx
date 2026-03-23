import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { ImEnvelop } from "react-icons/im";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../SvgImage/hiresathi.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function About() {
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

        <div className="container px-4 text-center">
          <div className="row gx-5">
            {/* ANSHIKA */}
            <div className="col">
              <div className="p-3">
                <div className="card text-center card-custom">
                  <div className="card-header">
                    <h4>ANSHIKA THAKUR</h4>
                    <ImEnvelop /> noxyze5674@gmail.com
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">About Me</h5>
                    <a href="#" className="link-custom"><FaLinkedin size={30} /></a>
                    <a href="#" className="link-custom"><FaGithub size={30} /></a>
                    <a href="#" className="link-custom"><FaInstagram size={30} /></a>
                    <hr />
                    <p className="card-text">
                      Hello everyone, it's Anshika — project incharge and research updation & testing specialist.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MOHIT */}
            <div className="col">
              <div className="p-3">
                <div className="card text-center card-custom">
                  <div className="card-header">
                    <h4>MOHIT PAWAR</h4>
                    <ImEnvelop /> mohitpawar1109@gmail.com
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">About Me</h5>
                    <a href="#" className="link-custom"><FaLinkedin size={30} /></a>
                    <a href="#" className="link-custom"><FaGithub size={30} /></a>
                    <a href="#" className="link-custom"><FaInstagram size={30} /></a>
                    <hr />
                    <p className="card-text">
                      Hello, this is Mohit — UI/UX Design specialist.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ABDUL */}
            <div className="col">
              <div className="p-3">
                <div className="card text-center card-custom">
                  <div className="card-header">
                    <h4>ABDUL RAHMAN</h4>
                    <ImEnvelop /> ff292211@gmail.com
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">About Me</h5>
                    <a href="#" className="link-custom"><FaLinkedin size={30} /></a>
                    <a href="#" className="link-custom"><FaGithub size={30} /></a>
                    <a href="#" className="link-custom"><FaInstagram size={30} /></a>
                    <hr />
                    <p className="card-text">
                      Hello, this is Abdul Rahman — frontend specialist.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* YASH */}
            <div className="col">
              <div className="p-3">
                <div className="card text-center card-custom">
                  <div className="card-header">
                    <h4>YASH PANDEY</h4>
                    <ImEnvelop /> yash.20222068@mnnit.ac.in
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">About Me</h5>
                    <a href="https://www.linkedin.com/in/yashpandey02/" className="link-custom"><FaLinkedin size={30} /></a>
                    <a href="https://github.com/yash264" className="link-custom"><FaGithub size={30} /></a>
                    <a href="https://www.instagram.com/yash_2k19_/" className="link-custom"><FaInstagram size={30} /></a>
                    <hr />
                    <p className="card-text">
                      Hi, this is Yash — Full stack developer & backend specialist.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default About;
