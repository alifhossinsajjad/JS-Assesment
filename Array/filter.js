function filterStrings(arr) {
  return arr.filter(el => typeof el === "string");
}
console.log(filterStrings([1, "apple", true, "banana"]));