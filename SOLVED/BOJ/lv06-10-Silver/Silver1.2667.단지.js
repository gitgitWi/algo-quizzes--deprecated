function solution(inputs) {
  const [N, ...arr] = inputs;
  const SIZE = +N;
  const rangeN = [...Array(SIZE).keys()];
  const visited = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));

  function bfs(row, col, cnt) {
    const ways = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];

    const queue = [[row, col]];
    while (queue.length) {
      const [crow, ccol] = queue.shift();
      if (visited[crow][ccol]) continue;
      visited[crow][ccol] = true;
      cnt += 1;
      ways.forEach(([y, x]) => {
        const [nrow, ncol] = [y + crow, x + ccol];
        if (nrow < 0 || ncol < 0 || nrow >= SIZE || ncol >= SIZE) return;
        if (arr[nrow][ncol] === "0") return;
        queue.push([nrow, ncol]);
      });
    }
    return cnt;
  }

  let num = 0;
  const cnts = [];

  for (const row of rangeN) {
    for (const col of rangeN) {
      if (visited[row][col] || arr[row][col] === "0") continue;
      cnts.push(bfs(row, col, 0));
      num += 1;
    }
  }

  console.log(num);
  for (const cnt of cnts.sort((a, b) => a - b)) {
    console.log(cnt);
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
solution(input);

// [
//   [
//     "7",
//     "0110100",
//     "0110101",
//     "1110101",
//     "0000111",
//     "0100000",
//     "0111110",
//     "0111000",
//   ],
// ].forEach((q) => solution(q));
