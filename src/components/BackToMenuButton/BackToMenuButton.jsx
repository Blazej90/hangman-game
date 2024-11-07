import React from "react";
import "./BackToMenuButton.css";

function BackToMenuButton({ onBackToMenu }) {
  return (
    <button className="back-to-menu-button" onClick={onBackToMenu}>
      Strona główna
    </button>
  );
}

export default BackToMenuButton;
