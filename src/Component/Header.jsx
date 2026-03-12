import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Image/Background.png'

function Header() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/30 text-white flex items-center p-4 ">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="logo" className="h-10 w-10" />
        <h1 className="font-bold text-lg">HireSathi</h1>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
        <Link to="/job" className="hover:text-cyan-400">Job</Link>
        <Link to="/dashboard" className="hover:text-cyan-400">Dashboard</Link>
        <Link to="/candidate" className="hover:text-cyan-400">Candidates</Link>
      </div>
      <div className="ml-auto space-x-4">
        <Link to="/login" className="px-4 py-2 text-white">
          Login
        </Link>
        <Link
          to="/get-started"
          className="bg-[rgba(0,208,145,1)] text-black rounded-xl px-4 py-2">
          Get Started
        </Link>
      </div>

    </nav>
  )
}

export default Header