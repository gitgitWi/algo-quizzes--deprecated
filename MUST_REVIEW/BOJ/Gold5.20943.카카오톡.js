/**
 * BOJ. Gold5. 20943. 카카오톡
 *
 * - 61%~64%에서 시간초과
 *
 * @param {number[]} users 각 유저별 할당받은 직선 방정식 차수
 */
const solution = (users) => {
  const types = {};
  for (const [a, b] of users) {
    const r = a / b;
    types[r] ? (types[r] += 1) : (types[r] = 1);
  }

  const lens = Object.values(types);
  const size = lens.length;
  let ans = 0;
  for (let ai = size; ai--; ) {
    for (let bi = ai; bi--; ) {
      ans += lens[ai] * lens[bi];
    }
  }

  console.log(ans);
};

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;
const users = [];
rl.on("line", (line) => {
  if (!line) rl.close();
  if (N) {
    users.push(line.split(" ").map((e) => Number(e)));
  } else {
    N = Number(line);
  }
}).on("close", () => {
  solution(users);
  process.exit();
});
