/**
 * 198. Medium. House Robber
 * - https://leetcode.com/problems/house-robber/
 *
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  const length = nums.length;
  if (length === 0) return 0;
  if (length < 3) return Math.max(...nums);

  nums[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < length; i++) {
    nums[i] = Math.max(nums[i - 1], nums[i] + nums[i - 2]);
  }
  return nums[length - 1];
}
