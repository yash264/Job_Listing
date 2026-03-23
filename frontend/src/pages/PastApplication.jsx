import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PastApplication() {
  const [values, setValues] = useState([]);

  const fetchPastApplications = async () => {
    try {
      const response = await axios.get(
        "https://hiresathiserver.vercel.app/api/fetchPastApplication",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      setValues(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch past applications");
    }
  };

  useEffect(() => {
    fetchPastApplications();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h3 className="text-center mb-4 link-custom">Past Applications</h3>
        <div className="table-responsive">
          <table className="table table-striped table-hover text-white">
            <thead>
              <tr>
                <th scope="col">Name of the Firm</th>
                <th scope="col">Role</th>
                <th scope="col">Photo Uploaded</th>
                <th scope="col">Document</th>
                <th scope="col">Current Status</th>
              </tr>
            </thead>
            <tbody>
              {values && values.length > 0 ? (
                values.map((value, index) => (
                  <tr key={index}>
                    <td>{value.ferm}</td>
                    <td>{value.role}</td>
                    <td>
                      <img
                        src={value.imageUrl}
                        alt="Profile"
                        className="profile-pic"
                        style={{ width: "100px", borderRadius: "8px" }}
                      />
                    </td>
                    <td>
                      <a
                        href={value.pdfUrl}
                        className="link-custom"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {value.document}
                      </a>
                    </td>
                    <td>
                      {value.status === true ? (
                        <button className="btn btn-custom">Accepted</button>
                      ) : (
                        <button className="btn btn-outline-secondary">
                          Pending...
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No past applications found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default PastApplication;
