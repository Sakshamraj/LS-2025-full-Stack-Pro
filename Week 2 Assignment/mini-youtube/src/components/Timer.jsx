import React, { useState, useEffect } from "react";

/** Timer Component
 * Displays a live timer (hours, minutes, seconds).
 */
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return (
    <div>
      {/* Button above the alert */}
      <button
        type="button"
        className="btn btn-primary position-fixed"
        onClick={() => setShowAlert(true)}
        style={{
          backgroundColor: "#f0ad4e",
          borderColor: "#f0ad4e",
          margin: "10px",
          fontWeight: "bold",
          width: "fit-content",
          position: "fixed",
          bottom: "60px",
          right: "0",
          zIndex: 501,
          padding: "8px 15px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" style={{ color: "#fff" }} viewBox="0 0 448 512">
          <path xmlns="http://www.w3.org/2000/svg" class="fa-primary" d="M224 112c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24V136c0-13.3-10.7-24-24-24zm32 208a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm13.3 173.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/><path xmlns="http://www.w3.org/2000/svg" class="fa-secondary" d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zM192 320a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm56-184v96c0 13.3-10.7 24-24 24s-24-10.7-24-24V136c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>
        </svg>
        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span className="visually-hidden">alerts</span>
        </span>
      </button>
      {showAlert && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
          style={{
            margin: "10px",
            fontWeight: "bold",
            color: "#222",
            width: "fit-content",
            position: "fixed",
            bottom: "0",
            right: "0",
            zIndex: 500,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          Time Spent on this site:
          {hours > 0 && ` ${hours} hour${hours !== 1 ? "s" : ""}`}
          {` ${minutes} minute${minutes !== 1 ? "s" : ""} ${secs} second${secs !== 1 ? "s" : ""}`}
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
      )}
    </div>
  );
};

export default Timer;
// This Timer component can be used in various parts of the application
// where a countdown or timer functionality is needed, such as in a video playback context