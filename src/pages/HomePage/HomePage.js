import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./HomePageStyes.css";
import axios from "axios";

const HomePage = () => {
  const [postText, setPostText] = useState("");

  const sendPost = async () => {
    try {
      const response = await axios.post(
        "https://dual-post-server.herokuapp.com/post",
        {
          post: postText,
        }
      );
      if (response.status === 200) toast.success("Posted!");
      setPostText("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get("https://dual-post-server.herokuapp.com/twitter/getuser")
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="homepage-container">
        <div className="text-area-container">
          <textarea
            id="homepage-text"
            rows="7"
            cols="50"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Enter post here"
            maxLength="280"
            autoFocus
          />
          <p id="char-count">{280 - postText.length}</p>
        </div>
        <div className="homepage-buttons">
          <button onClick={sendPost} id="send-post-btn">
            Post
          </button>
          <a href="https://dual-post-server.herokuapp.com/logout">
            <button id="logout">Logout</button>
          </a>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
