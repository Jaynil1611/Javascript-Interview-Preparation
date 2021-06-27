function printNumbers(from, to, delay) {
  let start = from;
  setTimeout(function printNumber() {    
    console.log(start);
    if (start < to) {
      setTimeout(printNumber, delay * 1000);
    }
    start++;
  });
}

printNumbers(1, 10, 1);