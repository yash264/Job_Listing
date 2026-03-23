import React from "react";
import { ImLocation, ImEnvelope } from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Footer = () => {
  return (
    <footer className="custom-footer text-center py-4">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col">
            <h4 className="link-custom">Stay Connected to us</h4>
          </div>

          {/* Spacer Column */}
          <div className="col"></div>

          {/* Right Column */}
          <div className="col-4 text-left">
            <p><ImEnvelope /> yash.20222068@mnit.ac.in</p>
            <p><ImLocation /> National Institute of Technology Allahabad</p>
            <p>
              <a href="https://www.instagram.com/amdoxtech" className="link-custom">
                Andox-Internship
              </a>
            </p>
          </div>
        </div>

        {/* Contact Button */}
        <a
          href="mailto:yash.20222068@mnit.ac.in"
          className="btn btn-custom mt-3"
        >
          <FaEnvelope className="m-1" /> yash.20222068@mnit.ac.in
        </a>
      </div>
    </footer>
  );
};

export default Footer;
