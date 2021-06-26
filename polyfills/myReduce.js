// ------------------- Reduce Polyfill ----------------------

function myReduce(callback, initialValue) {
  let i = 0;
  let accumulator = initialValue;
  if(!initialValue){
    accumulator = this[0]
    i = 1;
  }
  while(i < this.length){
    accumulator = callback(accumulator, this[i], i , this);
    i++;
  }
  return accumulator;
}

Array.prototype.myReduce = myReduce;

const result = [1, 2, 3, 4].myReduce((sum, value) => {
  return sum+value;
}, 0)

console.log(result);