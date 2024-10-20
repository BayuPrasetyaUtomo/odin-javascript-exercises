const removeFromArray = function (arrayOfValue = [], ...values) {
  for (v of values) {
    arrayOfValue = arrayOfValue.filter(item => item !== v)
  }

  return arrayOfValue;
};

// console.log(removeFromArray([1, 2, 2, 4], 2))
// Do not edit below this line
module.exports = removeFromArray;
