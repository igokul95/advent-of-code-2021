const fs = require("fs");

const data = fs.readFileSync("data.txt", { encoding: "utf-8" }).split("\n");

const getMaximumOccurance = (data, index) => {
  let occurancesOf1 = 0;
  let occurancesOf0 = 0;
  data.forEach((aData) => {
    const bit = aData.split("")[index];
    if (Number(bit)) {
      occurancesOf1 += 1;
    } else {
      occurancesOf0 += 1;
    }
  });
  return occurancesOf0 > occurancesOf1 ? "0" : "1";
};

const compute = (data) => {
  let o2Items = [...data];
  let co2Items = [...data];
  const length = data[0].length;
  for (let i = 0; i < length; i++) {
    if (o2Items.length > 1) {
      const maximumOccurance = getMaximumOccurance(o2Items, i);
      o2Items = o2Items.filter((item) => item.charAt(i) === maximumOccurance);
    }
    if (co2Items.length > 1) {
      const maximumOccurance = getMaximumOccurance(co2Items, i);
      const minimumOccurance = maximumOccurance === "0" ? "1" : "0";
      co2Items = co2Items.filter((item) => item.charAt(i) === minimumOccurance);
    }
    if (o2Items.length === 1 && co2Items.length === 1) break;
  }
  return [parseInt(o2Items[0], 2), parseInt(co2Items[0], 2)];
};
const [o2Rates, co2Rates] = compute(data);
console.log("compute::", o2Rates * co2Rates);
