const str = "JavaScript is awesome"
let reversedString = "";
for(let i = 0; i < str.length; i++){
    reversedString = str.charAt(i) + reversedString;
}

console.log(reversedString);