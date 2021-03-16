const solution = (inputs) => {
  const [_n, _nums, _x] = inputs;
  const N = Number(_n);
  const nums = _nums.split(" ").map((e) => Number(e));
  const X = Number(_x);

  const pairs = {};
  let ans = 0;
  for (const num of nums) {
    const pair = X - num;
    if (pairs[pair]) ans++;
    else {
      pairs[num] = pair;
    }
  }
  return ans;
};

// const inputs = ["9", "5 12 7 10 9 1 2 3 11", "13"];

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(inputs));
