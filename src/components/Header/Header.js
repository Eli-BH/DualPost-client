import React from "react";
import "./HeaderStyles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-dual">
        <h1>Dual</h1>
      </div>
      <div className="header-post">
        <h1>Post</h1>
      </div>
    </div>
  );
};

export default Header;
