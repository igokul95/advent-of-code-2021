const fs = require("fs");

const data = fs.readFileSync("data.txt", { encoding: "utf-8" }).split("\n");

const getCommonBits = (data) => {
  const commonBits = [];
  data.forEach((number) => {
    let bits = number.split("");
    bits.forEach((bit, indx) => {
      let bitSummary = commonBits[indx] || [0, 0];
      if (Number(bit)) {
        bitSummary[1] += 1;
      } else {
        bitSummary[0] += 1;
      }
      console.log(bitSummary);
      commonBits[indx] = bitSummary;
    });
  });
  return commonBits;
};

const compute = (commonBits) => {
  let max = [];
  let min = [];
  commonBits.forEach((common) => {
    if (common[0] > common[1]) {
      max.push(0);
      min.push(1);
    } else {
      max.push(1);
      min.push(0);
    }
  });
  return [parseInt(max.join(""), 2), parseInt(min.join(""), 2)];
};
const commonBits = getCommonBits(data);
const [gamma, epsilon] = compute(commonBits);
console.log("commonBits:", gamma * epsilon);
