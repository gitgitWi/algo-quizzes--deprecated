/*
 * Hard. 218. The Skyline Problem
 * - https://leetcode.com/problems/the-skyline-problem/
 */

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
function getSkyline(buildings) {
  // TODO
  return;
}

[
  [
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8]
  ],
  [
    [0, 2, 3],
    [2, 5, 3]
  ],
  [[0, 2147483647, 2147483647]]
].forEach(q => {
  console.log(getSkyline(q));
});
