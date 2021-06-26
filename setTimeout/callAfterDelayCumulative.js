const array = [1, 4, 8, 2, 5, 3];
let interval = 0;
function callAfterDelay() {
  array.forEach((element) => {
    interval += element;
    setTimeout(() => {
      console.log(element);
    }, interval * 1000);
  });
}

callAfterDelay();