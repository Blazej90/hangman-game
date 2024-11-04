import React from "react";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

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
            disabled={isGuessed || disabled} // Blokujemy przycisk, jeśli litera była zgadywana
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
