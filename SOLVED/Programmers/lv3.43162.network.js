/**
 * lv3. 네트워크
 *
 * 네트워크의 수 == 합집합의 수
 *
 * @param {number} n 컴퓨터 개수
 * @param {number[]} coms 연결 정보
 * @returns
 */
const solution = (n, coms) => {
  let ans = 0;
  const nodes = Array(n).fill(false);
  for (const node in nodes) {
    if (nodes[node]) continue;
    nodes[node] = true;

    // BFS
    const queue = [node];
    while (queue.length) {
      const cnode = queue.shift();
      for (const nextNode in coms[cnode]) {
        if (nodes[nextNode] || !coms[cnode][nextNode]) continue;
        nodes[nextNode] = true;
        queue.push(nextNode);
      }
    }
    ans += 1;
  }

  return ans;
};
