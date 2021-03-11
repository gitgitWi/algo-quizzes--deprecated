const solution = (inputs) => {
  const N = Number(inputs[0]);
  const nums = inputs[1].split(" ").map((e) => Number(e));
  const memo = [nums[0]];

  const lowerBound = (arr, size, target) => {
    let l = 0;
    let r = size - 1;

    while (l < r) {
      const cur = Math.floor((l + r) / 2);
      arr[cur] < target ? (l = cur + 1) : (r = cur);
    }
    return l;
  };

  for (let i = 1; i < N; i++) {
    const cur = nums[i];
    const memoSize = memo.length;
    if (cur > memo[memoSize - 1]) memo.push(cur);
    else {
      const li = lowerBound(memo, memoSize, cur);
      memo[li] = cur;
    }
  }

  console.log(memo.length);
};

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// const inputs = ["6", "10 20 10 30 20 50"];

solution(inputs);
