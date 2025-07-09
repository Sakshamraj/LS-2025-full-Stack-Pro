import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaMicrophone, FaVideo, FaBell, FaUserCircle } from 'react-icons/fa';
import './Navbar.css'; 

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar flex items-center justify-between px-4 py-2 shadow-md bg-white sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-2xl text-yt-red font-bold tracking-tight">
          <span style={{ color: '#FF0000' }}>▶</span> ytclone
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div className="flex flex-1 max-w-xl mx-6">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-4 py-1 border border-gray-300 rounded-l-full focus:outline-none"
        />
        <button className="bg-gray-100 px-4 py-2 border border-gray-300 border-l-0 rounded-r-full">
          <FaSearch />
        </button>
        <button className="ml-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <FaMicrophone />
        </button>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4 text-xl">
        <Link to="/upload" title="Upload">
          <FaVideo className="cursor-pointer hover:text-yt-red" />
        </Link>
        <FaBell className="cursor-pointer hover:text-yt-red" />
        <Link to="/dashboard" title="Your Channel">
          <FaUserCircle className="cursor-pointer text-2xl hover:text-yt-red" />
        </Link>
      </div>
    </nav>
  );
}
