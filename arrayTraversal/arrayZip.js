function zip(arr1, arr2) {
  const maxLength = Math.max(arr1.length, arr2.length);
  const resultArray = new Array(maxLength).fill().map((_, index) => [arr1[index], arr2[index]]);
  return resultArray;
}

const arr1 = [1, 4, 1, 1, 88, 9];

const arr2 = [18, 22, 50, 6];

console.log(zip(arr1, arr2));
