let sentence = "   Hello   JS  ";

let trimmed = sentence.trim();

let cleaned = trimmed.replaceAll("  ", " ");
while (cleaned.includes("  ")) {
  cleaned = cleaned.replaceAll("  ", " ");
}
console.log(cleaned);