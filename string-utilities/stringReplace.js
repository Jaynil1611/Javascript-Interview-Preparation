function checkSubString(string, index, pattern) {
  for (let i = index, count = 0; i < string.length && count < pattern.length; i++ , count++) {
    if (string[i] !== pattern[count]) {
      return false;
    }
  }
  return true;
}

function getSubstring(string, start, end) {
  let resultString = "";
  for(let i = start; i < end && i < string.length ; i++){
    resultString+= string[i];
  }
  return resultString;
};

function myStringReplace(originalString, pattern, replaceString, replaceAll) {
  let resultString = originalString;
  for (let i = 0; i < originalString.length; i++) {
    if (checkSubString(resultString, i, pattern)) {
      resultString = getSubstring(resultString, 0, i) + replaceString + getSubstring(resultString, i + pattern.length, resultString.length);
      // console.log(resultString);
    }
  }
  return resultString;
}

console.log(myStringReplace('Javascript is awesome!', 'awesome', 'amazing', true));