import "./darkMode.css";

import React from "react";

const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <lable className="toggle-theme" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round"></div>
      </lable>
      <span>🌒</span>
    </div>
  );
};

export default DarkMode;
