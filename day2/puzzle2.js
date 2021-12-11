const fs = require("fs");

const data = fs
  .readFileSync("data.txt", { encoding: "utf-8" })
  .split("\n")
  .map((el) => el.split(" "));

const DIRECTIONS = {
  FORWARD: "forward",
  UP: "up",
  DOWN: "down",
};

const getDirections = (data) => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  data.forEach((element) => {
    switch (element[0]) {
      case DIRECTIONS.FORWARD:
        horizontal += Number(element[1]);
        depth += Number(element[1]) * aim;
        break;
      case DIRECTIONS.UP:
        aim -= Number(element[1]);
        break;
      case DIRECTIONS.DOWN:
        aim += Number(element[1]);
      default:
        break;
    }
    console.log("each loop:", horizontal,depth,aim )
  });
  return { horizontal, depth };
};

const { horizontal, depth } = getDirections(data); 
const answer = horizontal * depth;
console.log("answer::", answer)
