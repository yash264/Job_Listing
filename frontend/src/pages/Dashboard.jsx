import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      window.location.href = "/User/login";
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);

        const profileRes = await axios.get(
          "https://hiresathiserver.vercel.app/api/user/profile",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUser(profileRes.data);

        const appsRes = await axios.get(
          "https://hiresathiserver.vercel.app/api/user/applications",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setApplications(appsRes.data || []);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        localStorage.removeItem("authToken");
        window.location.href = "/User/login";
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div
            className="spinner-border"
            role="status"
            style={{ color: "var(--primary)" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4 dashboard-root">
      <div className="row g-4">

        {/* SIDEBAR */}
        <aside className="col-lg-3 col-md-4">
          <div className="card p-3 shadow-soft">
            <div className="d-flex align-items-center gap-3">
              <img
                src={user?.avatar || "/default-avatar.png"}
                alt="profile"
                className="profile-pic"
                style={{ width: 72, height: 72, objectFit: "cover" }}
              />
              <div>
                <h5 className="mb-1" style={{ color: "var(--primary)" }}>
                  {user?.name || "Candidate"}
                </h5>
                <small className="text-light">{user?.email}</small>
              </div>
            </div>

            <hr className="my-3" />

            <div className="d-grid gap-2">
              <a href="/User/applicationWindow" className="btn btn-outline-custom">
                Apply New
              </a>
              <a href="/User/notification" className="btn btn-custom">
                Notifications
              </a>
              <a href="/User/pastApplication" className="btn btn-custom">
                Past Applications
              </a>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="col-lg-9 col-md-8">
          <div className="card p-4 shadow-soft">

            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h3 style={{ color: "var(--primary)" }}>Dashboard</h3>
                <p className="mb-0 text-light">Overview of your recent activity</p>
              </div>
            </div>

            {/* RECENT APPLICATIONS */}
            <section className="mt-4">
              <h6 className="section-title">Recent Applications</h6>

              {applications.length === 0 ? (
                <div className="p-4 text-center">
                  <p className="text-light">You have not applied to any jobs yet.</p>
                  <a href="/Admin/createJob" className="btn btn-custom">
                    Explore Jobs
                  </a>
                </div>
              ) : (
                <div className="table-responsive mt-3">
                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th>Job</th>
                        <th>Company</th>
                        <th>Status</th>
                        <th>Applied On</th>
                      </tr>
                    </thead>
                    <tbody>
                      {applications.map((app) => (
                        <tr key={app._id || app.id}>
                          <td>{app.jobTitle}</td>
                          <td>{app.companyName}</td>
                          <td>
                            <span
                              className={`badge ${
                                app.status === "Accepted"
                                  ? "bg-success"
                                  : app.status === "Rejected"
                                  ? "bg-danger"
                                  : "bg-secondary"
                              }`}
                            >
                              {app.status}
                            </span>
                          </td>
                          <td>{new Date(app.appliedAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            {/* ACCOUNT ACTIONS */}
            <section className="mt-4">
              <h6 className="section-title">Account Actions</h6>
              <div className="d-flex gap-2 mt-2">
                <a href="/User/profile" className="btn btn-outline-custom">
                  Edit Profile
                </a>
                <button
                  className="btn btn-custom"
                  onClick={() => {
                    localStorage.removeItem("authToken");
                    window.location.href = "/";
                  }}
                >
                  Logout
                </button>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
