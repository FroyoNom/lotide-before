const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("hi", "hi");
assertEqual(1, 1);
assertEqual(1, 3);
