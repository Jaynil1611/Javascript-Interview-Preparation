function callAfterDelay(array) {  
  let interval = 0;
  array.forEach((element) => {
    interval += element;
    setTimeout(() => {
      console.log(element);
    }, interval * 1000);
  });
}

const array = [1, 4, 8, 2, 5, 3];
// const array = [1, 22, 11, 5];

callAfterDelay(array);