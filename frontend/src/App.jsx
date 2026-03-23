
import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashBoard from "./pages/Dashboard";
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
import Header from "./components/Header";
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
      {/* Global Header */}
      <Header />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />

        {/* User Pages */}
        <Route path="/User/register" element={<Register />} />
        <Route path="/User/login" element={<Login />} />
        <Route path="/User/dashBoard" element={<DashBoard />} />
        <Route path="/User/notification" element={<Notification />} />
        <Route path="/User/applicationWindow" element={<ApplicationWindow />} />
        <Route path="/User/pastApplication" element={<PastApplication />} />

        {/* Admin Pages */}
        <Route path="/Admin/adminreg" element={<AdminReg />} />
        <Route path="/Admin/adminlog" element={<AdminLog />} />
        <Route path="/Admin/adminDash" element={<AdminDash />} />
        <Route path="/Admin/createJob" element={<CreateJob />} />
        <Route path="/Admin/candidates" element={<Candidates />} />
      </Routes>

      {/* Global Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
