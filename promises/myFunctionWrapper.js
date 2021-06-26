const fakeFetch = (paramter, delay, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      paramter ? resolve(value) : reject(`Promise rejected! ${value}`)
    }, delay)
  })
}

function functionWrapper(...functions) {
  return new Promise((resolve, reject) => {
    let promiseResults = [];
    const results = functions.reduce((result, fn) => {
      return result.then(() => {
        return fn().then((value) => {
          promiseResults.push(value)
          return promiseResults;
        });
      }).catch(err => reject(err));
    }, Promise.resolve());
    resolve(results);
  })
}

const fakeFetch1 = () => fakeFetch(true, 300, 'p1');
const fakeFetch2 = () => fakeFetch(true, 100, 'p2');

functionWrapper(fakeFetch1, fakeFetch2).then(res => console.log(res));