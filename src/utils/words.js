import wordsPL from "../data/words_PL.json";
import wordsEN from "../data/words_EN.json";

export function getRandomWord(difficulty, language) {
  const words = language === "PL" ? wordsPL : wordsEN;

  if (!words || !words[difficulty]) {
    console.error(
      `Brak danych dla trudności: ${difficulty} w języku: ${language}`
    );
    return { word: "", category: "" };
  }

  const categories = Object.keys(words[difficulty]);
  if (categories.length === 0) {
    console.error(
      `Brak kategorii dla trudności: ${difficulty} w języku: ${language}`
    );
    return { word: "", category: "" };
  }

  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const randomWords = words[difficulty][randomCategory];

  if (!randomWords || randomWords.length === 0) {
    console.error(
      `Brak słów w kategorii: ${randomCategory} dla trudności: ${difficulty} w języku: ${language}`
    );
    return { word: "", category: "" };
  }

  const randomWord =
    randomWords[Math.floor(Math.random() * randomWords.length)];

  return { word: randomWord, category: randomCategory };
}
