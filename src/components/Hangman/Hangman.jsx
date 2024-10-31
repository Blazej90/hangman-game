import React from "react";

function Hangman({ mistakes }) {
  return <p>Błędne próby: {mistakes}/6</p>;
}

export default Hangman;
