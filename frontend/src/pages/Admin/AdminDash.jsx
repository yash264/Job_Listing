import React, { useState, useEffect } from "react";
import axios from "axios";

// Nav is a named export → curly braces
import { Nav } from ./Nav";

// Footer is a default export → no curly braces
import Footer from "../../components/Footer";

// Profile is a named export → curly braces
import { Profile } from "../../SvgImage/Profile";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminDash() {
  const [ferm, setFerm] = useState("");
  const [gmail, setGmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(
          "https://hiresathiserver.vercel.app/api/fetchAdmin",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );

        setFerm(response.data.message.ferm);
        setGmail(response.data.message.gmail);
        setPhone(response.data.message.adminDetails[0].phone);
        setCity(response.data.message.adminDetails[0].city);
        setState(response.data.message.adminDetails[0].state);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch admin data");
      }
    };

    fetchAdminData();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://hiresathiserver.vercel.app/api/updateAdmin",
        { ferm, gmail, phone, city, state },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      if (response.data.data === "updated user profile") {
        toast.success("Updated Successfully");
      } else {
        toast.error("Some Error Occurred");
      }
    } catch (error) {
      console.log(error);
      toast.error("Update failed");
    }
  };

  return (
    <>
      <Nav />

      <h3 className="text-center mt-3" style={{ color: "var(--accent-pink)" }}>
        Admin Corner
      </h3>

      <div className="container px-4 text-center mt-4">
        <div className="row gx-5 align-items-center">
          {/* Profile SVG */}
          <div className="col-md-6 mb-4">
            <div className="p-3">
              <Profile />
            </div>
          </div>

          {/* Admin Details Card */}
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
                    <th>Firm Name</th>
                    <td>{ferm}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{gmail}</td>
                  </tr>
                  <tr>
                    <th>Mobile No.</th>
                    <td>{phone}</td>
                  </tr>
                  <tr>
                    <th>Location</th>
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
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content card p-3">
            <div className="modal-header">
              <h5 className="modal-title">Update Details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
                <div className="col-md-6">
                  <label className="form-label">Firm Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Name"
                    onChange={(e) => setFerm(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your Email"
                    onChange={(e) => setGmail(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Mobile No.</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Mobile Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your City"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">State</label>
                  <select
                    className="form-select"
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option>Choose...</option>
                    <option>Uttar Pradesh</option>
                    <option>Madhya Pradesh</option>
                    <option>New Delhi</option>
                    <option>Maharashtra</option>
                    <option>Haryana</option>
                    <option>Rajasthan</option>
                    <option>Gujarat</option>
                    <option>Uttarakhand</option>
                    <option>Other</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                className="btn btn-custom"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Save Changes
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

export default AdminDash;
