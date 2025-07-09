// Navigation bar component
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TopBar.css"; // Custom styles

const Navbar = () => {
  return (
    <div className="d-flex align-items-center justify-content-between px-3 py-2 navbar-container">
      {/* Left icons */}
      <div className="d-flex gap-2">
        <i className="bi bi-house-door-fill icon-style"></i>
        <i className="bi bi-house-door-fill icon-style"></i>
      </div>

      {/* Search bar */}
      <div className="search-bar d-flex align-items-center">
        <span className="search-placeholder">Hinted search Video</span>
        <i className="bi bi-search ms-auto"></i>
      </div>

      {/* Right button */}
      <button className="btn custom-btn d-flex align-items-center">
        <i className="bi bi-house-door-fill me-2"></i>
        Label
      </button>
    </div>
  );
};

export default Navbar;


/*
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  const [isExpanded, setIsExpanded] = useState(window.innerWidth <= 720);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container">
      <Sidebar isExpanded={isExpanded} />
      <main className="main">
        <button className="toggle-btn" onClick={toggleSidebar}>
          ☰ Menu
        </button>
        <h1>Welcome</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
}

export default App;

*/
