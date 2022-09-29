// function currying(fn) {
//   const N = fn.length;
//   function recCurr(n, args) {
//     return function innerFunc(...a){
//       if (n <= a.length) {
//         return fn(...args, ...a);
//       }
//       return recCurr(n - a.length, [...args, ...a])
//     }
//   }
//   return recCurr(N, []);
// }

// function currying(func){
//     return function curried(...args){
//       if(func.length <= args.length){
//         return func.apply(this, args);
//       }
//       return function(...args2){
//         return curried.apply(this, [...args, ...args2])
//       }
//     }
// };

function infiniteCurryingWithVariableArg(func) {
  function recursiveCurry(...args) {
    return function(...a) {
      if (!a.length) {
        return args.reduce((result, value) => {
          return func.call(func, result, value);
        });
      }
      return recursiveCurry(...args, ...a);
    }
  }
  return recursiveCurry();
};

function infiniteCurrying(func) {
  function recursiveCurry(...args) {
    return function(a) {
      if (!a) {
        return args.reduce((result, value) => {
          return func.call(func, result, value);
        });
      }
      return recursiveCurry(...args, a);
    }
  }
  return recursiveCurry();
};

// Arrow Functions
const fn = infiniteCurrying((a, b) => a + b);
const fn2 = infiniteCurryingWithVariableArg((a, b) => a + b);
console.log(fn(7)(8)(9)());
console.log(fn2(7)(7, 8)(9, 7)());