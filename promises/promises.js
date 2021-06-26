const fakeFetch = (paramter, delay, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      paramter ? resolve(value) : reject(`Promise rejected! ${value}`)
    }, delay)
  })
}

// function myPromiseAll(promises) {
//   let promiseResults = [];
//   let completedPromiseCount = 0;
//   return new Promise((resolve, reject) => {
//     promises.forEach(async (promise) => {
//       try {
//         const output = await promise;
//         promiseResults.push(output);
//         completedPromiseCount++;
//         if (completedPromiseCount === promises.length) {
//           resolve(promiseResults);
//         }
//       } catch (err) {
//         reject(err);
//       }
//     })
//   })
// }

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let promiseResults = Array(promises.length);
    let completedPromiseCount = 0;
    promises.forEach(async (promise, index) => {
      try {
        promiseResults[index] = await promise;
        completedPromiseCount++;
        if (completedPromiseCount === promises.length) {
          resolve(promiseResults);
        }
      } catch (err) {
        reject(err);
      }
    })
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

function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(async (promise) => {
      try {
        const output = await promise;
        resolve(output);
      } catch (err) {
        reject(err);
      }
    })
  })
};

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

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

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

// myPromiseAllSync([fakeFetch(true, 1000, 'p1'), fakeFetch(true, 500, 'p2')]).then(results => console.log(results));

// myPromiseRace([fakeFetch(true, 1000, 'p1'), fakeFetch(true, 500, 'p2')]).then(results => console.log(results));

// myPromiseAny([fakeFetch(false, 1000, 'p1'), fakeFetch(false, 500, 'p2')]).then(results => console.log(results)).catch(err => console.log(err));

functionWrapper(fakeFetch1, fakeFetch2).then(res => console.log(res));