/**
 * Gold5.14502.연구소.js
 * - https://www.acmicpc.net/problem/14502
 */
const solution = (inputs) => {
  const [nm, ...rest] = inputs;
  const [N, M] = nm.split(" ").map(Number);
  const board = rest.map((e) => e.split(" ").join(""));

  const getSafeNum = (board) => {
    let nums = 0;
    for (let row = N; row--; ) {
      for (let col = M; col--; ) {
        if (board[row][col] === "0") nums += 1;
      }
    }
    return nums;
  };

  const ways = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const changeCol = (board, row, col, val) => {
    board[row] = board[row].slice(0, col) + val + board[row].slice(col + 1);
  };
  const wallAdd = (board, row, col) => changeCol(board, row, col, "1");
  const virusAdd = (board, row, col) => changeCol(board, row, col, "2");
  const isVal = (row, col) => row >= 0 && col >= 0 && row < N && col < M;

  const virus = (curBoard) => {
    const bfs = (row, col) => {
      virusAdd(curBoard, row, col);
      for (const [r, c] of ways) {
        const [nrow, ncol] = [row + r, col + c];
        if (isVal(nrow, ncol) && curBoard[nrow][ncol] === "0") bfs(nrow, ncol);
      }
    };

    for (let row = N; row--; ) {
      for (let col = M; col--; ) {
        if (board[row][col] === "2") {
          bfs(row, col);
        }
      }
    }
    return curBoard;
  };

  let max = 0;
  for (let row1 = N; row1--; ) {
    for (let col1 = M; col1--; ) {
      if (board[row1][col1] !== "0") continue;
      for (let row2 = row1 + 1; row2--; ) {
        for (let col2 = M; col2--; ) {
          if (board[row2][col2] !== "0" || (row2 === row1 && col2 === col1))
            continue;
          for (let row3 = row2 + 1; row3--; ) {
            for (let col3 = M; col3--; ) {
              if (
                board[row3][col3] !== "0" ||
                (row3 === row2 && col3 === col2) ||
                (row3 === row1 && col3 === col1)
              )
                continue;
              let curBoard = [...board];
              wallAdd(curBoard, row1, col1);
              wallAdd(curBoard, row2, col2);
              wallAdd(curBoard, row3, col3);
              curBoard = virus(curBoard);
              const curNum = getSafeNum(curBoard);
              if (curNum > max) max = curNum;
            }
          }
        }
      }
    }
  }

  return max;
};

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(inputs));
