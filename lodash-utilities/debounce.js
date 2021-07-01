function debounce(func, delay) {
  let timer = "";
  return function() {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, arguments), delay);
  }
}

const printText = function() {
  console.log(`Hello, I'm ${this.name}`)
}

const debouncedFunc = debounce(printText, 4000);

debouncedFunc();  // this is undefined

const myself = {
  name: 'Jaynil',
  intro: debounce(printText, 3000)
};

myself.intro();  // this is myself object