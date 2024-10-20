const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums = []) {
  let total = 0;
  for (n of nums) {
    total += n;
  }
  return total;
};

const multiply = function (nums = []) {
  let total = 0;
  
  for (n of nums) {
    if (total === 0) total += n;
    else total *= n;
  }

  return total;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
