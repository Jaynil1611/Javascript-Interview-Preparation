// this inside setTimeout
const obj = {
  type:'poster',
  logger: function () {
      setTimeout(function () {
          console.log(this.type);
      }, 1000);
  }
}

obj.logger();