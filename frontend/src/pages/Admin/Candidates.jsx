import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

// Nav is a named export → curly braces
import { Nav } from "../Nav";

// Footer is a default export → no curly braces
import Footer from "../../components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Candidates() {
  const location = useLocation();
  const role = location.state.role;

  const [values, setValues] = useState([]);
  const [data, setData] = useState({});
  const [message, setMessage] = useState({});

  const fetchAdminData = async () => {
    try {
      const response = await axios.post(
        "https://hiresathiserver.vercel.app/api/fetchCandidates",
        { role },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      setValues(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch candidates");
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchProfile = async (name, email, role) => {
    try {
      const response = await axios.post(
        "https://hiresathiserver.vercel.app/api/fetchProfile",
        { name, email, role },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      setData(response.data.data);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch profile");
    }
  };

  const confirmation = async (name, email, role) => {
    try {
      const response = await axios.post(
        "https://hiresathiserver.vercel.app/api/acceptConfirmation",
        { name, email, role },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      if (response.data.message === "accepted") {
        toast.success("Accepted");
        fetchAdminData();
      } else {
        toast.error("Some Error Occurred");
      }
    } catch (error) {
      console.log(error);
      toast.error("Confirmation failed");
    }
  };

  return (
    <>
      <Nav />

      <div className="container mt-4">
        <h3 className="mb-3" style={{ color: "var(--accent-pink)" }}>
          Candidates Applied
        </h3>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Document</th>
              <th>Profile</th>
              <th>Accept</th>
            </tr>
          </thead>

          <tbody>
            {values?.map((value, index) => (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.email}</td>

                <td>
                  <a
                    href={value.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-custom"
                  >
                    {value.document}
                  </a>
                </td>

                <td>
                  <button
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#profileModal"
                    onClick={() =>
                      fetchProfile(value.name, value.email, value.role)
                    }
                  >
                    View
                  </button>
                </td>

                <td>
                  {value.status ? (
                    <button className="btn btn-success">Accepted</button>
                  ) : (
                    <button
                      className="btn btn-custom"
                      onClick={() =>
                        confirmation(value.name, value.email, value.role)
                      }
                    >
                      Accept
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SINGLE MODAL */}
      <div
        className="modal fade"
        id="profileModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content card p-3">
            <div className="modal-header">
              <h5 className="modal-title">Candidate Profile</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body text-center">
              <img src={data.imageUrl} alt="Profile" className="profile-pic" />

              <table className="table mt-3">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{message.name}</td>
                  </tr>

                  <tr>
                    <th>Email</th>
                    <td>{message.email}</td>
                  </tr>

                  <tr>
                    <th>Mobile</th>
                    <td>
                      {message.personalDetails?.map((p, i) => (
                        <div key={i}>{p.mobile}</div>
                      ))}
                    </td>
                  </tr>

                  <tr>
                    <th>Qualification</th>
                    <td>
                      {message.personalDetails?.map((p, i) => (
                        <div key={i}>{p.qualification}</div>
                      ))}
                    </td>
                  </tr>

                  <tr>
                    <th>Role</th>
                    <td>{data.role}</td>
                  </tr>

                  <tr>
                    <th>Location</th>
                    <td>
                      {message.personalDetails?.map((p, i) => (
                        <div key={i}>
                          {p.city}, {p.state}
                        </div>
                      ))}
                    </td>
                  </tr>

                  <tr>
                    <th>About</th>
                    <td>{data.yourself}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
      <Footer />
    </>
  );
}

export default Candidates;
