import React, { useState } from "react";
import Word from "./components/Word/Word";
import Keyboard from "./components/Keyboard/Keyboard";
import Hangman from "./components/Hangman/Hangman";

const WORDS = ["javascript", "react", "vite", "frontend"];

function App() {
  const [word] = useState(WORDS[Math.floor(Math.random() * WORDS.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);

  const checkLetter = (letter) => {
    if (guessedLetters.includes(letter) || mistakes >= 6) return;

    if (!word.includes(letter)) {
      setMistakes(mistakes + 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
  };

  const isGameOver = mistakes >= 6;
  const isGameWon = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  return (
    <div className="App">
      <Hangman mistakes={mistakes} />
      <Word word={word} guessedLetters={guessedLetters} />
      <Keyboard checkLetter={checkLetter} disabled={isGameOver || isGameWon} />
      {isGameOver && <p>Przegrałeś! Słowo to: {word}</p>}
      {isGameWon && <p>Gratulacje, wygrałeś!</p>}
    </div>
  );
}

export default App;
