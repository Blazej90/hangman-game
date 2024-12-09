import React from "react";
import "./TitleScreen.css";

function TitleScreen({ onSelectDifficulty, language }) {
  return (
    <div className="title-screen">
      <h1>{language === "EN" ? "Hangman Game" : "Gra Wisielec"}</h1>
      <div className="difficulty-buttons">
        <button onClick={() => onSelectDifficulty("easy")}>
          {language === "EN" ? "Easy" : "Łatwy"}
        </button>
        <button onClick={() => onSelectDifficulty("medium")}>
          {language === "EN" ? "Medium" : "Średni"}
        </button>
        <button onClick={() => onSelectDifficulty("hard")}>
          {language === "EN" ? "Hard" : "Trudny"}
        </button>
      </div>
    </div>
  );
}

export default TitleScreen;
