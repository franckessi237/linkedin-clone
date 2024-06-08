import React, { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import LinkedinLogo from "../assets/linkedinLogo.png";
import "../Sass/LoginComponent.scss";
import GoogleButton from 'react-google-button'
import { useNavigate } from "react-router-dom"; // Import de useNavigate
import { toast } from "react-toastify";

export default function LoginComponent() {
  const navigate = useNavigate(); // Utilisation de useNavigate
  const [credentials, setCredentials] = useState({});

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success("Login successful");
      navigate("/home");
    } catch (err) {
      toast.error("Login failed");
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
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
          <button onClick={login} className="login-btn">
            Sign in
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
          New to LinkedIn? <span className="join-now" onClick={() => navigate('/register')}>
            Join now
            </span>
        </p>
      </div>
    </div>
  );
}
