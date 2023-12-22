const ERROR = "ERROR";

const sumAll = function(minNum, maxNum) {
  if (typeof minNum !== "number" || typeof maxNum !== "number") return ERROR;
  if (minNum < 0 || maxNum < 0) return ERROR;
  if (minNum > maxNum) {
    const temp = minNum;
    minNum = maxNum;
    maxNum = temp;
  }

  let sum = 0;
  for (let i = minNum; i <= maxNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
