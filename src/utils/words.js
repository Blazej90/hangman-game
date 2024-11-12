import wordData from "../data/words.json";

export function getRandomWord(level) {
  let wordList;

  if (level === "easy") {
    wordList = wordData.easyWords;
  } else if (level === "medium") {
    wordList = wordData.mediumWords;
  } else {
    wordList = wordData.hardWords;
  }

  const categories = Object.keys(wordList);
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];

  const wordsInCategory = wordList[randomCategory];
  const randomWord =
    wordsInCategory[Math.floor(Math.random() * wordsInCategory.length)];

  return { word: randomWord.toUpperCase(), category: randomCategory };
}
