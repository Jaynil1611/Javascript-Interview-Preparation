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

myPromiseAll([fakeFetch(true, 1000, 'p1'), fakeFetch(true, 500, 'p2')]).then(results => console.log(results));