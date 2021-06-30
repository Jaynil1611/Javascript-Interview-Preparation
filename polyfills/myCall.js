// ------------------- Call Polyfill ----------------------

const brother = {
  name: 'Jaynil',
  intro: function() {
    console.log(`Hello, ${this.name}`)
  }
}

const sister = {
  name: 'Nishi',
};

function myCall(thisArg, ...args) {
  thisArg.fn = this;
  return thisArg.fn(...args);
}

Function.prototype.myCall = myCall;

brother.intro.myCall(sister);