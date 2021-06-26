const arr1 = [1, 3, 5, 2, 0, 7];
const arr2 = [3, 2, 0];

// subset of arrays in order
const checkArraySubset = (arr1, arr2) => {
  const arr1Values = new Map();
  arr1.map((value, index) => (arr1Values[value] = index));

  let result = true;
  for (let i = 1; i <= arr2.length; i++) {
    if (arr1Values[arr2[i - 1]] > arr1Values[arr2[i]]) {
      result = false;
    }
  }
  return result;
};

console.log(checkArraySubset(arr1, arr2));
// Avoid use of in-built array functions like sort, filter, etc
// Check before using them with the interviewer
