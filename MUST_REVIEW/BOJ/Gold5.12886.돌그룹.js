/**
 * Gold5. 12886. 돌 그룹
 * 
 * 3의 배수일 때만 성공할 수 있다는 조건을 생각해내는 것도 어려웠고,
 * 시간 초과 때문에 더 힘들었다
 * 
 * - 문제: https://www.acmicpc.net/problem/12886
 * - 참고: https://whereisusb.tistory.com/234
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * @param {number[]} prev
 * @returns {boolean}
 */
const findResult = (start) => {
  const [a, b, c] = start.sort((a, b) => a - b);
  // 실패 조건
  if ((a + b + c) % 3 !== 0) return false;

  const visited = new Set([]);
  visited.add(start.join(""));
  const queue = [start];

  while (queue.length) {
    const [x, y, z] = queue.shift();

    // 성공 조건
    if (x === y && y === z) return true;

    // 돌 두 개 선택; 3개 모두 다름, 재귀 적용
    // StackSizeExceede 때문에 while 적용
    // visited 계산 미리해야 시간초과 안남

    // x < y
    if (x < y) {
      const next = [x + x, y - x, z].sort((a, b) => a - b);
      const nextStr = next.join("");
      if (!visited.has(nextStr)) {
        visited.add(nextStr);
        queue.push(next);
      };
    };
    // y < z
    if (y < z) {
      const next = [x, y + y, z - y].sort((a, b) => a - b);
      const nextStr = next.join("");
      if (!visited.has(nextStr)) {
        visited.add(nextStr);
        queue.push(next);
      };
    };
    // x < z
    if (x < z) {
      const next = [x + x, y, z - x].sort((a, b) => a - b);
      const nextStr = next.join("");
      if (!visited.has(nextStr)) {
        visited.add(nextStr);
        queue.push(next);
      };
    };
  };
  return false;
}

/**
 * solution
 * 
 * @param {string} str 입력, 돌 세 개 "a b c"
 * @returns {number} 같은 개수로 만들수 있으면 1, 아니면 0
 */
const solution = (str) => {
  const start = str.split(" ").map(Number);
  return findResult(start) ? 1 : 0;
};

let q = "";
rl.on("line", (str) => {
  q = str;
  rl.close();
}).on("close", (str) => {
  console.log(solution(q));
  process.exit();
});