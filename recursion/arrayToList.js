// Question taken from (https://eloquentjavascript.net/04_data.html#i_nSTX34CM1M)

// ------------------- Array To List ----------------------

function arrayToList(arr) {
  function constructList(arr, index) {
    if (index === arr.length - 1) {
      return {
        value: arr[index],
        rest: null
      }
    }
    return {
      value: arr[index],
      rest: constructList(arr, index + 1)
    }
  }
  return constructList(arr, 0);
}

const array = [1, 2, 3];

const list = arrayToList(array);

console.log(list);

// ------------------- List To Array ----------------------

function listToArray(list) {
  if (!list) {
    return [];
  }

  function constructArray(list, arr) {
    if (list.rest === null) {
      arr.push(list.value);
      return arr;
    }
    arr.push(list.value)
    return constructArray(list.rest, arr);
  }
  return constructArray(list, []);
}

const arrayFromList = listToArray(list);

console.log(arrayFromList);

// ------------------- Prepend To List ---------------------

function prependToList(element, list) {
  if (!list) {
    return [];
  }

  return {
    value: element,
    rest: list
  }
}

const newList = prependToList(0, list);

console.log(newList);