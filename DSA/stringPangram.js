const string = "A quick brown fox jumps over the little lazy dog";

const checkPangram = (string) => {
  const characterArray = Array(26).fill(false);
  for (let i = 0; i < string.length; i++) {
    const value = string[i].toLowerCase().charCodeAt(0) - 97;
    characterArray[value] = true;
  }
  return characterArray.reduce((result, value) => {
    return result && value;
  }, true);
};

console.log(checkPangram(string));
