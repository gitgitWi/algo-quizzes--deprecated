/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = (s) => {
  if (s[0] === "0") return 0;

  const isValid = (ss) => {
    const num = Number(ss);
    return ss[0] !== "0" && 0 < num && num < 27;
  };

  const SIZE = s.length;
  if (SIZE === 1) return isValid(s) ? 1 : 0;

  const memo = {};
  memo[SIZE - 1] = isValid(s[SIZE - 1]) ? 1 : 0;
  memo[SIZE - 2] =
    (isValid(s[SIZE - 2]) ? memo[SIZE - 1] : 0) +
    (isValid(s[SIZE - 2] + s[SIZE - 1]) ? 1 : 0);
  for (let i = SIZE - 3; i > -1; i--) {
    let tmp = 0;
    if (isValid(s[i])) tmp += memo[i + 1];
    if (isValid(s[i] + s[i + 1])) tmp += memo[i + 2];
    memo[i] = tmp;
  }

  return memo[0];
};
// @lc code=end

console.log(numDecodings("212325") === 10);
console.log(numDecodings("2101") === 1);
console.log(
  numDecodings("111111111111111111111111111111111111111111111") === 1836311903
);
