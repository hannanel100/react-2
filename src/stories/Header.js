import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />
      </div>
      <div className="header__right">
        <h2>Buttons goes here</h2>
      </div>
    </div>
  );
};

export default Header;
