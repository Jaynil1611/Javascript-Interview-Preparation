const string = 'Javascript is awesome!';

function mySplit(string, separator) {
  const resultArray = [];
  let word = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== separator) {
      word += string[i];
    } else {
      resultArray.push(word);
      word = "";
    }
  }
  resultArray.push(word);
  return resultArray;
}

console.log(mySplit(string, " "));