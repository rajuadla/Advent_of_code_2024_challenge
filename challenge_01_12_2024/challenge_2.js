const inputArrayData = require("./data.js");

const { arrayFirst, arraySecond } = inputArrayData;

// finding sum of left side element found in right array
const sumofElementsFound = arrayFirst
  .reduce((sumValue, searchItem) => sumValue + arraySecond.filter((item) => item === searchItem).length, 0);

console.log(sumofElementsFound);
