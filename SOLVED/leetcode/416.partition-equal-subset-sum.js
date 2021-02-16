/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = (nums) => {
  const sum = nums.reduce((a, b) => a + b, 0);

  if (sum % 2 !== 0) return false;

  const half = sum / 2;

  const dp = [];

  dp[0] = true;

  for (let index = 0; index < nums.length; ++index) {
    const num = nums[index];
    for (var i = half; i >= num; --i) {
      dp[i] = dp[i] || dp[i - num];
    }
  }
  return dp[half] || false;
};
// @lc code=end
