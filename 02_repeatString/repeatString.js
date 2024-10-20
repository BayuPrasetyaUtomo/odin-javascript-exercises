const repeatString = function(stringToRepeat, numberOfTimes) {
  let repeatedString = "";

  if (numberOfTimes < 0) return "ERROR";
  for (let index = 0; index < numberOfTimes; index++) {
    repeatedString += stringToRepeat;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
