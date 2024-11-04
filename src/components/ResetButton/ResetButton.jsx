import React from "react";

function ResetButton({ onReset }) {
  return (
    <button onClick={onReset} className="reset-button">
      Restart
    </button>
  );
}

export default ResetButton;
