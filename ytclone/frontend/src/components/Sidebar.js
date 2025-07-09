// Sidebar menu component
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Toggle sidebar expansion
  const toggleSidebar = () => setExpanded(!expanded);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 720) {
        setExpanded(false); // collapsed by default on large
      } else {
        setExpanded(true); // expanded by default on small
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`sidebar ${expanded ? "expanded" : "collapsed"}`}>
      <div className="sidebar-item active" onClick={toggleSidebar}>
        <i className="bi bi-display"></i>
        {expanded && <span>home</span>}
      </div>

      <div className="sidebar-item">
        <i className="bi bi-play-btn"></i>
        {expanded && <span>Watch Later</span>}
        {expanded && <span className="ms-auto">24</span>}
      </div>

      <div className="sidebar-item">
        <i className="bi bi-heart"></i>
        {expanded && <span>Liked Videos</span>}
      </div>

      <div className="sidebar-item">
        <i className="bi bi-trash"></i>
        {expanded && <span>History</span>}
      </div>

      <div className="sidebar-item">
        <i className="bi bi-folder"></i>
        {expanded && (
          <>
            <span>Subscribed Channel</span>
            <span className="ms-auto">100+</span>
          </>
        )}
      </div>

      {expanded && <hr className="divider" />}
      {expanded && <div className="section-title">Your Channel</div>}

      <div className="sidebar-item">
        <i className="bi bi-folder"></i>
        {expanded && <span>Dashboard</span>}
      </div>
      <div className="sidebar-item">
        <i className="bi bi-folder"></i>
        {expanded && <span>Add Video</span>}
      </div>
      <div className="sidebar-item">
        <i className="bi bi-folder"></i>
        {expanded && <span>Make Playlist</span>}
      </div>
    </div>
  );
};

export default Sidebar;

/*
import React from "react";
import "./App.css";

const Sidebar = ({ isExpanded }) => {
  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="sidebar-item active">
        <i className="bi bi-display" />
        <span className="label">Home</span>
      </div>

      <div className="sidebar-item">
        <i className="bi bi-play-btn" />
        <span className="label">Watch Later</span>
        <span className="count">24</span>
      </div>

      <div className="sidebar-item">
        <i className="bi bi-heart" />
        <span className="label">Liked Videos</span>
      </div>

      <div className="sidebar-item">
        <i className="bi bi-trash" />
        <span className="label">History</span>
      </div>

      <div className="sidebar-item">
        <i className="bi bi-folder" />
        <span className="label">Subscribed Channel</span>
        <span className="count">100+</span>
      </div>

      <hr className="divider" />
      <div className="section-title">Your Channel</div>

      <div className="sidebar-item">
        <i className="bi bi-folder" />
        <span className="label">Dashboard</span>
      </div>

      <div className="sidebar-item">
        <i className="bi bi-folder" />
        <span className="label">Add Video</span>
      </div>

      <div className="sidebar-item">
        <i className="bi bi-folder" />
        <span className="label">Make Playlist</span>
      </div>
    </div>
  );
};

export default Sidebar;

*/