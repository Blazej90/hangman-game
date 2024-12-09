import React from "react";
import "./Hangman.css";

function Hangman({ mistakes, category, language }) {
  return (
    <div className="hangman">
      <img
        src={`/images/hangman/hangman${Math.min(mistakes, 10)}.jpg`}
        alt={`Hangman stage ${mistakes}`}
      />
      <p className="trials">
        {language === "EN"
          ? `Incorrect tries: ${mistakes}/10`
          : `Błędne próby: ${mistakes}/10`}
      </p>
      {category && <p className="category">{category}</p>}
    </div>
  );
}

export default Hangman;
