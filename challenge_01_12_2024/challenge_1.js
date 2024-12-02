const inputArrayData = require("./data.js");

const { arrayFirst, arraySecond } = inputArrayData;

// finding sum of gap between each element of given arrays in ASC order
const sumofgapBTWArrElements = arrayFirst
  .reduce((sumValue, item, index) => sumValue + Math.abs(item - arraySecond[index]), 0);

console.log(sumofgapBTWArrElements);
