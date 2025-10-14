let sentence = "I love programming";


let words = sentence.split(" ");

let longestWord = "";


for (let word of words) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}

console.log(longestWord);