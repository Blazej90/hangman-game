import React, { useState, useEffect } from "react";
import Hangman from "./components/Hangman/Hangman.jsx";
import Keyboard from "./components/Keyboard/Keyboard.jsx";
import Word from "./components/Word/Word.jsx";
import ResetButton from "./components/ResetButton/ResetButton.jsx";
import BackToMenuButton from "./components/BackToMenuButton/BackToMenuButton.jsx";
import TitleScreen from "./components/TitleScreen/TitleScreen.jsx";
import { getRandomWord } from "./utils/words.js";

import "./App.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameStatus, setGameStatus] = useState(null);
  const maxMistakes = 10;

  function startGame(selectedDifficulty) {
    setDifficulty(selectedDifficulty);
    const { word, category } = getRandomWord(selectedDifficulty);
    setWord(word);
    setCategory(category);
    setGuessedLetters([]);
    setMistakes(0);
    setGameStatus(null);
    setGameStarted(true);
  }

  function resetGame() {
    const { word, category } = getRandomWord(difficulty);
    setWord(word);
    setCategory(category);
    setGuessedLetters([]);
    setMistakes(0);
    setGameStatus(null);
  }

  function backToMenu() {
    setGameStarted(false);
    setDifficulty(null);
    setCategory(null);
    setGuessedLetters([]);
    setMistakes(0);
    setGameStatus(null);
  }

  function checkGameStatus() {
    const wordWithoutSpaces = word.replace(/\s+/g, "").toLowerCase();
    const guessedLettersLower = guessedLetters.map((letter) =>
      letter.toLowerCase()
    );

    if (
      wordWithoutSpaces
        .split("")
        .every((letter) => guessedLettersLower.includes(letter))
    ) {
      setGameStatus("win");
    } else if (mistakes >= maxMistakes) {
      setGameStatus("lose");
    }
  }

  function checkLetter(letter) {
    const lowerCaseLetter = letter.toLowerCase();

    if (gameStatus) return;

    if (word.toLowerCase().includes(lowerCaseLetter)) {
      if (!guessedLetters.includes(lowerCaseLetter)) {
        setGuessedLetters((prev) => [...prev, lowerCaseLetter]);
      }
    } else {
      setMistakes((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (gameStarted) {
      checkGameStatus();
    }
  }, [guessedLetters, mistakes, gameStarted]);

  return (
    <div className="App">
      {gameStarted ? (
        <>
          <h1>Hangman</h1>
          <Hangman mistakes={mistakes} category={category} />{" "}
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
          <div className="button-group">
            <ResetButton onReset={resetGame} />
            <BackToMenuButton onBackToMenu={backToMenu} />
          </div>
        </>
      ) : (
        <TitleScreen onSelectDifficulty={startGame} />
      )}
    </div>
  );
}

export default App;
