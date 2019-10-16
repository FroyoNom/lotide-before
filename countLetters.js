const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const noSpaces = string
    .split(" ")
    .join("")
    .toLowerCase("");
  const result = {};

  for (const letter of noSpaces) {
    if (!result[letter]) result[letter] = 0;
    result[letter] + 1;
  }
  return result;
};
