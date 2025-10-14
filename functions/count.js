function countWords(sentence) {
  let count = 0;
  let inWord = false;
  
  for (let char of sentence) {
    if (char !== " " && !inWord) {
      inWord = true;
      count++;
    } else if (char === " ") {
      inWord = false;
    }
  }
  
  return count;
}

console.log(countWords("I love coding"));