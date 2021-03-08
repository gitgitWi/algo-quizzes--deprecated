const getGraph = (arr) => {
  const graph = arr.reduce((acc, val) => {
    const [a, b] = val;
    acc[a] ? acc[a].push(+b) : (acc[a] = [+b]);
    acc[b] ? acc[b].push(+a) : (acc[b] = [+a]);
    return acc;
  }, {});

  return graph;
};

const dfs = (graph, stack, visited) => {
  const ans = [];
  while (stack.length) {
    const curr = stack.pop();
    if (visited[curr]) continue;
    visited[curr] = true;
    ans.push(curr);
    if (!graph[curr]) continue;
    graph[curr]
      .sort((a, b) => b - a)
      .forEach((val) => {
        if (visited[val]) return;
        stack.push(val);
      });
  }
  console.log(ans.join(" "));
};

const bfs = (graph, queue, visited) => {
  const ans = [];
  while (queue.length) {
    const curr = queue.shift();
    if (visited[curr]) continue;
    visited[curr] = true;
    ans.push(curr);
    if (!graph[curr]) continue;
    graph[curr]
      .sort((a, b) => a - b)
      .forEach((val) => {
        if (visited[val]) return;
        queue.push(val);
      });
  }
  console.log(ans.join(" "));
};

const solution = (q) => {
  const [MNV, ...rest] = q;
  const [m, n, V] = MNV.split(" ");
  const arr = rest.map((s) => s.split(" ").map(Number));

  const graph = getGraph(arr);
  dfs(graph, [+V], [false]);
  bfs(graph, [+V], [false]);
};

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
solution(input);

// [
//   ["4 5 1", "1 2", "1 3", "1 4", "2 4", "3 4"],
//   ["5 5 3", "5 4", "5 2", "1 2", "3 4", "3 1"],
//   ["1000 1 1000", "999 1000"]
// ].forEach((q) => solution(q));
