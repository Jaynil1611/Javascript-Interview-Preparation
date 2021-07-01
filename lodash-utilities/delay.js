function delay(func, delay, ...args) {
  const context = this;
  setTimeout(() => {
    func.apply(context, args);
  })
}

const printText = function() {
  console.log(`Hi I'm ${this.name}`);
}

delay(printText, 2000);

const myself = {
  name: 'Jaynil',
  intro: function() {
    delay.call(this, printText, 3000);
  }
};

myself.intro();
