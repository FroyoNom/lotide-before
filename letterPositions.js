const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Passed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(string) {
  results = {};

  for (letters of string) {
    results[letters] = [];
  }

  for (result in results) {
    for (let i = 0; i < string.length; i++) {
      if (result === string[i]) {
        results[result].push(i);
      }
    }
  }
  return results;
};

assertArrayEqual(letterPositions("hello").l, [2, 3]);
