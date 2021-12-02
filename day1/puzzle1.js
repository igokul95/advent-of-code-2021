const fs = require("fs")

const data = fs.readFileSync("puzzle1Data.txt", { encoding: 'utf-8' }).split("\n").map(x => parseInt(x))

const getLargerPreviousMeasurementCount = (inputData) => {
  const reducer = (previous, current, index, array) => {
    if (index > 0 && array[index-1] < array[index]) {
        ++previous;
    }
    return previous;
  }
  const count = inputData.reduce(reducer, 0)
  return count
}
exports.getLargerPreviousMeasurementCount = getLargerPreviousMeasurementCount;