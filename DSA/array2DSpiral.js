const array = [[1, 2, 3, 4], [5, 6, 7, 8],
[9, 10, 11, 12], [13, 14, 15, 16]];

function printArraySpirally(arr) {
  let top = 0, left = 0;
  let right = arr[0].length;
  let bottom = arr.length;
  const result = [];

  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) {
      result.push(arr[top][i]);
    }
    top += 1

    for (let i = top; i < bottom; i++) {
      result.push(arr[i][right - 1]);
    }
    right -= 1;

    if (top < bottom) {
      for (let i = right - 1; i >= left; i--) {
        result.push(arr[bottom - 1][i]);
      }
      bottom -= 1;
    }

    if (left < right) {
      for (let i = bottom - 1; i >= top; i--) {
        result.push(arr[i][left]);
      }
      left += 1;
    }
  }
  return result;
}

console.log(printArraySpirally(array));