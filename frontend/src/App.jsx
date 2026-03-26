import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Notification from "./pages/Notification";
import ApplicationWindow from "./pages/ApplicationWindow";
import PastApplication from "./pages/PastApplication";

// Admin Pages
import AdminReg from "./pages/Admin/AdminReg";
import AdminLog from "./pages/Admin/AdminLog";
import AdminDash from "./pages/Admin/AdminDash";
import CreateJob from "./pages/Admin/CreateJob";
import Candidates from "./pages/Admin/Candidates";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  axios.defaults.withCredentials = true;

  const startServer = async () => {
    try {
      const response = await axios.get(
        "https://hiresathiserver.vercel.app/startServer"
      );
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    startServer();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 160px)" }}>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/notification" element={<Notification />} />
          <Route path="/user/applicationwindow" element={<ApplicationWindow />} />
          <Route path="/user/pastapplication" element={<PastApplication />} />

          {/* Admin Routes */}
          <Route path="/admin/adminreg" element={<AdminReg />} />
          <Route path="/admin/adminlog" element={<AdminLog />} />
          <Route path="/admin/admindash" element={<AdminDash />} />
          <Route path="/admin/createjob" element={<CreateJob />} />
          <Route path="/admin/candidates" element={<Candidates />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
