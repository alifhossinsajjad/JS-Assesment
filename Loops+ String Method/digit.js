let text = "abc123xyz45";
let count = 0;

for (let char of text) {
  if (char >= "0" && char <= "9") {
    count++;
  }
}

console.log("Digits:", count);