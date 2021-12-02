const fs = require("fs")

const { getLargerPreviousMeasurementCount } = require("./puzzle1")

const data = fs.readFileSync("puzzle2Data.txt", { encoding: 'utf-8' }).split("\n").map(x => parseInt(x))

const slidingWindowSum = []
data.forEach((num, index) => {
    if(data[index + 2]) {
        const sum = num + data[index+1] + data[index+2];
        slidingWindowSum.push(sum)
    }
    return;
})

console.log(getLargerPreviousMeasurementCount(slidingWindowSum));