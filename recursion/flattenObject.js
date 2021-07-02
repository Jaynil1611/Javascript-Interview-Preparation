const user = {
  name: "Akshay Saini",
  address: {
    personal: {
      city: "Dehradun",
      state: "Uttrakhand",
      area: "Majra",
    },
    office: {
      city: "Hyderabad",
      area: {
        landmark: "Hi Tech",
      }
    }
  }
};

function flattenObject(sourceObject, targetObject, key) {
  return Object.keys(sourceObject).reduce((finalObject, currentKey) => {
    if (typeof sourceObject[currentKey] !== 'object') {
      return { ...finalObject, [`${key}_${currentKey}`]: sourceObject[currentKey] };
    }
    return { ...finalObject, ...flattenObject(sourceObject[currentKey], finalObject, `${key}_${currentKey}`) };
  }, targetObject);
}

console.log(flattenObject(user, {}, 'user'));