import React from "react";
import "../styles/alert.css";

const Alert = ({ type, message }) => {
  return (
    <div className={`alert alert-${type}`}>
      <i fas fa-info-circle></i>
      {message}
    </div>
  );
};

export default Alert;
