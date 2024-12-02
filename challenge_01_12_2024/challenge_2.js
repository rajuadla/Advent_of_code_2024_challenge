const inputArrayData = require("./data.js");

const { array_first, array_second } = inputArrayData;

// finding sum of gap between each element of given arrays in ASC order
const sumofgapBTWArrElements = array_first
  .reduce((sumValue, searchItem) => {
    sumValue + array_second.filter((item) => item === searchItem).length;
  }, 0);

console.log(sumofgapBTWArrElements);
