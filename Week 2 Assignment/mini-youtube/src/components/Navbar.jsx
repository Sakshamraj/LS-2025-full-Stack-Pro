import React from 'react'
import { Link } from "react-router-dom";

/** Navbar Component
 * 
 * Navbar with:
 * - Site title/logo
 * - Dummy search input
 * - “Watch Later” button (show count if possible)
 * - (Optional) Dark mode toggle
 * 
 * (Optional) Sidebar like YouTube (Home, Shorts, Subscriptions...)
 * - Links to different sections
 * - Sidebar with dummy nav links
 * 
 * (Optional) Footer with:
 * - Your name / © 2025 line
 * - Social media or GitHub links (dummy)
 * 
 * (Optional) Additional Features:
 * - Filter Bar (e.g., Trending, Music, News)
 * - Feedback on actions (e.g., “Added to Watch Later ✅”)
 * - Card Hover Animations
 * - Responsive Design (media queries or framework classes)
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.logo - Logo image URL.
 * @param {number} props.count - Watch Later count.
 */
function Navbar({ logo, count, tag, setTag }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} height="40px" width={40} alt="Logo" />Mini YouTube
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watch-later">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={18}><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                Watch Later <span className="badge bg-secondary">{count}</span>
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="input-group">
              <input type="search" className="form-control" placeholder="search" aria-label="search" aria-describedby="basic-addon1" />
              <button className="input-group-text icon-link icon-link-hover" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={18}>
                  <path className="fa-secondary" d="M208 64a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 352A208 208 0 1 0 208 0a208 208 0 1 0 0 416z"/>
                  <path className="fa-primary" d="M330.7 376L457.4 502.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L376 330.7C363.3 348 348 363.3 330.7 376z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// This Navbar component can be used in various parts of the application