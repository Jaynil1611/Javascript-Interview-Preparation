const array = [
  1, 2, 3,
  [4],
  [5, 6, [7], [8, [9, [10]]]],
  11, 12, 13,
  [14, [[[[[15, [16]]]]]]],
  17, 18,
  [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
];

function flatten(depth = 1) {
  function flattenedArray(arr, d) {
    return arr.reduce((result, currentValue) => {
      if (d > 0) {
        return result.concat(Array.isArray(currentValue) ? flattenedArray(currentValue, d - 1) : currentValue)
      }
      result.push(currentValue)
      return result;
    }, []);
  }
  return flattenedArray(this, depth);
}

Array.prototype.flatten = flatten;

console.log(JSON.stringify(array.flatten(15)));