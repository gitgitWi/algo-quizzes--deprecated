/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 *
 * Kadane's Algorithm 활용
 * - 곱하기의 경우 부호에 따라 최소 <-> 최대 바뀔 수 있으므로, 두가지 경우를 모두 저장해야 함
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  const first = nums[0];
  let totMax = first;
  let preMax = first;
  let preMin = first;
  for (let i = 1; i < nums.length; i++) {
    const curNum = nums[i];
    const curr = [preMax * curNum, preMin * curNum, curNum];
    preMax = Math.max(...curr);
    preMin = Math.min(...curr);
    if (preMax > totMax) totMax = preMax;
  }
  return totMax;
};
// @lc code=end
