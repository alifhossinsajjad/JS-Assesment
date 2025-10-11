let num = 153;

let a = Math.floor(num / 100);        // First digit
let b = Math.floor((num / 10) % 10);  // Second digit
let c = num % 10;                     // Third digit

let sum = (a * a * a) + (b * b * b) + (c * c * c);

if (sum === num) {
  console.log("Armstrong");
} else {
  console.log("Not Armstrong");
}