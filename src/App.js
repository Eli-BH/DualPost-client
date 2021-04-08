import React, { useState } from "react";
import "./App.css";

import { FaTwitter, FaLinkedin, FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const App = () => {
  const [twitterAuthed, setTwitterAuthed] = useState(false);
  const [linkedinAuthed, setLinkedInAuth] = useState(false);
  const [user, setUser] = useState(false);
  return (
    <div className="app">
      <div className="header">
        <div className="multi">
          <p>Dual</p>
        </div>
        <div className="post">
          <p>Post</p>
        </div>
      </div>

      {user ? (
        <div className="post-container">
          <h1>Post Form</h1>
        </div>
      ) : (
        <div className="auth-container">
          <div className="twitter-container">
            <div id="twitter-div">
              <FaTwitter /> <hr /> <p>Sign in with Twitter</p>
            </div>
            <div id="authed">
              {twitterAuthed ? (
                <FaCheck style={{ color: "#41e641" }} />
              ) : (
                <ImCross style={{ color: "#ff3c3c" }} />
              )}
            </div>
          </div>
          <div id="break"></div>
          <div className="linkedin-container">
            <div id="linkedin-div">
              <FaLinkedin /> <hr /> <p>Sign in with LinkedIn</p>
            </div>

            <div id="authed">
              {linkedinAuthed ? (
                <FaCheck style={{ color: "#41e641" }} />
              ) : (
                <ImCross style={{ color: "#ff3c3c" }} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
