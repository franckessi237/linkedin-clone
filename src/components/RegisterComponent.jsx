import React, { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import LinkedinLogo from "../assets/linkedinLogo.png";
import "../Sass/LoginComponent.scss";
import GoogleButton from 'react-google-button'
import { useNavigate } from "react-router-dom"; // Import de useNavigate
import { toast } from "react-toastify";

export default function RegisterComponent() {
  const navigate = useNavigate(); // Utilisation de useNavigate
  const [credentials, setCredentials] = useState({});

  const login = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account created successfully");
      navigate("/home");
    } catch (err) {
      toast.error("Account creation failed");
    }
  };

  const googleSignIn = async () => {
    let response = await GoogleSignInAPI();
    navigate("/home");
  }

  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" alt="LinkedIn Logo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Sign up</h1>
        <p className="sub-heading">Make the most of your professional life</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone number "
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password (6 or more characters)"
          />
          <button onClick={login} className="login-btn">
            Agree & Join 
          </button>
        </div>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <GoogleButton 
          className="google-btn"
          onClick={googleSignIn} 
        />
        <p className="go-to-signup">
          Already on LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
