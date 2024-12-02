const inputArrayData = require("./data3.js");

const compareMaxSteps = [1, 2, 3];

const SafeStepsCount = inputArrayData.map((item) => {
  // first check if the array is in ASC or DESC
  // if its not one of them then default false
  const isAssending = item.slice(1).every((val, i) => {
    return val >= item[i];
  });
  const isDessending = item.slice(1).every((val, i) => {
    return val <= item[i];
  });

  if (!(!isAssending && !isDessending)) {
    const  checkItsSafe = item.slice(1).every((val, i) => {
      // compare the each element diff should be  1/2/3
      return compareMaxSteps.includes(Math.abs(val - item[i]));
    });
    return checkItsSafe;
  } else {
    return false;
  }

}).filter((item) => item).length;

console.log(SafeStepsCount);
