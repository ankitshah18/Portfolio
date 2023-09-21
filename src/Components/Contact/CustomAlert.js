import React from "react";
import "./CustomAlert.css";

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <p>{message}</p>
      <button onClick={onClose}>Ok</button>
    </div>
  );
};

export default CustomAlert;
