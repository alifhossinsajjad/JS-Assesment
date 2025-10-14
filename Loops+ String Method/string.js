let text = "Hello";
let vowels = ["a", "e", "i", "o", "u"];
let result = "";

for (let char of text) {
  if (!vowels.includes(char.toLowerCase())) {
    result += char;
  }
}

console.log(result); 