/**
 * Gold5. 단어 섞기
 * 
 * - 문제: https://www.acmicpc.net/problem/9177
 * 
 * 처음에 투 포인터처럼 단순하게 접근했다가,
 * 동일한 알파벳이 a, b 모두 해당되는 경우 연산 잘못되는 문제 발견하고
 * 백트래킹/DP 관점으로 접근
 * 
 * visited를 제대로 기록하지 않아 여러번 시간 초과 났고,
 * 이 부분은 다른 블로거 풀이를 참고했다
 * 
 * 재귀를 사용하면 시간은 좀더 빠르고 메모리는 좀더 쓰게 됨
 */

/**
 * canMakeRecursion
 * 재귀를 활용해 탐색하는 함수
 * 
 * @param {string} a 입력된 a 문자열
 * @param {string} b 입력된 b 문자열
 * @param {string} c 입력된 c 문자열
 * @param {string} aStr 만들고 있는 a 문자열
 * @param {string} bStr 만들고 있는 b 문자열
 * @param {string} cIdx c의 현재 포인터 위치
 * @param {boolean[][]} visited 메모이제이션; aStr, bStr 인덱스 기록
 * @returns {boolean} 단어가 만들어질 수 있는지 아닌지
 */
const canMakeRecursion = (a, b, c, aStr, bStr, cIdx, visited) => {

  // 문자열 C의 모든 문자를 탐색한 경우
  if (cIdx === c.length) {
    return aStr === a && bStr === b;
  };

  const curr = c[cIdx];
  const aIdx = aStr.length;
  const bIdx = bStr.length;

  // 다른 재귀에서 이미 방문한 문자열이면 return false
  // 최초 방문이면 방문 처리
  if (visited[aIdx][bIdx]) return false;
  visited[aIdx][bIdx] = true;

  // recursion processing
  // 현재 문자가 a 포인터 문자와 같은 경우
  if (a[aIdx] === curr) {
    const isNextOK = canMakeRecursion(a, b, c, aStr + curr, bStr, cIdx + 1, visited);
    if (isNextOK) return true;
  };

  // 현재 문자가 b 포인터 문자와 같은 경우
  if (b[bIdx] === curr) {
    const isNextOK = canMakeRecursion(a, b, c, aStr, bStr + curr, cIdx + 1, visited);
    if (isNextOK) return true;
  };

  // 위 두 경우 모두 해당되지 않으면 return false
  return false;
};

/**
 * canMakeIteration
 * while iteration을 활용해 탐색하는 경우
 * 
 * @param {string} a 입력된 a 문자열
 * @param {string} b 입력된 b 문자열
 * @param {string} c 입력된 c 문자열
 */
const canMakeIteration = (a, b, c) => {
  // 방문 기록
  const visited = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(false));

  // initialization
  let aStr = "", bStr = "";
  const queue = [];
  queue.push({ prevA: aStr, prevB: bStr });

  // 문자열 C의 모든 문자에 대해 하나씩 탐색
  for (let cIdx = 0; cIdx < c.length; cIdx++) {

    // C의 특정 문자에 대해 탐색
    let currLoop = queue.length;
    while (currLoop--) {
      const currStr = c[cIdx];
      const { prevA, prevB } = queue.shift();

      const aIdx = prevA.length, bIdx = prevB.length;

      // 방문 처리
      if (visited[aIdx][bIdx]) continue;
      visited[aIdx][bIdx] = true;

      // 현재 문자가 a 포인터 문자와 같은 경우
      // 만들어지는 문자열에 대해서는 바로 업데이트
      if (a[aIdx] === currStr) {
        aStr = prevA + currStr;
        queue.push({ prevA: aStr, prevB });
      };

      // 현재 문자가 b 포인터 문자와 같은 경우
      if (b[bIdx] === currStr) {
        bStr = prevB + currStr;
        queue.push({ prevA, prevB: bStr });
      };
    };
  };

  // 최종 결과가 a, b와 같은지 비교해 return
  return aStr === a && bStr === b;
};

const solution = (arr) => {
  const q = arr.slice(1).map(line => line.split(" "));

  // IO 시간 단축 위해 결과값을 일단 arr로 저장
  let ans = [];

  for (const idx in q) {
    const [a, b, c] = q[idx];

    // iteration으로 탐색하는 경우
    // const res = canMakeIteration(a, b, c);

    // recursion으로 탐색하는 경우
    const visited = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(false));
    const res = canMakeRecursion(a, b, c, "", "", 0, visited);

    ans.push(`Data set ${+idx + 1}: ${res ? 'yes' : 'no'}`);
  };

  return ans.join("\n");
};

/*
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ""
});

const q = [];
rl.on("line", (line) => {
  line 
    ? q.push(line) 
    : rl.close();
}).on("close", () => {
  console.log(solution(q));
  process.exit();
});
*/

[
  [
    3,
    'cat tree tcraete',
    'cat tree catrtee',
    'cat tree cttaree',
  ]
].forEach(q => console.log(solution(q)));