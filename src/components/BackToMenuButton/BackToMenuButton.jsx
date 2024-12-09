import React from "react";
import "./BackToMenuButton.css";

function BackToMenuButton({ onBackToMenu, language }) {
  return (
    <button className="back-to-menu-button" onClick={onBackToMenu}>
      {language === "EN" ? "Home" : "Strona główna"}
    </button>
  );
}

export default BackToMenuButton;
