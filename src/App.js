import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { FaTwitter, FaLinkedin, FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const App = () => {
  const [twitterAuthed, setTwitterAuthed] = useState(false);
  const [linkedinAuthed, setLinkedInAuth] = useState(false);
  const [twitterUserData, setTwitterData] = useState({});
  const [linkedInData, setLinkedInData] = useState({});
  const [post, setPost] = useState("");

  useEffect(() => {
    async function getTwitterUser() {
      let twitterUser = await axios.get(
        "http://localhost:3001/twitter/getuser"
      );
      const response = await twitterUser;

      if (response.data.twitterUser !== null) {
        setTwitterAuthed(true);
      }

      setTwitterData(response.data);
    }
    getTwitterUser();

    async function getLinkedInUser() {
      let linkedInUser = await axios.get(
        "http://localhost:3001/linkedin/getuser"
      );
      const res = await linkedInUser;

      console.log(res);
      if (res.data.linkedInUser !== null) {
        setLinkedInAuth(true);
      }

      setLinkedInData(res.data);
    }
    getLinkedInUser();
  }, []);

  console.log(twitterUserData);
  console.log(linkedInData);

  const sendPost = async (e) => {
    e.preventDefault();
    const linkedInResponse = await axios.post(
      "http://localhost:3001/linkedin/share",
      { post }
    );
    const twitterResponse = await axios.post(
      "http://localhost:3001/twitter/post",
      { post }
    );

    console.log(twitterResponse);
    console.log(linkedInResponse);

    console.log(post);
  };

  const logout = async (e) => {
    e.preventDefault();
    await axios.get("http://localhost:3001/logout");
    setLinkedInAuth(false);
    setTwitterAuthed(false);
  };

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

      {twitterAuthed && linkedinAuthed ? (
        <div className="post-container">
          <form className="post-form" onSubmit={sendPost}>
            <label htmlFor="postFormText" aria-readonly />

            <textarea
              id="post-form-text"
              aria-label="enter post"
              name="postFormText"
              rows="6"
              cols="90"
              maxLength="280"
              placeholder="Enter your post"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            ></textarea>

            <button type="submit">Dual Post</button>
          </form>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div className="auth-container">
          <div className="twitter-container">
            <a href="http://localhost:3001/auth/twitter/login">
              <div id="twitter-div">
                <FaTwitter /> <hr /> <p>Sign in with Twitter</p>
              </div>
            </a>

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
            <a href="http://localhost:3001/auth/linkedin/login">
              <div id="linkedin-div">
                <FaLinkedin /> <hr /> <p>Sign in with LinkedIn</p>
              </div>
            </a>

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
