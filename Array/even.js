function countEven(arr) {
  return arr.filter(num => num % 2 === 0).length;
}
console.log(countEven([1, 2, 3, 4, 6]));
