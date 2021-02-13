/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  const getPal = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  };

  let longest = "";
  for (let i = 0; i < s.length; i++) {
    const pal1 = getPal(i, i);
    const pal2 = getPal(i, i + 1);
    const pal = pal1.length < pal2.length ? pal2 : pal1;
    if (longest.length < pal.length) longest = pal;
  }
  return longest;
};
// @lc code=end
