const repeatString = function(stringToRepeat, numberOfTimes) {
  let repeatedString = "";
  for (let index = 0; index < numberOfTimes; index++) {
    repeatedString += stringToRepeat;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
