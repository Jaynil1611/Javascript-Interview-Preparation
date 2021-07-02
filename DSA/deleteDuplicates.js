/*
Given an array containing all kinds of data, implement a function deduplicate() to remove the duplicates. You should modify the array in place.
*/

function removeDuplicates(arr) {
  const hashmap = new Map();
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const key = JSON.stringify(arr[left]);
    if (hashmap[key]) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      right -= 1;
    } else {
      hashmap[key] = true;
      left += 1;
    }
  }
  arr.splice(right + 1);
  return arr;
}

console.log(removeDuplicates([1, 2, 3, 3, 4, { a: 5 }, { a: 5 }]));
// Getting the requirements of all kinds of data