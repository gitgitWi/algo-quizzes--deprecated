/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start
/**
 * space O(MN) 풀이
 *
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = (text1, text2) => {
  if (text1 === text2) return text1.length;

  const s1 = text1.length;
  const s2 = text2.length;

  const memo = Array.from({ length: s1 + 1 }, () => Array(s2 + 1).fill(0));

  for (let i = 0; i < s1; i++) {
    for (let j = 0; j < s2; j++) {
      memo[i + 1][j + 1] =
        text1[i] === text2[j]
          ? memo[i][j] + 1
          : Math.max(memo[i + 1][j], memo[i][j + 1]);
    }
  }

  return memo[s1][s2];
};

/**
 * space O(min(M,N)) 풀이
 *
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = (text1, text2) => {
  if (text1 === text2) return text1.length;

  const s1 = text1.length;
  const s2 = text2.length;

  if (s1 < s2) return longestCommonSubsequence(text2, text1);

  const memo = Array(s2 + 1).fill(0);

  for (let i = 1; i < s1 + 1; i++) {
    let prev = memo[0];
    for (let j = 1; j < s2 + 1; j++) {
      let tmp = memo[j];
      if (text1[i - 1] === text2[j - 1]) memo[j] = prev + 1;
      else if (memo[j - 1] > memo[j]) memo[j] = memo[j - 1];
      prev = tmp;
    }
  }

  return memo[s2];
};
// @lc code=end
