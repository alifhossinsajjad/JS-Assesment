function removeDigits(str) {
  let result = "";
  for (let char of str) {
    if (!(char >= '0' && char <= '9')) {
      result += char;
    }
  }
  return result;
}

console.log(removeDigits("abc123xyz")); 