const words = ["apple", "banana", "cherry", "orange", "grape", "mango"];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
