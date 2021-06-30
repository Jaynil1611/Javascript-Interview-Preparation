// ------------------- Find Polyfill ----------------------

function myFind(callback, thisArg){  
  for(let i = 0; i < this.length; i++){
    if(callback.call(thisArg || this, this[i], i, this)){
      return this[i];
    }
  }
}

Array.prototype.myFind = myFind;

const array = [5, 12, 8, 130, 44];

console.log(array.find(element => element > 10));