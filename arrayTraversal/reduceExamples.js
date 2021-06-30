// Find the number of strings with similar number of characters .

const inputArray = ["apple", "orange", "mango", "papaya", "banana", "pomegranate"];

const stringMapping = inputArray.reduce((lengthToStringMap, inputString) => {
  const stringLength = inputString.length;
  if (stringLength in lengthToStringMap) {
    lengthToStringMap[stringLength] += 1
  } else {
    lengthToStringMap[stringLength] = 1
  }
  return lengthToStringMap;
}, {});

console.log(stringMapping);