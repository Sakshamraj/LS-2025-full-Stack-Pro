// Register form component
import React, { useState } from "react";
import axios from "../axiosConfig";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("register/", form);
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input className="form-control my-2" type="text" placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
        <input className="form-control my-2" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
