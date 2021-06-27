// ------------------- Filter Polyfill ----------------------

function myFilter(callback){
  let filteredArray = [];
  for(let i = 0; i < this.length; i++){
    if(callback.call(this, this[i], i, this)){
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;  
}

Array.prototype.myFilter = myFilter;

const array = [1, 2, 3, 4, 5];

console.log(array.myFilter((value) => !(value & 1)));