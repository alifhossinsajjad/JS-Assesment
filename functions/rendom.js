function randomOddNumber() {
  let num;
  do {
    num = Math.floor(Math.random() * 50) + 1;
  } while (num % 2 === 0);
  return num;
}

console.log("Random Odd Number:", randomOddNumber());
