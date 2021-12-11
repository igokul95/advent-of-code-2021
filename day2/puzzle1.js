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
  data.forEach((element) => {
    switch (element[0]) {
      case DIRECTIONS.FORWARD:
        horizontal += Number(element[1]);
        break;
      case DIRECTIONS.UP:
        depth -= Number(element[1]);
        break;
      case DIRECTIONS.DOWN:
        depth += Number(element[1]);
      default:
        break;
    }
  });
  return { horizontal, depth };
};

const { horizontal, depth } = getDirections(data);
const answer = horizontal * depth;
console.log("answer::", answer);
