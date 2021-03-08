/**
 * Easy. 268. Missing Number
 * - https://leetcode.com/problems/missing-number/
 *
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  const sorted = nums.sort((a, b) => a - b);
  const size = nums.length;
  for (let i = size; i--; ) {
    if (sorted[i] !== i + 1) return i + 1;
  }
  return 0;
}

function missingNumber(nums) {
  const size = nums.length;
  const tot = ((1 + size) * size) / 2;
  let sum = 0;
  for (let i = size; i--; ) {
    sum += nums[i];
  }
  return tot - sum;
}

function missingNumber(nums) {
  const size = nums.length;
  let miss = size;
  for (let i = size; i--; ) {
    miss ^= i ^ nums[i];
  }
  return miss;
}

[[3, 0, 1], [0, 1], [9, 6, 4, 2, 3, 5, 7, 0, 1], [0], [1]].forEach(q => {
  console.log(`answer : ${missingNumber(q)}`);
});
