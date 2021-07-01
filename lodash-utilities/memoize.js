function memoize(func, resolver) {
  const cache = {};
  return function() {
    const context = this;
    const args = arguments;
    const key = resolver ? resolver(...args) : args[0];
    if (!cache[key]) {
      cache[key] = func.apply(context, args);
    }
    return cache[key];
  }
}

function summation(n) {
  return n < 1 ? n : n + summation(n - 1);
}

const resolver = (n) => `%${n}%`;

const memoizedSummation = memoize(summation, resolver);

console.log(memoizedSummation(60));

// This time the whole summation process wouldn't be repeated as it's present in cache
console.log(memoizedSummation(60));