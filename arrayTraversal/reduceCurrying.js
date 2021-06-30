function compose(...functions) {
  return function(argument, delay) {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          const result = functions.reduce((result, func) => {
            return func.call(func, result);
          }, argument);
          resolve(result);
        }, delay * 1000);
      } catch (err) {
        reject(err);
      }
    });
  }
}

const square = (x) => x*x;

const mutiplyBy3 = (x) => x*3 ;

const divideBy2 = (x) => x/2;

const convertToString = (x) => x+"";

const arrayOfFunctions = [square,mutiplyBy3,divideBy2,convertToString];

const composeUtil = compose(...arrayOfFunctions);

composeUtil(4, 4).then((res) => console.log(res));