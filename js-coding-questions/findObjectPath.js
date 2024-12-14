/**
 * https://srijansinghgulati.medium.com/find-path-in-a-js-object-my-favorite-question-to-ask-in-a-frontend-interview-faab189e2c19
 *  
 * Problem Statement:
  - Write method findPath
  - Should take two params:
      - object
      - keys separated by dots as string
  - Return value if it exists at that path inside the object, else return undefined
*/

function findObjectPath(object, path) {
  let result = object;
  const pathArray = path.split(".");

  // checking if the key is object's own property or inherited property e.g. toString()
  pathArray.forEach((key) => {
    if (result && result.hasOwnProperty(key)) {
      result = result[key];
    } else {
      result = undefined;
    }
  });
  return result;
}

var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

console.log(findObjectPath(obj, 'a.b.c')); // 12
console.log(findObjectPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findObjectPath(obj, 'a.b.d')); // undefined
console.log(findObjectPath(obj, 'a.c')); // undefined
console.log(findObjectPath(obj, 'a.b.c.d')); // undefined
console.log(findObjectPath(obj, 'a.b.c.d.e')); // undefined
console.log(findObjectPath(obj, 'a.b.j')); //false
console.log(findObjectPath(obj, 'a.b.j.k')); //undefined
console.log(findObjectPath(obj, 'a.k')); //null
console.log(findObjectPath(obj, 'a.k.j')); // undefined
console.log(findObjectPath(obj, 'a.toString')); // undefined
