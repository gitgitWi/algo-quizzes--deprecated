/**
 * Ch01-02. 알고리즘의 효율성
 *
 * 피보나치 수열
 * - https://www.youtube.com/watch?v=UZ3R3aoudrI
 */

/**
 * 1. 재귀 사용
 *
 * @param {number} n
 * @returns {number}
 */
const fibo1 = (n) => {
  if (n <= 1) return n;
  return fibo1(n - 1) + fibo1(n - 2);
};

console.log(fibo1(20)); // 6765

/**
 * 2. 재귀X, array 사용
 *
 * @param {number} n
 * @returns {number}
 */
const fibo2 = (n) => {
  if (n <= 1) return n;
  const fiboArray = [...Array(n + 1).keys()].reduce(
    (arr, idx) =>
      idx <= 1 ? [...arr, idx] : [...arr, arr[idx - 1] + arr[idx - 2]],
    []
  );
  return fiboArray[n];
};

console.log(fibo2(20)); // 6765

/**
 * 3. 재귀X, 변수만 사용
 *
 * 시간 복잡도, 공간 복잡도 가장 효율적인 방식
 *
 * @param {number} n
 * @returns {number}
 */
const fibo3 = (n) =>
  [...Array(n).keys()].reduce(([a, b]) => [b, a + b], [0, 1])[0];

console.log(fibo3(20)); // 6765
