import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notification() {
  const navigate = useNavigate();
  const [values, setValues] = useState([]);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        "https://hiresathiserver.vercel.app/api/fetchNotification",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      setValues(response.data.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch notifications");
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const showApplication = (lastDate, ferm, role) => {
    const scheduled = moment(lastDate).format("Do MMM YYYY, h:mm:ss a");
    const currentTime = moment(Date.now()).format("Do MMM YYYY, h:mm:ss a");

    const scheduledMoment = moment(scheduled, "Do MMM YYYY, h:mm:ss a");
    const currentMoment = moment(currentTime, "Do MMM YYYY, h:mm:ss a");

    if (currentMoment.isBefore(scheduledMoment)) {
      navigate("../User/applicationWindow", { state: { ferm, role } });
    } else {
      toast.error("Registrations are Closed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h3 className="text-center mb-4 link-custom">Notifications</h3>
        <div className="table-responsive">
          <table className="table table-striped table-hover text-white">
            <thead>
              <tr>
                <th scope="col">Name of the Firm</th>
                <th scope="col">Role</th>
                <th scope="col">Eligibility</th>
                <th scope="col">Last Date to Apply</th>
                <th scope="col">Apply Now</th>
              </tr>
            </thead>
            <tbody>
              {values && values.length > 0 ? (
                values.map((value, index) => (
                  <tr key={index}>
                    <td>{value.ferm}</td>
                    <td>{value.role}</td>
                    <td>{value.eligibility}</td>
                    <td>{moment(value.lastDate).format("Do MMM YY, h:mm a")}</td>
                    <td>
                      <button
                        className="btn btn-custom"
                        onClick={() =>
                          showApplication(value.lastDate, value.ferm, value.role)
                        }
                      >
                        Apply
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No notifications available
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

export default Notification;
