import React from "react";

function Hangman({ mistakes }) {
  const imagePath = `/src/assets/images/hangman${Math.min(mistakes, 10)}.jpg`;

  return (
    <div className="hangman">
      <img src={imagePath} alt={`Hangman stage ${mistakes}`} />
      <p>Błędne próby: {mistakes}/10</p>
    </div>
  );
}

export default Hangman;
