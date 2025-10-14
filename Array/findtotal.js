function totalWordLength(arr) {
  return arr.reduce((sum, word) => sum + word.length, 0);
}
console.log(totalWordLength(["Hi", "JS", "World"]));