/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * Kadane's Algorithm 활용
 * - 전체 문제와 부분 문제가 조금 다를 수 있음
 */

// @lc code=start
/**
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  for (let idx = 1; idx < nums.length; idx++) {
    nums[idx] = nums[idx - 1] < 0 ? nums[idx] : nums[idx] + nums[idx - 1];
  }
  return Math.max(...nums);
};
// @lc code=end
