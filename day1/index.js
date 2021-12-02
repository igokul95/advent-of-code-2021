const fs = require("fs")

const data = fs.readFileSync("data.txt", { encoding: 'utf-8' }).split("\n").map(x => parseInt(x))

function reducer(previous, current, index, array) {
    if (index > 0 && array[index-1] < array[index]) {
        ++previous;
    }
    return previous;
  }
const count = data.reduce(reducer, 0)
console.log(count);