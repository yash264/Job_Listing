import React, { useState } from 'react';
import Logo from "../../assets/Logo.svg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("jobseeker");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://hiresathiserver.vercel.app/api/register",
        { payload: { name, email, password, type } }
      );


     console.log(res.data)

      if (res.data.success) {
        navigate("/login");
      } else {
        toast.error(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
  const msg = error.response?.data?.message || "Signup failed";
  toast.error(msg);
}
  };

  return (
    <div className="h-full w-full flex flex-col justify-start items-center mt-16">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <img src={Logo} alt="HireSathi" />

      <div className="bg-card p-8 m-4 min-w-96 rounded-md">
        {/* Heading */}
        <div className="flex flex-col text-center gap-4 m-2">
          <h3 className="font-semibold text-2xl">Create an account</h3>
          <p className="text-xs text-muted-foreground">Get started with HireSathi today</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Role Selector */}
          <div className="flex flex-col gap-1">
            <label className="text-sm">I am a</label>
            <div className="grid grid-cols-2 gap-2 mt-1">
              {[
                { id: "jobseeker", label: "Job Seeker", Icon: UserIcon  },
                { id: "jobprovider", label: "Employer", Icon: BriefcaseIcon },
              ].map(({ id, label, Icon }) => (
                <button
                  key={id}
                  value={id}
                  type="button"
                  onClick={() => setType(id)}
                  className="flex flex-col items-center gap-1.5 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: type === id ? "rgba(45,212,191,0.08)" : "var(--secondary)",
                    border: `1px solid ${type === id ? "var(--primary)" : "var(--border)"}`,
                    color: type === id ? "var(--primary)" : "var(--muted-foreground)",
                  }}
                >
                  <Icon />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label>Full Name</label>
            <input
              className="px-4 py-1 text-muted-foreground rounded-lg bg-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              name="name"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              className="px-4 py-1 text-muted-foreground rounded-lg bg-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              placeholder="name@company.com"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <div className="relative">
              <input
                className="px-4 py-1 text-muted-foreground rounded-lg bg-input w-full pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">Must be at least 8 characters</p>
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-[#07d989] px-4 py-2 mb-2 text-primary-foreground rounded-lg font-medium transition-colors duration-200"
          >
            Create account
          </button>
        </form>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <a className="text-primary" href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;