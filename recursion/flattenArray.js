const array = [1, [2, [3, 4], 5], 6];

function flattenArray(arr) {
  if (!arr.length) {
    return arr;
  }
  function recurseFlatten(arr, index, flattenedArray) {
    if (index === arr.length) {
      return flattenedArray;
    }
    if (!Array.isArray(arr[index])) {
      flattenedArray.push(arr[index]);
    }
    else {
      flattenedArray = flattenedArray.concat(recurseFlatten(arr[index], 0, []));
    }
    return recurseFlatten(arr, index + 1, flattenedArray);
  }
  return recurseFlatten(arr, 0, []);
};

console.log(flattenArray(array));


function flattenArrayDepth(arr, depth = 1) {
  if (!arr.length) {
    return arr;
  }
  function recurseFlatten(arr, index, flattenedArray, depth) {    
    if (index === arr.length) {
      return flattenedArray;
    }
    if (depth < 0) {
      flattenedArray.push(arr)
      return flattenedArray;
    }
    if (!Array.isArray(arr[index])) {
      flattenedArray.push(arr[index]);
    }
    else {
      flattenedArray = flattenedArray.concat(recurseFlatten(arr[index], 0, [], depth - 1));
    }
    return recurseFlatten(arr, index + 1, flattenedArray, depth);
  }
  return recurseFlatten(arr, 0, [], depth);
};

console.log(flattenArrayDepth(array, 1));