import React from "react";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

function Keyboard({ checkLetter, disabled }) {
  return (
    <div>
      {ALPHABET.map((letter) => (
        <button
          key={letter}
          onClick={() => checkLetter(letter)}
          disabled={disabled}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
