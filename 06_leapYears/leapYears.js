const leapYears = function (year) {
  const isDivisibleByFour = year % 4 === 0;
  const isDivisibleByHundred = year % 100 === 0;
  const isDivisibleByFourHundred = year % 400 === 0;

  if (isDivisibleByFour &&
    (!isDivisibleByHundred || isDivisibleByFourHundred)
  ) return true;
  else return false;
};

// Do not edit below this line
module.exports = leapYears;
