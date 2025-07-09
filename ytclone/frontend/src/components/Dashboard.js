// User's uploaded videos dashboard component
import React, { useEffect, useState } from "react";
import axios from "../axiosConfig";

const Dashboard = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("videos/").then(res => {
      const userVideos = res.data.filter(v => v.user.username === localStorage.getItem("username"));
      setVideos(userVideos);
    });
  }, []);

  return (
    <div className="container">
      <h2>My Uploaded Videos</h2>
      {videos.map(video => (
        <div key={video.id} className="card my-2">
          <div className="card-body">
            <h5>{video.title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
