const fakeFetch = (paramter) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      paramter ? resolve("promise resolved") : reject('promise rejected!')
    }, 3000)
  })
}

fakeFetch(true).then((value) => console.log(value)).catch(err => console.error(err));