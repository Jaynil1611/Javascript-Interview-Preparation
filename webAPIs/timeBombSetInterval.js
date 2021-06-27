function timeBomb(from, delay) {
  let start = from;
  const id = setInterval(() => {
    if (start === 0) {
      console.log("Time Over!");
      return clearInterval(id);
    }
    console.log(start);
    start--;       
  }, delay * 1000);
}

timeBomb(10, 1);