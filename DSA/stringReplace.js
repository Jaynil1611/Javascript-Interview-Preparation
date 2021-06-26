function getSubString(string, start, length) {
  let output = '';
  for (let i = start; i < start + length; i++) {
    output += string[i];
  }
  return output;
}

function myReplace(input, pattern, newPattern, replaceAll = true) {
  let output = "";
  let flag = true;
  for (let i = 0; i < input.length; i++) {
    if (flag && input[i] === pattern[0]) {
      if (getSubString(input, i, pattern.length) === pattern) {
        output += newPattern;
        i += pattern.length - 1;
        flag = replaceAll;
      }
    }
    else {
      output += input[i];
    }
  }
  return output;
}