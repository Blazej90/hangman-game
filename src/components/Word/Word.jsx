import React from "react";
import "./Word.css";

function Word({ word, guessedLetters }) {
  const guessedLettersUpper = guessedLetters.map((letter) =>
    letter.toUpperCase()
  );

  return (
    <div className="word">
      {word.split("").map((letter, index) => {
        const displayLetter =
          letter === " "
            ? " "
            : guessedLettersUpper.includes(letter.toUpperCase())
            ? letter
            : "_";

        return (
          <span key={index} className="letter">
            {displayLetter}
          </span>
        );
      })}
    </div>
  );
}

export default Word;
