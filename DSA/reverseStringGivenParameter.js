function reverse(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    result = string[i] + result;
  }
  return result;
}

function reverseString(string, k) {
  if (string.length <= k) {
    return reverse(string);
  }
  let left = 0,
    right = k,
    result = "";
  while (right < string.length) {
    result += reverse(string.substring(left, right));
    right += k;
    left += k;
  }
  result += reverse(string.substring(left));
  return result;
}

console.log(reverseString("abcdefgh", 3));
console.log(reverseString("abcdefghi", 4));