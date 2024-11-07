import React from "react";
import "./Word.css";

function Word({ word, guessedLetters }) {
  return (
    <div className="word">
      {word.split("").map((letter, index) => (
        <span key={index} className="letter">
          {letter === " "
            ? " "
            : guessedLetters.includes(letter.toLowerCase())
            ? letter
            : "_"}
        </span>
      ))}
    </div>
  );
}

export default Word;
