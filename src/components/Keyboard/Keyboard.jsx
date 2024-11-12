import React from "react";
import "./Keybord.css";

const ALPHABET = "AĄBCĆDEĘFGHIJKLŁMNOÓPQRSŚTUVWXYZŻ".split("");

function Keyboard({ checkLetter, guessedLetters, word, disabled }) {
  return (
    <div className="keyboard">
      {ALPHABET.map((letter) => {
        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = word.toUpperCase().includes(letter);

        const buttonClass = isGuessed
          ? isCorrect
            ? "correct"
            : "incorrect"
          : "";

        return (
          <button
            key={letter}
            onClick={() => checkLetter(letter)}
            disabled={isGuessed || disabled}
            className={buttonClass}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
