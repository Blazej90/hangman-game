import React, { useState } from "react";
import Hangman from "./components/Hangman/Hangman.jsx";
import Keyboard from "./components/Keyboard/Keyboard.jsx";
import Word from "./components/Word/Word.jsx";
import ResetButton from "./components/ResetButton/ResetButton.jsx";
import BackToMenuButton from "./components/BackToMenuButton/BackToMenuButton.jsx";
import TitleScreen from "./components/TitleScreen/TitleScreen.jsx";
import LanguageSwitch from "./components/LanguageSwitch/LanguageSwitch.jsx";
import { getRandomWord } from "./utils/words.js";

import "./App.css";

function App() {
  const [language, setLanguage] = useState("PL");
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameStatus, setGameStatus] = useState(null);
  const maxMistakes = 10;

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "PL" ? "EN" : "PL"));
  };

  function startGame(selectedDifficulty) {
    setDifficulty(selectedDifficulty);
    const { word, category } = getRandomWord(selectedDifficulty, language);
    if (!word) {
      console.error("Nie udało się znaleźć słowa. Sprawdź dane JSON.");
      return;
    }
    setWord(word.toUpperCase());
    setCategory(category);
    setGuessedLetters([]);
    setMistakes(0);
    setGameStatus(null);
    setGameStarted(true);
  }

  function resetGame() {
    const { word, category } = getRandomWord(difficulty, language);
    if (!word) {
      console.error("Nie udało się znaleźć słowa. Sprawdź dane JSON.");
      return;
    }
    setWord(word.toUpperCase());
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
    const upperCaseLetter = letter.toUpperCase();

    if (gameStatus) return;

    if (word.includes(upperCaseLetter)) {
      if (!guessedLetters.includes(upperCaseLetter)) {
        setGuessedLetters((prev) => [...prev, upperCaseLetter]);
      }
    } else {
      setMistakes((prev) => prev + 1);
    }
  }

  React.useEffect(() => {
    if (gameStarted) {
      checkGameStatus();
    }
  }, [guessedLetters, mistakes, gameStarted]);

  return (
    <div className="App">
      <LanguageSwitch language={language} toggleLanguage={toggleLanguage} />

      {gameStarted ? (
        <>
          <Hangman
            mistakes={mistakes}
            category={category}
            language={language}
          />
          <Word word={word} guessedLetters={guessedLetters} />
          {gameStatus === "win" && (
            <p className="win">
              {language === "EN"
                ? "Congratulations! You guessed the word."
                : "Brawo! To jest poprawne hasło."}
            </p>
          )}
          {gameStatus === "lose" && (
            <p className="lose">
              {language === "EN"
                ? `Sorry, you lost... The correct word: ${word}`
                : `Niestety przegrywasz... Prawidłowe hasło: ${word}`}
            </p>
          )}
          <Keyboard
            checkLetter={checkLetter}
            guessedLetters={guessedLetters}
            word={word}
            disabled={gameStatus !== null}
          />
          <div className="button-group">
            <ResetButton onReset={resetGame} language={language} />
            <BackToMenuButton onBackToMenu={backToMenu} language={language} />
          </div>
        </>
      ) : (
        <TitleScreen
          onSelectDifficulty={startGame}
          language={language}
          toggleLanguage={toggleLanguage}
        />
      )}
    </div>
  );
}

export default App;
