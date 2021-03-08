/**
 * Medium. 200. Number of Islands
 * - https://leetcode.com/problems/number-of-islands/
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  let ans = 0;
  const rowSize = grid.length;
  const colSize = grid[0].length;
  const ways = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];

  function isValid(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= rowSize ||
      col >= colSize ||
      grid[row][col] === "0"
    )
      return false;
    return true;
  }

  function trav(crow, ccol) {
    grid[crow][ccol] = "0";
    for (const [row, col] of ways) {
      const [nrow, ncol] = [crow + row, ccol + col];
      if (isValid(nrow, ncol)) trav(nrow, ncol);
    }
    return;
  }

  for (let row = 0; row < rowSize; row++) {
    for (let col = 0; col < colSize; col++) {
      if (!isValid(row, col)) continue;
      trav(row, col);
      ans += 1;
    }
  }
  return ans;
}

[
  [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
  ],
  [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
  ]
].forEach(q => {
  console.log(numIslands(q));
});
