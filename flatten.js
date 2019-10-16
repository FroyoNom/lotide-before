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

function flatten(arr) {
  return arr.reduce(function flat(r, a) {
    return (Array.isArray(a) && a.reduce(flat, r)) || r.concat(a);
  }, []);
}

console.log(flatten([1, [2], [3, [[4]]]]));
