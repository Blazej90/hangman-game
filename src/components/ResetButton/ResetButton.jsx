import React from "react";
import "./ResetButton.css";

function ResetButton({ onReset }) {
  return (
    <button onClick={onReset} className="reset-button">
      Restart
    </button>
  );
}

export default ResetButton;
