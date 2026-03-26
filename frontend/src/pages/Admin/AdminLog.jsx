import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Ferm } from "../../SvgImage/Ferm";   // ✅ Ferm is a named export
import Footer from "../../components/Footer"; // ✅ Footer is a default export
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function AdminLog() {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://hiresathiserver.vercel.app/api/adminLogin",
        { gmail, password }
      );

      if (response.data.message === "Incorrect Password") {
        toast.error("Incorrect Password");
      } else if (response.data.message === "Please Register") {
        toast.error("Please Register");
      } else if (response.data.message === "success") {
        localStorage.setItem("authToken", response.data.token);
        navigate("/Admin/adminDash");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <>
      <div className="container px-4 text-center mt-4">
        <div className="row gx-5">
          <div className="col">
            <div className="card p-4">
              <h4 className="mb-3" style={{ color: "var(--accent-pink)" }}>
                Admin Login
              </h4>

              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-8 mx-auto">
                  <label className="form-label">Organization Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setGmail(e.target.value)}
                  />
                </div>

                <div className="col-md-8 mx-auto">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="col-12 mt-3">
                  <button type="submit" className="btn btn-custom me-2">
                    Login
                  </button>

                  <Link
                    to="../Admin/adminReg"
                    className="btn btn-outline-secondary"
                  >
                    New User
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <div className="col">
            <div className="p-3">
              <Ferm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default AdminLog;
