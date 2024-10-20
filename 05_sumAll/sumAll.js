const sumAll = function (startNum, endNum) {
  let result = 0;

  const isNumber = (num) => typeof num === "number";
  const isFloat = (num) => num % 1 !== 0;

  if (!isNumber(endNum) || startNum < 0 || isFloat(startNum)) return "ERROR";
  
  if (startNum > endNum) {
    for (let i = startNum; i >= endNum; i--) {
      result += i;
    }
    return result;
  } else {
    for (let i = startNum; i <= endNum; i++) {
      result += i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = sumAll;
