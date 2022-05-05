function myMap(inputArray, callback) {

  // return inputArray.map(callback)
  let result = [];
  for (let el of inputArray) {
    let newEl = callback(el);
    result.push(newEl)
  }
  return result;
}

module.exports = myMap;
