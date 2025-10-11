let num = 21;

(num % 3 === 0 && num % 7 === 0)
  ? console.log("Multiple of both 3 and 7")
  : (num % 3 === 0)
  ? console.log("Multiple of 3")
  : (num % 7 === 0)
  ? console.log("Multiple of 7")
  : console.log("Not a multiple of 3 or 7");