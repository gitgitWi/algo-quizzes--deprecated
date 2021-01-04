/**
 * lv2. 괄호 변환
 *
 * 2020 KAKAO BLIND RECRUITMENT
 *
 * https://programmers.co.kr/learn/courses/30/lessons/60058?language=javascript
 *
 * 시험 당시에도 못풀었던 문제 같은데, 아직도 쉽지 않았다..
 * 문제에 주어진 조건 이해가 가장 어려웠고
 * 그러다보니 재귀를 적용하는 부분이 정확히 어딘지 파악하는데 시간이 오래 걸린 듯
 */

const isCorrect = (str) => {
  const reg = /\(\)/g;
  while (str.match(reg)) {
    str = str.replace(reg, "");
  }
  return str.length === 0;
};

const remakeU = (u, v) => {
  const uLefts = [],
    uRights = [];
  let remadeU = Array.from(u).slice(1, -1);
  remadeU.forEach((word, idx) => {
    word === "(" ? uLefts.push(idx) : uRights.push(idx);
  });
  uLefts.forEach((idx) => (remadeU[idx] = ")"));
  uRights.forEach((idx) => (remadeU[idx] = "("));
  return "(" + v + ")" + remadeU.join("");
};

const splitUV = (str) => {
  if (!str) return "";
  if (isCorrect(str)) return str;

  let left = 0,
    right = 0;
  let u = "",
    v = "";
  const listedStr = Array.from(str).reverse();
  while (listedStr.length > 0) {
    const current = listedStr.pop();
    current === "(" ? left++ : right++;
    if (left === right) {
      const idx = left * 2;
      u = str.slice(0, idx);
      v = str.slice(idx);
      break;
    }
  }
  return isCorrect(u) ? u + splitUV(v) : remakeU(u, splitUV(v));
};

const solution = (p) => {
  if (!p) return "";
  return splitUV(p);
};

const qq = [
  [""],
  ["(()())()"],
  [")("],
  ["()))((()"],
  ["))((()"],
  ["())()()(())"],
];

qq.forEach((ele) => console.log(solution(...ele)));

/**
 * Short Coding 참고
 *
 * 정상 괄호 판단은 갯수 + 처음 '(' + 마지막 ')' 이면 되는 듯..
 */

function reverse(str) {
  return str
    .slice(1, str.length - 1)
    .split("")
    .map((c) => (c === "(" ? ")" : "("))
    .join("");
}

function solution(p) {
  if (p.length < 1) return "";

  let balance = 0;
  let pivot = 0;
  do {
    balance += p[pivot++] === "(" ? 1 : -1;
  } while (balance !== 0);

  const u = p.slice(0, pivot);
  const v = solution(p.slice(pivot, p.length));

  if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
  else return "(" + v + ")" + reverse(u);
}
