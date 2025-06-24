import React, { Component } from 'react'

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
 */


export class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render({ count = this.state.count } = this.props) {
    return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#home"><img src="./logo192.png" height="40px" width={40} alt="Logo" />Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#home">Home</a> </li>
        <li class="nav-item"> <a class="nav-link" href="#watch-later">Watch Later <span class="badge bg-secondary">{count}</span></a> </li>
        {/*
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
  }
}

export default Navbar

// This Navbar component can be used in various parts of the application