import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaCheck } from "react-icons/fa";

import axios from "axios";
import "./LoginPageStyles.css";

const LoginPage = () => {
  const [authed, setAuthed] = useState(false);
  const [twitterAuthed, setTwitterAuthed] = useState(false);
  const [linkedinAuthed, setLinkedinAuthed] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/twitter/getuser")
      .then((res) => {
        if (res.data.linkedInUser.user && res.data.twitterUser.user) {
          setAuthed(true);
        }
        if (res.data.linkedInUser.user) setLinkedinAuthed(true);
        if (res.data.twitterUser.user) setTwitterAuthed(true);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      {authed && <Redirect to="/home" />}
      <div className="login-container">
        <h3>Please login with both Twitter and LinkedIn</h3>
        <div className="button-container">
          <a href="http://localhost:3001/auth/twitter/login">
            <div className="twitter-button">
              <FaTwitter id="fa-twitter" />
              <hr />
              <p>Login with Twitter</p>
            </div>
          </a>
          <FaCheck className={twitterAuthed ? "fa-check show" : "fa-check"} />
        </div>

        <div className="login-divider"></div>
        <div className="button-container">
          <a href="http://localhost:3001/auth/linkedin/login">
            <div className="linkedin-button">
              <FaLinkedin id="fa-linkedin" />
              <hr />
              <p>Login with LinkedIn</p>
            </div>
          </a>
          <FaCheck className={linkedinAuthed ? "fa-check show" : "fa-check"} />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
