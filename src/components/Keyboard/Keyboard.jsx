import React from "react";
import "./Keybord.css";

const ALPHABET = "aąbcćdeęfghijklłmnoópqrsśtuvwxyzźż".split("");

function Keyboard({ checkLetter, guessedLetters, word, disabled }) {
  return (
    <div className="keyboard">
      {ALPHABET.map((letter) => {
        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = word.includes(letter);
        const buttonColor = isGuessed ? (isCorrect ? "green" : "red") : "";

        return (
          <button
            key={letter}
            onClick={() => checkLetter(letter)}
            disabled={isGuessed || disabled}
            style={{ backgroundColor: buttonColor }}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
