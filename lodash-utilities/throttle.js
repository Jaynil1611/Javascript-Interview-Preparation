function throttle(func, delay) {
  let flag = true;
  return function() {
    let context = this, args = arguments;
    if (flag) {
      flag = false;
      func.apply(context, args);
      setTimeout(() => flag = true, delay);
    }
  }
}

const printText = function() {
  console.log(`Hi, I'm ${this.name || 'logger'}`);
}

const throttled = throttle(printText, 2000);

console.log("Test One");
throttled();
throttled();
throttled();
throttled();
setTimeout(throttled, 2000);

const myself = {
  name: 'Jaynil',
  intro: throttle(printText, 2000)
};

console.log("Test Two");
setTimeout(() => myself.intro(), 2000);
