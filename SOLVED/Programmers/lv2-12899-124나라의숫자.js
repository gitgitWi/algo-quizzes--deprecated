/**
 * lv2. 124 나라의 숫자
 *
 * https://programmers.co.kr/learn/courses/30/lessons/12899
 *
 * 진법 변환 변형 문제
 */
const T = "124";
const solution = (n) => {
  const m = n - 1;
  const div = Math.floor(m / 3);
  const mod = m % 3;
  return div === 0 ? T[mod] : solution(div) + T[mod];
};

[[1], [2], [3], [4], [6], [9], [10]].forEach((q) =>
  console.log(solution(...q))
);
