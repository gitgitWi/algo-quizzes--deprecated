/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
const romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const minusRoman = {
  I: ["V", "X"],
  X: ["L", "C"],
  C: ["D", "M"],
};

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const listedS = Array.from(s).reverse();

  let answer = 0;
  while (listedS.length) {
    const current = listedS.pop();

    minusRoman[current] &&
    minusRoman[current].includes(listedS[listedS.length - 1])
      ? (answer += romans[listedS.pop()] - romans[current])
      : (answer += romans[current]);
  }

  return answer;
};

// @lc code=end
