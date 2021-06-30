// ------------------- Apply Polyfill ----------------------

const brother = {
  name: 'Jaynil',
  intro: function() {
    console.log(`Hello, ${this.name}`)
  }
}

const sister = {
  name: 'Nishi',
};

function myApply(thisArg, args) {
  thisArg.fn = this;
  return args ? thisArg.fn(...args) : thisArg.fn();
}

Function.prototype.myApply = myApply;

brother.intro.myApply(sister);