/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// DP
const wordBreak = function (s, wordDict) {
  const size = s.length;
  const wordSet = new Set(wordDict);
  const memo = new Set([]);

  const queue = [0];
  while (queue.length) {
    const start = queue.shift();
    if (memo.has(start)) continue;
    memo.add(start);

    for (let end = start + 1; end < size + 1; end++) {
      const cur = s.slice(start, end);
      if (wordSet.has(cur)) {
        if (end === size) return true;
        queue.push(end);
      }
    }
  }

  return false;
};

// BFS
const wordBreak = function (s, wordDict) {
  const size = s.length;
  const memo = Array(size + 1).fill(false);
  memo[0] = true;

  const sr = Array.from(s);
  const wordSet = new Set(wordDict);

  for (let end = 1; end < size + 1; end++) {
    for (let start = 0; start < end; start++) {
      if (!memo[start]) continue;

      const cur = s.slice(+start, +end);
      if (wordSet.has(cur)) {
        memo[end] = true;
        continue;
      }
    }
  }

  return memo[size];
};
// @lc code=end
