const solution = (inputs) => {
  const N = Number(inputs[0]);
  const nums = inputs[1].split(" ").map((e) => Number(e));
  const memo = Array(N).fill(1);

  let max = 0;
  for (let li = 0; li < N; li++) {
    const lastVal = nums[li];
    for (let ti = 0; ti < li; ti++) {
      const targetVal = nums[ti];
      if (lastVal > targetVal && memo[ti] >= memo[li]) {
        memo[li] = memo[ti] + 1;
      }
    }
    if (memo[li] >= max) max = memo[li];
  }

  let tmp = [];
  let subMax = max;
  for (let mi = N; mi--; ) {
    const curM = memo[mi];
    if (curM !== subMax) continue;
    tmp.push(nums[mi]);
    subMax--;
  }

  console.log(max);
  console.log(tmp.reverse().join(" "));
};

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

solution(inputs);

// [
//   ["6", "10 20 10 30 20 50"], // 4
//   ["2", "2 1"], // 1
//   ["3", "2 4 1"], // 2
//   ["7", "1 6 2 4 5 3 7"], // 5
//   ["6", "1 5 6 2 3 4"], // 4
// ].forEach((inputs) => {
//   solution(inputs);
// });
