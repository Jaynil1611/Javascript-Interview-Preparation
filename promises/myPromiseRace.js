const fakeFetch = (paramter, delay, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      paramter ? resolve(value) : reject(`Promise rejected! ${value}`)
    }, delay)
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

myPromiseRace([fakeFetch(true, 1000, 'p1'), fakeFetch(true, 500, 'p2')]).then(results => console.log(results));