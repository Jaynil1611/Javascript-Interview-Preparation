function findRunningFrequencies(string) {
  if (!string) {
    return string;
  }
  let resultString = "";
  let count = 1;
  for (let i = 1; i <= string.length; i++) {
    if (string[i] === string[i - 1]) {
      count += 1;
    } else {
      resultString += string[i - 1] + count;
      count = 1;
    }
  }
  return resultString;
}

console.log(findRunningFrequencies("1111333"));