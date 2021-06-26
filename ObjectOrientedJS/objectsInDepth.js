const bicycle = {
	color :  'red',
	1: 'one'
}

bicycle.1;
// Uncaught SyntaxError: Unexpected number

bicycle[1];
// (returns the value of the `1` property)

//------------------------------------------------------------

const myVariable = 'color';

bicycle[myVariable];
// 'blue'

bicycle.myVariable;
// undefined

//------------------------------------------------------------

functionchangeToEight(n) {
  n = 8; // here local copy of n is created & n becomes 8 only in this function's scope
}

let n = 7;
changeToEight(n);
console.log(n);

//------------------------------------------------------------

const originalObject = {
  favoriteColor: 'red'
};

functionsetToBlue(object) {
  object.favoriteColor = 'blue';
}

setToBlue(originalObject);
originalObject.favoriteColor;
// 'blue'

// Also, the same thing happens in the case of object copy
const duplicateObject = originalObject;
duplicateObject.favoriteColor = 'orange';

duplicateObject.favoriteColor
// 'orange'
originalObject.favoriteColor; 
// 'orange' 
// originalObject property is also changed due to pass by reference

//------------------------------------------------------------

const parrot = {
  group: 'bird',
  feathers: true,
  chirp:function () {
    console.log('Chirp chirp!');
  }
};

const pigeon = {
  group: 'bird',
  feathers: true,
  chirp:function () {
    console.log('Chirp chirp!');
  }
};

parrot === pigeon;     // objects are not pointing to the same value in memory
// false

const myBird = parrot;    

myBird === parrot;     // same object reference
// true

myBird === pigeon;
// false

//