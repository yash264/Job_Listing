import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import SeekerDashboard from "./pages/SeekerDashboard";
import Jobs from "./pages/Jobs";
import Candidates from "./pages/Candidates";
import CandidateDetail from "./pages/CandidateDetail";
import DashboardLayout from "./components/layout/DashboardLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/employer" element={<DashboardLayout><EmployerDashboard /></DashboardLayout>} />
        <Route path="/dashboard/seeker" element={<DashboardLayout><SeekerDashboard /></DashboardLayout>} />
        <Route path="/jobs" element={<DashboardLayout><Jobs /></DashboardLayout>} />
        <Route path="/candidates" element={<DashboardLayout><Candidates /></DashboardLayout>} />
        <Route path="/candidates/:id" element={<DashboardLayout><CandidateDetail /></DashboardLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
