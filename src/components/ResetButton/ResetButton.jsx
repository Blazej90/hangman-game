import React from "react";
import "./ResetButton.css";

function ResetButton({ onReset, language }) {
  return (
    <button onClick={onReset} className="reset-button">
      {language === "EN" ? "Restart" : "Uruchom ponownie"}
    </button>
  );
}

export default ResetButton;
