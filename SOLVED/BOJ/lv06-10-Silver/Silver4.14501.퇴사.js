/**
 * BOJ. Silver4. 14501. 퇴사
 * @param {number} N 남은 N일, tps 길이
 * @param {number[][]} tps 상담 완료하는데 걸리는 기간 T, 금액 P
 * @returns {number} 최대 수익
 */
const solution = (N, tps) => {
  let ans = 0;
  const dp = (idx = 0, acc = 0) => {
    if (idx > N) return;
    if (idx === N) {
      if (acc > ans) ans = acc;
      return;
    }
    dp(idx + 1, acc);
    dp(idx + tps[idx][0], acc + tps[idx][1]);
  };
  dp();
  return ans;
};

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;
const tps = [];
rl.on("line", (line) => {
  if (!line) rl.close();
  if (!N) N = Number(line);
  else {
    tps.push(line.split(" ").map((e) => Number(e)));
  }
}).on("close", () => {
  console.log(solution(N, tps));
  process.exit();
});
