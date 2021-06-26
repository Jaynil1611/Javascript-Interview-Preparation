const fakeFetch = (paramter, delay, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      paramter ? resolve(value) : reject(`Promise rejected! ${value}`)
    }, delay)
  })
}

function myPromiseAny(promises) {
  let promiseResults = [];
  let rejectedPromiseCount = 0;
  return new Promise((resolve, reject) => {
    promises.forEach(async (promise) => {
      try {
        const output = await promise;
        resolve(output);
      } catch (err) {
        promiseResults.push(err);
        console.log(err);
        rejectedPromiseCount++;
        if (rejectedPromiseCount === promises.length) {
          reject(promiseResults);
        }
      }
    })
  })
}

myPromiseAny([fakeFetch(false, 1000, 'p1'), fakeFetch(false, 500, 'p2')]).then(results => console.log(results)).catch(err => console.log(err));