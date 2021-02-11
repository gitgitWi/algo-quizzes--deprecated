/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  for (const row in grid) {
    for (const col in grid[row]) {
      if (row === "0" && col === "0") continue;
      if (row === "0") grid[row][col] += grid[row][col - 1];
      else if (col === "0") grid[row][col] += grid[row - 1][col];
      else {
        grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1]);
      }
    }
  }
  return grid[m - 1][n - 1];
};
// @lc code=end
