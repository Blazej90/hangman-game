const easyWords = {
  Zwierzęta: ["cat", "dog", "fish"],
  Warzywa: ["carrot", "onion", "potato"],
  Owoce: ["apple", "banana", "cherry"],
};

const mediumWords = {
  "Marki samochodów": ["BMW", "Toyota", "Ford"],
  "Znani sportowcy": ["Jordan", "Kobe", "Messi"],
};

const hardWords = {
  "Przysłowia Polskie": ["nie ma róży bez kolców", "coś na ząb"],
  "Tytuły filmów": ["inception", "titanic", "matrix"],
};

export function getRandomWord(level) {
  let wordList;

  if (level === "easy") {
    wordList = easyWords;
  } else if (level === "medium") {
    wordList = mediumWords;
  } else {
    wordList = hardWords;
  }

  const categories = Object.keys(wordList);
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];

  const wordsInCategory = wordList[randomCategory];
  const randomWord =
    wordsInCategory[Math.floor(Math.random() * wordsInCategory.length)];

  return { word: randomWord.toUpperCase(), category: randomCategory };
}
