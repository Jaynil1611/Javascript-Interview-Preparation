// ------------------- Map Polyfill ----------------------

const array = [1, 4, 9, 16, 25];

function myMap(callback) {
  const tempArray = [];
  for (let i = 0; i < this.length; i++) {
    tempArray.push(callback.call(this, this[i], i));
  }
  return tempArray;
}

Array.prototype.myMap = myMap;

const result = array.myMap((item) => {
  return item * item;
});

console.log(result);
