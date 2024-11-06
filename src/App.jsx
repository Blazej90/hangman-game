import React, { useState, useEffect } from "react";
import Hangman from "./components/Hangman/Hangman.jsx";
import Keyboard from "./components/Keyboard/Keyboard.jsx";
import Word from "./components/Word/Word.jsx";
import ResetButton from "./components/ResetButton/ResetButton.jsx";
import { getRandomWord } from "./utils/words.js";

import "./App.css";

function App() {
  // Stany gry
  const [word, setWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameStatus, setGameStatus] = useState(null);
  const maxMistakes = 10;

  useEffect(() => {
    checkGameStatus();
  }, [guessedLetters, mistakes]);

  // Funkcja resetująca stan gry
  function resetGame() {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setMistakes(0);
    setGameStatus(null);
  }

  // Funkcja sprawdzająca, czy gra jest wygrana lub przegrana
  function checkGameStatus() {
    if (word.split("").every((letter) => guessedLetters.includes(letter))) {
      setGameStatus("win");
    } else if (mistakes >= maxMistakes) {
      setGameStatus("lose");
    }
  }

  // Obsługa kliknięcia przycisku litery
  function checkLetter(letter) {
    if (gameStatus) return;

    if (word.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
    } else {
      setMistakes((prev) => prev + 1);
    }
  }

  return (
    <div className="App">
      <Hangman mistakes={mistakes} />
      <Word word={word} guessedLetters={guessedLetters} />

      {gameStatus === "win" && (
        <p className="win">Brawo! To jest poprawne hasło</p>
      )}
      {gameStatus === "lose" && (
        <p className="lose">
          Niestety przegrywasz... Prawidłowe hasło to: {word}
        </p>
      )}

      <Keyboard
        checkLetter={checkLetter}
        guessedLetters={guessedLetters}
        word={word}
        disabled={gameStatus !== null}
      />
      <ResetButton onReset={resetGame} />
    </div>
  );
}

export default App;
