/**
 * Easy. 566. Reshape the Matrix
 * 
 * 괜히 어렵게 풀었는데, 다른 풀이들 보니 훨씬 쉽게 풀 수 있는 경우가 많았음.
 */

function flatDeep(arr, depth = 1) {
  return depth > 0
    ? arr.reduce(
      (acc, a) => acc.concat(Array.isArray(a) ? flatDeep(a, depth - 1) : a),
      []
    )
    : arr.slice();
}

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
function matrixReshape(nums, r, c) {
  const flatted = flatDeep(nums);
  if (flatted.length !== r * c) return nums;

  const reshaped = [];

  let temp = [];
  for (let i = 0; i < r * c; i++) {
    temp.push(flatted[i]);
    if ((i + 1) % c === 0) {
      reshaped.push(temp);
      temp = [];
    }
  }

  return reshaped;
}

/**
 * runtime 최소 풀이
 * 
 * - 비트 연산 ~~: ~~x = - x - 1
 * - nums가 2차원 배열로 주어지기 때문에 애초에 deep flat을 할 필요가 없었다..
 */
var matrixReshape = function (nums, r, c) {
  const m = nums.length;
  const n = nums[0].length;
  const l = m * n;
  if (r * c !== l) {
    return nums;
  }
  let ans = Array(r);
  for (let i = 0; i < r; i++) {
    ans[i] = Array(c);
  }
  for (let i = 0; i < l; i++) {
    ans[~~(i / c)][i % c] = nums[~~(i / n)][i % n];
  }
  return ans;
};
