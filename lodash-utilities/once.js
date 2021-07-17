function callMeOnce(fn) {
  const context = this;
  let called = false;
  return function (...args) {
    if (called) {
      return;
    }
    called = true;
    return fn.apply(context, args);
  };
}

const printText = () => console.log("Called!");

const once = callMeOnce(printText);

once();
once();
once();
once();