import React from "react";
import "./Hangman.css";

function Hangman({ mistakes }) {
  const imagePath = `/src/assets/images/hangman${Math.min(mistakes, 10)}.jpg`;

  return (
    <div className="hangman">
      <img src={imagePath} alt={`Hangman stage ${mistakes}`} />
      <p className="trials">Błędne próby: {mistakes}/10</p>
    </div>
  );
}

export default Hangman;
