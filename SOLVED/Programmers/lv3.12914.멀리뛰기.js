/**
 * lv3. 12914. 멀리뛰기
 * - https://programmers.co.kr/learn/courses/30/lessons/12914
 *
 */
function solution(n) {
  const cache = [0, 1, 2];
  for (let i = 3; i < n + 1; i++) {
    cache[i] = (cache[i - 1] + cache[i - 2]) % 1234567;
  }
  return cache[n];
}

[4, 3, 2000].forEach(q => console.log(solution(q)));
