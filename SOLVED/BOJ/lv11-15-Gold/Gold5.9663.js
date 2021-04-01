// @ts-check
/**
 * Gold5. 9663. N-Queen
 * - typical N-Queens problem
 *
 * @param {number} N 입력
 */
const solution = (N) => {
  const Q = 1;
  const board = Array.from({ length: N }, () => Array(N).fill(0));
  let count = 0;

  /**
   * 세로 중복 체크
   * @param {number} row
   * @param {number} col
   */
  const checkRows = (row, col) => {
    for (let crow = row + 1; crow--; ) {
      if (board[crow][col] === Q && crow !== row) {
        return false;
      }
    }
    return true;
  };

  /**
   * 대각선 중복 체크
   * @param {number} row
   * @param {number} col
   */
  const checkDiag = (row, col) => {
    // left
    for (let i = 0; i < N; i++) {
      const nrow = row - i;
      const ncol = col - i;
      if (nrow < 0 || ncol < 0 || nrow >= N || ncol >= N) break;
      if (board[nrow][ncol] === Q) return false;
    }

    // right
    for (let i = 0; i < N; i++) {
      const nrow = row - i;
      const ncol = col + i;
      if (nrow < 0 || ncol < 0 || nrow >= N || ncol >= N) break;
      if (board[nrow][ncol] === Q) return false;
    }

    return true;
  };

  /**
   * 위 두 중복 체크 한번에 호출
   * @param {number} row
   * @param {number} col
   */
  const checks = (row, col) => {
    return checkRows(row, col) && checkDiag(row, col);
  };

  /**
   * 백트래킹/DP
   * @param {number} row
   * @param {number} col
   * @returns
   */
  const bt = (row, col) => {
    // 성공조건
    if (row === N - 1) {
      count++;
      board[row][col] = 0;
      return true;
    }

    // Queen 표시
    board[row][col] = Q;

    // next step
    const nrow = row + 1;
    for (let ncol = N; ncol--; ) {
      if (col !== ncol && checks(nrow, ncol)) {
        bt(nrow, ncol);
      }
    }

    board[row][col] = 0;
    return false;
  };

  // 첫번째 줄 각 col에서 시작
  for (let col = N; col--; ) {
    bt(0, col);
  }

  return count;
};

const inputs = require("fs").readFileSync("/dev/stdin").toString();
console.log(solution(Number(inputs)));
