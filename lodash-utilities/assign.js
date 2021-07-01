function assign(targetObj, ...sourceObjects) {
  return sourceObjects.reduce((finalObj, currentObj) => {
    return { ...finalObj, ...currentObj }
  }, targetObj);
}

const duck = {
  hasBill: true,
  feet: 'orange'
};

const beaver = {
  hasTail: true
};

const otter = {
  hasFur: true,
  feet: 'webbed'
};

const result = assign({}, duck, beaver, otter);

console.log(result);