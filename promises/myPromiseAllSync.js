const fakeFetch = (paramter, delay, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      paramter ? resolve(value) : reject(`Promise rejected! ${value}`)
    }, delay)
  })
}

function myPromiseAllSync(promises) {
  return new Promise((resolve, reject) => {
    let promiseResults = [];
    const results = promises.reduce((result, promise) => {
      return result.then(() => {
        return promise.then((value) => {
          promiseResults.push(value);
          return promiseResults;
        });
      }).catch(err => reject(err));
    }, Promise.resolve());
    resolve(results);
  })
}

myPromiseAllSync([fakeFetch(true, 1000, 'p1'), fakeFetch(true, 500, 'p2')]).then(results => console.log(results));