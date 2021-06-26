// ------------------- Bind Polyfill ----------------------

const brother = {
  name:'Jaynil',
  intro: function(){
    console.log(`Hello, ${this.name}`)
  }
}

const sister = {
  name:'Nishi',
};

function myBind(thisArg, ...parameters) {
  const functionToBeCalled = this;
  return function(){
    functionToBeCalled.apply(thisArg, parameters);
  }
}

Function.prototype.myBind  = myBind;

const sisterIntro = brother.intro.myBind(sister);
sisterIntro();