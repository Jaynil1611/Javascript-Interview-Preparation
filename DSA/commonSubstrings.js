const string1 = 'HI';
const string2 = 'ALL';

function findCommonString(str1, str2) {
  const stringMap = new Map();
  let resultString = '';
  for (let char of str1) {
    stringMap[char] = true;
  }

  for (let char of str2) {
    if (stringMap[char]) {
      resultString += char
    }
  }
  return resultString.length > 0 ? resultString : false;
}

console.log(findCommonString(string1, string2));