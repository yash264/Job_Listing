import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Nav } from "./Nav";
import moment from "moment";
import { CgClose } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function CreateJob() {
  const [values, setValues] = useState([]);
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [skills, setSkills] = useState("");
  const [salary, setSalary] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [lastTime, setLastTime] = useState("");
  const [aboutus, setAboutUs] = useState("");

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "https://hiresathiserver.vercel.app/api/fetchJob",
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
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://hiresathiserver.vercel.app/api/jobCreate",
        {
          role,
          eligibility,
          skills,
          salary,
          lastDate,
          lastTime,
          aboutus,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      if (response.data.message === "job created") {
        fetchUserData();
        toast.success("Job Created Successfully");
      } else if (response.data === "role must be unique") {
        toast.error("Role must be Unique");
      } else {
        toast.error("Some Error Occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showCandidates = (role) => {
    navigate("../Admin/candidates", { state: { role } });
  };

  const deleteJob = async (role) => {
    try {
      const response = await axios.post(
        "https://hiresathiserver.vercel.app/api/deleteJob",
        { role },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      if (response.data.data === "deleted job") {
        fetchUserData();
        toast.success("Job Deleted Successfully");
      } else {
        toast.error("Some Error Occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav />

      <div className="container mt-4">
        <h4 className="mb-3" style={{ color: "var(--accent-pink)" }}>
          Jobs Created
          <button
            type="button"
            className="btn btn-custom"
            style={{ float: "right" }}
            data-bs-toggle="modal"
            data-bs-target="#createJobModal"
          >
            Create a Job
          </button>
        </h4>

        {/* Modal */}
        <div
          className="modal fade"
          id="createJobModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content card p-3">
              <div className="modal-header">
                <h5 className="modal-title">Job Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Role</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Eligibility</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Educational Qualification"
                      onChange={(e) => setEligibility(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Skills Needed</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setSkills(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Salary (in Rupees)</label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={(e) => setSalary(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Last Date to Apply</label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={(e) => setLastDate(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Until Time</label>
                    <input
                      type="time"
                      className="form-control"
                      onChange={(e) => setLastTime(e.target.value)}
                    />
                  </div>

                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Please give some job descriptions"
                      style={{ height: "100px" }}
                      onChange={(e) => setAboutUs(e.target.value)}
                    ></textarea>
                    <label>Brief Intro about Job</label>
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>

                <button
                  type="button"
                  className="btn btn-custom"
                  data-bs-dismiss="modal"
                  onClick={handleSubmit}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs Table */}
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Role Offered</th>
              <th>Eligibility</th>
              <th>Salary</th>
              <th>Last Date</th>
              <th>Candidates</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {values?.map((value, index) => (
              <tr key={index}>
                <td>{value.role}</td>
                <td>{value.eligibility}</td>
                <td>₹ {value.salary}</td>
                <td>{moment(value.lastDate).format("Do MMM YY, h:mm a")}</td>

                <td>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => showCandidates(value.role)}
                  >
                    View
                  </button>
                </td>

                <td>
                  <CgClose
                    size={22}
                    style={{ cursor: "pointer", color: "var(--accent-pink)" }}
                    onClick={() => deleteJob(value.role)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ToastContainer />
      </div>
    </>
  );
}

export default CreateJob;
