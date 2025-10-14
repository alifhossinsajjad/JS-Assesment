function countSpecialChars(str) {
  let count = 0;
  for (let char of str) {
    if (!((char >= 'a' && char <= 'z') || 
          (char >= 'A' && char <= 'Z') || 
          (char >= '0' && char <= '9'))) {
      count++;
    }
  }
  return count;
}

console.log(countSpecialChars("Hi@JS#123"));