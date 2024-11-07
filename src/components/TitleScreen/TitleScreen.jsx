import React from "react";
import "./TitleScreen.css";

function TitleScreen({ onSelectDifficulty }) {
  return (
    <div className="title-screen">
      <h1>Hangman Game</h1>
      <div className="difficulty-buttons">
        <button onClick={() => onSelectDifficulty("easy")}>Łatwy</button>
        <button onClick={() => onSelectDifficulty("medium")}>Średni</button>
        <button onClick={() => onSelectDifficulty("hard")}>Trudny</button>
      </div>
    </div>
  );
}

export default TitleScreen;
