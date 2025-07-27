import React, { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    // TODO: send to Flask API
  };

  return (
    <div>
      <h2>Signup User (Admin Only)</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
        <select name="role" onChange={handleChange} required>
          <option value="admin">Admin</option>
          <option value="doctor">Doctor</option>
          <option value="nurse">Nurse</option>
          <option value="receptionist">Receptionist</option>
        </select>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default SignupPage;
