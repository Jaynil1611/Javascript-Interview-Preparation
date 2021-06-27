// ---------------------------- capitalize -------------------------

function capitalize(string) {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : string;
}

console.log(capitalize('javascript is awesome!'));

// ---------------------------- toUpperCase -------------------------

function toUpperCase(string) {
  let resultString = "";
  for (let char of string) {
    const charCode = char.charCodeAt();
    if (97 <= charCode && charCode <= 122) {
      resultString += String.fromCharCode(charCode - 32);
    }
    else {
      resultString += char;
    }
  }
  return resultString;
}

console.log(toUpperCase('javascript is awesome!'));

// ---------------------------- toLowerCase -------------------------

function toLowerCase(string) {
  let resultString = "";
  for (let char of string) {
    const charCode = char.charCodeAt();
    if (65 <= charCode && charCode <= 90) {
      resultString += String.fromCharCode(charCode + 32)
    } else {
      resultString += char;
    }
  }
  return resultString;  
}

console.log(toLowerCase("JAVASCRIPT IS AWESOME!"));

// ---------------------------- toSnakeCase -------------------------

function toSnakeCase(string){
  let resulString = "";
  return toLowerCase(string).split(" ").join("_");
}

console.log(toSnakeCase("JAVASCRIPT IS AWESOME!"));

// ---------------------------- toStartCase -------------------------

function toStartCase(string){
  let resultArray = string.split(" ");
  resultArray = resultArray.map(string => {
    return toUpperCase(string[0]) + string.slice(1);
  })
  return resultArray.join(" ");
}

console.log(toStartCase("javascript is awesome!"));