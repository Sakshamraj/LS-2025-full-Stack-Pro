// Home page component to display list of videos
import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";
import { Link } from "react-router-dom";

const StackedCard = () => {
  return (
    <div className="card-custom mx-auto">
      <div className="card-top">
        <div className="icon icon1"></div>
        <div className="icon icon2"></div>
        <div className="icon icon3"></div>
      </div>
      <div className="card-bottom d-flex align-items-start">
        <img
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Avatar"
          className="avatar me-3"
        />
        <div className="flex-grow-1">
          <div className="header-text">Header</div>
          <div className="subhead-text">Subhead</div>
          <div className="description-text mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </div>
        </div>
        <div className="menu-icon ms-2">⋮</div>
      </div>
    </div>
  );
};
// Home component to display multiple stacked cards



const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("videos/").then(res => setVideos(res.data));
  }, []);

  return (
    <div>
      <h2>All Videos</h2>
      {videos.map(video => (
        <div key={video.id} className="card my-2">
          <div className="card-body">
            <h5>{video.title}</h5>
            <p>{video.description}</p>
            <Link to={`/video/${video.id}`} className="btn btn-sm btn-primary">Watch</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
