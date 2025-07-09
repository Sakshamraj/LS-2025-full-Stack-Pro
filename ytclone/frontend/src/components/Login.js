// Login form component
import React, { useState } from "react";
import axios from "../axiosConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("login/", form);
      localStorage.setItem("access", res.data.access);
      navigate("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input className="form-control my-2" type="text" placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
        <input className="form-control my-2" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
