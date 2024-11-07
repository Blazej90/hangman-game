const easyWords = ["cat", "dog", "fish"];
const mediumWords = ["house", "garden", "school"];
const hardWords = ["encyclopedia", "psychology", "parliament"];

export function getRandomWord(level) {
  const wordList =
    level === "easy" ? easyWords : level === "medium" ? mediumWords : hardWords;
  return wordList[Math.floor(Math.random() * wordList.length)];
}
