import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Image/Background.png";

function Header() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/30 text-white">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

       
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-10" />
          <h1 className="font-bold text-lg">HireSathi</h1>
        </div>

       
        <div className="hidden md:flex gap-8">
          <Link to="/job" className="hover:text-cyan-400">Job</Link>
          <Link to="/dashboard" className="hover:text-cyan-400">Dashboard</Link>
          <Link to="/candidate" className="hover:text-cyan-400">Candidates</Link>
        </div>

     
        <div className="flex sm:gap-4 items-center gap-2">
          <Link to="/login" className="px-4 py-2 hover:text-cyan-400">
            Login
          </Link>

          <Link
            to="/get-started"
            className="bg-[#00D091] text-black rounded-xl px-3 sm:px-4 py-2 text-sm sm:text-base"
          >
            Get Started
          </Link>
        </div>

      </div>

    </nav>
  );
}

export default Header;