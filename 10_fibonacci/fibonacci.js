const fibonacci = function (indexToFind) {
  // sequence example: 1, 1, 2, 3, 5, 8;
  const index = typeof indexToFind === "number" ?
    indexToFind : parseInt(indexToFind);

  const result = [];
  if (index < 0) return "OOPS";
  if (index === 0) return 0;

  for (let i = 0; i < index; i++) {
    // add 1 for the first 2 index
    if (!result.length || result.length === 1) result.push(1);
    else {
      // sum the previous 2 numbers and add the result to the array
      result.push(result.at(-1) + result.at(-2));
    }
  }
  return result.at(-1);
};

// console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
