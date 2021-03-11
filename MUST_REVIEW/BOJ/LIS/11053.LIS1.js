const solution = (inputs) => {
  const N = Number(inputs[0]);
  const nums = inputs[1].split(" ").map((e) => Number(e));
  const memo = Array(N).fill(1);
  let max = 0;
  for (let li = 0; li < N; li++) {
    const lastVal = nums[li];
    for (let ti = 0; ti < li; ti++) {
      const targetVal = nums[ti];

      if (lastVal > targetVal && memo[ti] >= memo[li]) memo[li] = memo[ti] + 1;
    }
    if (memo[li] > max) max = memo[li];
  }
  console.log(max);
};

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// const inputs = ["6", "10 20 10 30 20 50"];

solution(inputs);
