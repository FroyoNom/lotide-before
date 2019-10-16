const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Passed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(array) {
  let mid = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return [array[mid - 1], array[mid]];
  } else {
    return [array[mid]];
  }
};

console.log(middle([1, 2, 8, 3, 5, 6])); // => [8, 2]
console.log(middle([1, 2, 1, 5, 6])); // => [8]
