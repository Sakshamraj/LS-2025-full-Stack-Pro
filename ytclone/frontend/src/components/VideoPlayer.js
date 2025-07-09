// Video watching page component
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axiosConfig";

const VideoPlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios.get(`videos/${id}/`).then(res => setVideo(res.data));
  }, [id]);

  if (!video) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{video.title}</h2>
      <video width="100%" controls>
        <source src={`http://localhost:8000${video.video_file}`} type="video/mp4" />
      </video>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoPlayer;
