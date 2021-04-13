import React from "react";

import { FaTwitter, FaLinkedin } from "react-icons/fa";

import "./LoginPageStyles.css";
const LoginPage = () => {
  return (
    <>
      <div className="login-container">
        <h3>Please login with both Twitter and LinkedIn</h3>
        <div className="twitter-button">
          <FaTwitter id="fa-twitter" />
          <hr />
          <p>Login with Twitter</p>
        </div>
        <div className="login-divider"></div>
        <div className="linkedin-button">
          <FaLinkedin id="fa-linkedin" />
          <hr />
          <p>Login with LinkedIn</p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
