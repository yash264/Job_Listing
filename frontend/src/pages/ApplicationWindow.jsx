import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function ApplicationWindow() {
  const location = useLocation();
  const form = location.state.form;
  const role = location.state.role;

  const [data, setData] = useState([]);
  const [message, setMessage] = useState({});
  const [document, setDocument] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [yourself, setYourself] = useState("");
  const [uploadingPic, setUploadingPic] = useState(false);
  const [uploadingPdf, setUploadingPdf] = useState(false);

  const cloud_name = "dcinkrcz2";
  const upload_preset = "JobFinder";

  const showDetails = async () => {
    try {
      const response = await axios.post(
        "https://hiresathiserver.vercel.app/api/application",
        {
          form: form,
          role: role,
        },
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
    }
  };

  useEffect(() => {
    showDetails();
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingPic(true);
    const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const resData = await response.json();
      setImageUrl(resData.secure_url);
    } catch (error) {
      console.error(error);
    } finally {
      setUploadingPic(false);
    }
  };

  const handlePdfUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingPdf(true);
    const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const resData = await response.json();
      setPdfUrl(resData.secure_url);
    } catch (error) {
      console.error(error);
    } finally {
      setUploadingPdf(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://hiresathiserver.vercel.app/api/submitForm",
        {
          form: form,
          role: role,
          imageUrl: imageUrl,
          document: document,
          pdfUrl: pdfUrl,
          yourself: yourself,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      if (response.data.message === "application submitted") {
        toast.success("Application Submitted Successfully");
      } else if (response.data === "application already submitted") {
        toast.error("Application Already Submitted");
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
      <div className="container mt-4">
        <h3 className="mb-4" style={{ color: "var(--accent-pink)" }}>
          Application Window
        </h3>

        <div className="row gx-5">
          {/* Job / Admin Details */}
          <div className="col-md-6 mb-4">
            <div className="card p-3">
              <h4 className="mb-3">{data.form}</h4>
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Role</th>
                    <td>{message.role}</td>
                  </tr>
                  <tr>
                    <th scope="row">Eligibility</th>
                    <td>{message.eligibility}</td>
                    <th scope="row">Skills Needed</th>
                    <td>{message.skills}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>{data.gmail}</td>
                    <th scope="row">Mobile No.</th>
                    <td>
                      {data.adminDetails == null
                        ? ""
                        : data.adminDetails.map((item, idx) => (
                            <span key={idx}>{item.phone}</span>
                          ))}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Location</th>
                    <td colSpan={3}>
                      {data.adminDetails == null
                        ? ""
                        : data.adminDetails.map((item, idx) => (
                            <span key={idx}>
                              {item.city}, {item.state}
                            </span>
                          ))}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Last Date to Apply</th>
                    <td>
                      {message.lastDate
                        ? moment(message.lastDate).format("Do MMM YY, h:mm a")
                        : ""}
                    </td>
                    <th scope="row">Salary</th>
                    <td>{message.salary}</td>
                  </tr>
                  <tr>
                    <th scope="row">Description</th>
                    <td colSpan={3}>{message.aboutUs}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Application Form */}
          <div className="col-md-6 mb-4">
            <div className="card p-3">
              <h4 className="mb-3">Application Form</h4>

              <form className="row g-3">
                {/* Profile Picture */}
                <div className="mb-3">
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt="Profile"
                      className="profile-pic mb-2"
                      style={{ width: "100px", borderRadius: "8px" }}
                    />
                  )}
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleImageUpload}
                    disabled={uploadingPic}
                  />
                  {uploadingPic && (
                    <div
                      className="spinner-border text-primary mt-2"
                      role="status"
                    >
                      <span className="visually-hidden">Uploading...</span>
                    </div>
                  )}
                </div>

                {/* Document Name + File */}
                <div className="col-md-8">
                  <label className="form-label">Any Document</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name of the Document"
                    onChange={(e) => setDocument(e.target.value)}
                  />
                </div>

                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    onChange={handlePdfUpload}
                    disabled={uploadingPdf}
                  />
                </div>
                {uploadingPdf && (
                  <div
                    className="spinner-border text-primary mt-2"
                    role="status"
                  >
                    <span className="visually-hidden">Uploading...</span>
                  </div>
                )}

                {/* About Yourself */}
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    style={{ height: "100px" }}
                    onChange={(e) => setYourself(e.target.value)}
                  ></textarea>
                  <label>Brief Intro about Yourself</label>
                </div>

                {/* Submit Button + Modal Trigger */}
                <div className="col-md-6">
                  <button
                    type="button"
                    className="btn btn-custom"
                    data-bs-toggle="modal"
                    data-bs-target="#submitConfirmation"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Confirmation Modal */}
        <div
          className="modal fade"
          id="submitConfirmation"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="submitConfirmationLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content card p-2">
              <div className="modal-header">
                <h5 className="modal-title" id="submitConfirmationLabel">
                  Confirmation
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to submit?
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
      </div>

      <Footer />
    </>
  );
}

export default ApplicationWindow;
