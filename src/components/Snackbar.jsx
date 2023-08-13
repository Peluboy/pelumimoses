import React, { useState } from "react";

const Snackbar = ({ message }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return show ? (
    <div className="snackbar">
      <p>{message}</p>
      <button onClick={handleClose}>Close</button>
    </div>
  ) : null;
};

export default Snackbar;
