/**
 * Gold5. 16954. 움직이는 미로 탈출
 * 
 * - 문제: https://www.acmicpc.net/problem/16954
 * 
 * 가장 왼쪽 아랫칸([7, 0])에서 시작 => [0, 7]로 이동해야 함
 * 1초 캐릭터 이동 후 벽은 한 행 아래로 이동([+1, 0]), 가장 아래 벽은 사라짐
 * 캐릭터 이동은 빈 칸으로만 한 칸 이동, 현재 위치 정지 불가능
 * 
 * 풀이 방향은 금방 잡아서 어렵지 않게 구현했는데,
 * 세부 조건들 때문에 디버깅이 오래 걸렸다.
 * 특히 뒤로 후진하는 경우는 필요 없을 줄 알고 경우에 넣지 않고 풀다가
 * 몇 시간을 헤맸다..
 * 
 * 재귀로 탐색하는 경우, iteration 보다 훨씬 빠르게 탐색을 끝냈고 메모리도 적게 사용함
 */


/**
 * solutionRecursion
 * 재귀로 백트래킹 하는 경우
 * 
 * @param {string[]} board 8X8 체스판 정보
 * @returns {number} 탈출가능하면 1, 아니면 0
 */
const solutionRecursion = (board) => {
  const START = [7, 0];
  const EMPTY = ".";
  const TOP_LINE = 0;
  const NEWROW = ['........'];

  // 백트래킹으로 추적
  const bt = (cRow, cCol, currBoard, top) => {
    // 탈출 조건; 문제에서 원하는 도착점에 정확히 도착한 경우
    if (cRow === 0 && cCol === 7) return 1;

    // 실패 조건
    // - 잘못된 좌표
    // - 이동한 현재 좌표에 벽 '#'이 있는 경우
    if (!currBoard[cRow] ||
      currBoard[cRow][cCol] !== EMPTY) return 0;

    // 탈출 조건2
    // - 살아남아서 가장 윗 줄에 왔거나, 벽이 모두 사라질 때까지 버틴 경우
    // - 정확한 도착점이 아니더라도 무조건 목적지 갈 수 있음
    if (cRow === 0) return 1;
    if (cRow <= top) return 1;

    // 다음 라운드, 보드 한 줄씩 아래로 이동
    const nextBoard = NEWROW.concat(currBoard.slice(0, -1));

    // 캐릭터 이동할 수 있는 모든 경우의 수
    const ways = [[-1, 0], [0, 1], [0, -1], [-1, -1], [-1, 1], [0, 0], [1, 0], [1, -1], [1, 1]];
    for (const [nr, nc] of ways) {
      const nRow = cRow + nr;
      const nCol = cCol + nc;

      // 다음 좌표가 정상이고, 벽이 아니고, 다음 좌표에서 재귀적으로 탐색 가능한 경우
      if (
        currBoard[nRow] &&
        currBoard[nRow][nCol] === EMPTY &&
        bt(nRow, nCol, [...nextBoard], top + 1)
      ) return 1;
    };

    // 위에서 탐색 불가능한 경우 return false 
    return 0;
  }

  // 출발점에서 백트래킹 시작
  let [sRow, sCol] = START;
  return bt(sRow, sCol, board, TOP_LINE);
};

/**
 * solutionIteration
 * while iteration으로 백트래킹 하는 경우
 * 
 * @param {string[]} board 8X8 체스판 정보
 * @returns {number} 탈출가능하면 1, 아니면 0
 */
const solutionIteration = (board) => {
  const START = [7, 0];
  const BYUK = '#';
  const NEWROW = ['........'];
  let top = -1;

  // 가장 높은 벽의 위치 찾기
  for (const row in board) {
    if (board[row].includes(BYUK)) {
      top = row;
      break;
    };
  };

  if (top === -1) return 1;

  // 캐릭터가 이동할 수 있는 모든 방향 
  const ways = [[-1, 0], [0, 1], [0, -1], [-1, -1], [-1, 1], [0, 0], [1, 0], [1, -1], [1, 1]];
  const queue = [START];

  // iteration 시작
  while (queue.length) {
    let thisLoop = queue.length;
    while (thisLoop--) {
      const [crow, ccol] = queue.shift();

      // 실패 조건
      // - 잘못된 좌표
      // - 현재 좌표에 벽이 있는 경우
      if (crow < 0 || crow > 7 || ccol < 0 || ccol > 7) continue;
      if (board[crow][ccol] === BYUK) continue;

      // 성공 조건
      // 가장 높은 벽 보다 위에 있거나 정확한 도착점에 도달한 경우
      if (crow < top || (crow === 0 && ccol === 7)) return 1;

      // 모든 방향에 대해 다음 이동할 좌표 탐색
      for (const [row, col] of ways) {
        const nrow = crow + row;
        const ncol = ccol + col;
        if (nrow < 0 || nrow > 7 || ncol < 0 || ncol > 7) continue;
        if (board[nrow][ncol] === BYUK) continue;
        queue.push([nrow, ncol]);
      };
    }

    // 다음 라운드, 보드 한 줄씩 아래로 이동
    board = NEWROW.concat(board.slice(0, -1));
    // 가장 높은 벽의 위치 한 줄 아래로 이동(row + 1)
    top++;
  };

  // 위 while-loop에서 성공하지 못한 경우
  return 0;
};

/*
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ""
});

let q = [];
rl.on("line", (line) => {
  line
    ? q.push(line)
    : rl.close();
}).on("close", () => {
  console.log(solution(q));
  process.exit();
});
*/

[
  [
    [
      '........',
      '........',
      '........',
      '........',
      '........',
      '........',
      '........',
      '........',
    ],
    1
  ],
  [
    [
      '........',
      '........',
      '........',
      '........',
      '........',
      '........',
      '##......',
      '........',
    ],
    0
  ],
  [
    [
      '........',
      '........',
      '........',
      '........',
      '........',
      '.#......',
      '#.......',
      '.#......',
    ],
    0
  ],
  [
    [
      '........',
      '........',
      '........',
      '........',
      '........',
      '.#######',
      '#.......',
      '........',
    ],
    1
  ],
  [
    [
      '........',
      '........',
      '........',
      '........',
      '#.......',
      '.#######',
      '#.......',
      '........',
    ],
    0
  ],
  [
    [
      '##......',
      '.##.....',
      '..##....',
      '...##...',
      '....##..',
      '.....##.',
      '......##',
      '........',
    ],
    0
  ],
  [
    [
      '..#..#.#',
      '..#..#.#',
      '.#..#..#',
      '#..#..##',
      '..#..#.#',
      '.#..#..#',
      '#..#..#.',
      '........',
    ],
    1
  ]
].forEach(q =>
  // 답, 정답 여부 출력
  console.log(solutionRecursion(q[0]), solutionRecursion(q[0]) === q[1])
);
