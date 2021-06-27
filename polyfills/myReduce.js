// ------------------- Reduce Polyfill ----------------------

function myReduce(callback, initialValue) {
  const argumentsLength = arguments.length;
  if (!this.length) {
    return argumentsLength > 1 ? initialValue : new TypeError('Reduce of empty array with no initial value');
  }

  let i = 0;
  let accumulator = initialValue;
  if (argumentsLength < 2) {
    accumulator = this[0]
    i = 1;
  }
  while (i < this.length) {
    accumulator = callback.call(this, accumulator, this[i], i, this);
    i++;
  }
  return accumulator;
}

Array.prototype.myReduce = myReduce;

const result = [1, 2, 3, 4].myReduce((sum, value) => {
  return sum + value;
}, 1)

console.log(result);