const array = [1, 3, 5, 4, 2, 4];

function findNonRepeatedNumber(arr) {
  let result = 0;
  for (let index in array) {
    result ^= arr[index] ^ index;
  }
  return result;
}

console.log(findNonRepeatedNumber(array));