function cloneDeep(originalObj) {
  if (typeof originalObj !== "object") {
    return originalObj;
  }
  if (Array.isArray(originalObj)) {
    return originalObj.map((item) => cloneDeep(item));
  }
  let copy = {};
  for (let [key, value] of Object.entries(originalObj)) {
    copy = { ...copy, [key]: cloneDeep(value) }
  }
  return copy;
}

const movie = {
  name: 'F&F9',
  cast: [
    {
      id: 1,
      name: 'Vin Diesel'
    }
  ],
  ratings: {
    count: 4.5,
    reactors: [
      {
        userId: '12309',
        name: 'Taran'
      }
    ]
  }
}

const deepCopyOfMovie = cloneDeep(movie);

console.log(deepCopyOfMovie === movie);

deepCopyOfMovie.ratings.count = 4.3;

console.log(JSON.stringify(movie));

console.log(JSON.stringify(deepCopyOfMovie));