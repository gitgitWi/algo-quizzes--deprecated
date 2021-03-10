/**
 * Gold5. 1759. 암호만들기
 * - L개 문자, C가지
 * - 최소 한 개의 모음(a, e, i, o, u), 최소 두 개의 자음으로 구성
 * - 오름차순 정렬
 * - https://www.acmicpc.net/problem/1759
 */
const solution = inputs => {
  const [lc, rest] = inputs;
  const [L, C] = lc.split(" ").map(e => Number(e));
  const alphas = rest.split(" ").sort();
  const aeiou = new Set(["a", "e", "i", "o", "u"]);
  const result = [];

  const maxAeNum = L - 2;
  const maxBcNum = L - 1;

  const getCombi = (idx = 0, acc = "", aeNum = 0, bcNum = 0) => {
    if (idx === C) {
      if (acc.length === L) result.push(acc);
      return;
    }

    const cur = alphas[idx];
    if (aeiou.has(cur)) {
      if (aeNum < maxAeNum) getCombi(idx + 1, acc + cur, aeNum + 1, bcNum);
    } else {
      if (bcNum < maxBcNum) getCombi(idx + 1, acc + cur, aeNum, bcNum + 1);
    }
    getCombi(idx + 1, acc, aeNum, bcNum);
  };

  getCombi();

  console.log(result);
};

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

solution(inputs);
