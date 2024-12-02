const inputArrayData = require("./data.js");

const { arrayFirst, arraySecond } = inputArrayData;

// finding sum of left side element found in right array & multifi with item
const similarityElementsFound = arrayFirst
  .reduce((sumValue, searchItem) => {
    const itemFoundCount = arraySecond.filter((item) => item === searchItem).length;
    return sumValue + (itemFoundCount * searchItem);
}, 0);

console.log(similarityElementsFound);
