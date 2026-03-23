import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../SvgImage/Auth";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://hiresathiserver.vercel.app/api/register",
        { name, email, password }
      );

      if (response.data === "Email Already Exists") {
        toast.error("Email Already Exists");
      } else if (response.data.message === "registered") {
        toast.success("Registered successfully");
        navigate("/User/login");
      }
    } catch (error) {
      console.error(error);
      toast.error("Registration failed");
    }
  };

  useEffect(() => {
    const verifyUser = async () => {
      const isTokenValid = await checkToken();
      if (isTokenValid.isValid) {
        navigate("/User/dashBoard");
      }
    };
    verifyUser();
  }, [navigate]);

  const checkToken = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) return false;

    try {
      const response = await axios.post(
        "https://hiresathiserver.vercel.app/api/verify-token",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return { isValid: response.data.valid, data: response.data.data };
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <>
      <div className="container px-4 text-center main-bg py-5">
        <div className="row gx-5 align-items-center">
          {/* Left Column with SVG */}
          <div className="col-md-6">
            <Auth />
          </div>

          {/* Right Column with Form */}
          <div className="col-md-6">
            <h4 className="link-custom mb-4">Register</h4>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-10 mx-auto">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-10 mx-auto">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-10 mx-auto">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-custom me-2">
                  Register
                </button>
                <Link to="../User/login" className="btn btn-outline-secondary">
                  Already Registered?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default Register;       
