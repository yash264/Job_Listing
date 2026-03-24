import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import "./effects.css";

function Home() {
  return (
    <>
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
              <button className="btn-custom mt-3">Sign Up Now</button>
            </Link>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg"
            alt="illustration"
            className="hero-image"
          />
        </div>
      </header>
    </>
  );
}

export default Home;
