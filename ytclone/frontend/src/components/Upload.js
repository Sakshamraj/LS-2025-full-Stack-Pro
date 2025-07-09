// Upload video page component
import React, { useState } from "react";
import axios from "../axiosConfig";

const Upload = () => {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video_file", video);
    formData.append("title", title);
    formData.append("description", description);

    try {
      await axios.post("upload/", formData);
      alert("Uploaded!");
    } catch {
      alert("Upload failed.");
    }
  };

  return (
    <div className="container">
      <h2>Upload Video</h2>
      <form onSubmit={upload}>
        <input className="form-control my-2" type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <textarea className="form-control my-2" placeholder="Description" onChange={e => setDescription(e.target.value)} />
        <input className="form-control my-2" type="file" onChange={e => setVideo(e.target.files[0])} />
        <button className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
