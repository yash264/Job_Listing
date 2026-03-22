import React from "react";
import { BrowserRouter, Routes, Route }  from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";

import Register from "./pages/Register";
import Login from "./pages/Login";
import DashBoard from "./pages/Dashboard";
import Notification from "./pages/Notification";
import ApplicationWindow from "./pages/ApplicationWindow";
import PastApplication from "./pages/PastApplication";

import AdminReg from "./pages/Admin/AdminReg";
import AdminLog from "./pages/Admin/AdminLog";
import AdminDash from "./pages/Admin/AdminDash";
import CreateJob from "./pages/Admin/CreateJob";
import Candidates from "./pages/Admin/Candidates";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/features" element={<Features />}></Route>
          <Route path="/about" element={<About />}></Route>
          
          <Route path="/User/register" element={<Register />}></Route>
          <Route path="/User/login" element={<Login />}></Route>
          <Route path="/User/dashBoard" element={<DashBoard />}></Route>
          <Route path="/User/notification" element={<Notification />}></Route>
          <Route path="/User/applicationWindow" element={<ApplicationWindow />}></Route>
          <Route path="/User/pastApplication" element={<PastApplication />}></Route>

          <Route path="/Admin/adminreg" element={<AdminReg />}></Route>
          <Route path="/Admin/adminLog" element={<AdminLog />}></Route>
          <Route path="/Admin/adminDash" element={<AdminDash />}></Route>
          <Route path="/Admin/createJob" element={<CreateJob />}></Route>
          <Route path="/Admin/candidates" element={<Candidates />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
