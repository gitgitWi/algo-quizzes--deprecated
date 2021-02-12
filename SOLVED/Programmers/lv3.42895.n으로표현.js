/**
 * lv3. N으로 표현
 * - https://programmers.co.kr/learn/courses/30/lessons/42895
 *
 * @param {number} N 연산에 사용되는 수
 * @param {number} number target number
 * @returns {number}
 */
function solution(N, number) {
  if (N === number) return 1;

  const memo = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i < 9; i++) {
    memo[i].add(Number(N.toString().repeat(i)));

    for (let j = 1; j < i; j++) {
      memo[j].forEach((x) => {
        memo[i - j].forEach((y) => {
          memo[i].add(x + y);
          memo[i].add(x - y);
          memo[i].add(x * y);
          if (y !== 0) memo[i].add(Math.floor(x / y));
        });
      });
    }
    if (memo[i].has(number)) return i;
  }
  return -1;
}
