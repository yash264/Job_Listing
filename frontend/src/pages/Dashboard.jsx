import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Profile } from "../SvgImage/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [qualification, setQualification] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://hiresathiserver.vercel.app/api/fetchUser",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );

        const msg = response.data.message;
        setName(msg.name);
        setGender(msg.gender);
        setEmail(msg.email);
        setMobile(msg.personalDetails[0].mobile);
        setQualification(msg.personalDetails[0].qualification);
        setCity(msg.personalDetails[0].city);
        setState(msg.personalDetails[0].state);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://hiresathiserver.vercel.app/api/updateUser",
        {
          name,
          gender,
          email,
          mobile,
          qualification,
          city,
          state,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      if (response.data.data === "updated user profile") {
        toast.success("Updated User Profile Successfully");
      } else {
        toast.error("Some Error Occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <h3 className="text-center mt-3" style={{ color: "var(--accent-pink)" }}>
        Dashboard
      </h3>

      <div className="container px-4 text-center mt-4">
        <div className="row gx-5 align-items-center">
          <div className="col-md-6 mb-4">
            <div className="p-3">
              <Profile />
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4">
              <button
                type="button"
                className="btn btn-custom mb-3"
                data-bs-toggle="modal"
                data-bs-target="#updateModal"
              >
                Update
              </button>

              <table className="table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>{gender}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <th>Mobile No.</th>
                    <td>{mobile}</td>
                  </tr>
                  <tr>
                    <th>Qualification</th>
                    <td>{qualification}</td>
                  </tr>
                  <tr>
                    <th>HomeTown</th>
                    <td>{city && state ? `${city}, ${state}` : ""}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      <div
        className="modal fade"
        id="updateModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content card p-3">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <select
                    className="form-select"
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                  >
                    <option>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Mobile No.</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => setMobile(e.target.value)}
                    value={mobile}
                  />
                </div>

                <div className="col-md-12">
                  <label className="form-label">Highest Qualification</label>
                  <select
                    className="form-select"
                    onChange={(e) => setQualification(e.target.value)}
                    value={qualification}
                  >
                    <option>Choose...</option>
                    <option>High School</option>
                    <option>Intermediate</option>
                    <option>Diploma</option>
                    <option>Bachelor's of Science</option>
                    <option>Bachelor of Graduation</option>
                    <option>Other's</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">State</label>
                  <select
                    className="form-select"
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                  >
                    <option>Choose...</option>
                    <option>Uttar Pradesh</option>
                    <option>Madhya Pradesh</option>
                    <option>New Delhi</option>
                    <option>Maharashtra</option>
                    <option>Haryana</option>
                    <option>Rajasthan</option>
                    <option>Gujrat</option>
                    <option>Uttarakhand</option>
                    <option>Other's</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  />
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
                Submit
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

export default Dashboard;
