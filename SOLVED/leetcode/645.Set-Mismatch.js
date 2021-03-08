/**
 * 645. Easy. set mismatch
 * - https://leetcode.com/problems/set-mismatch/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function findErrorNums(nums) {
  const res = [];
  const length = nums.length;
  const normal = Array(length + 1).fill();
  for (let i = 0; i < length; i++) {
    const cur = nums[i];
    normal[cur] ? res.push(cur) : (normal[cur] = cur);
  }

  for (let i = 1; i < length + 1; i++) {
    if (normal[i] === undefined) {
      res.push(i);
      break;
    }
  }
  return res;
}
