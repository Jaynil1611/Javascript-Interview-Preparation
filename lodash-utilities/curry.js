function curry(func) {
  return function recursiveCurry(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return recursiveCurry.bind(this, ...args)
  }
}

function getMultiplication(a, b, c, d) {
  return a * b * c * d;
}

const curriedMul = curry(getMultiplication);

console.log(curriedMul(2)(3)(4, 1));

console.log(curriedMul(2)(3)(4)(1));