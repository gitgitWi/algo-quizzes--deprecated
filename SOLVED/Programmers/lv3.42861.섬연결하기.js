/**
 * Greedy. lv3. 섬 연결하기
 * - https://programmers.co.kr/learn/courses/30/lessons/42861?language=javascript
 *
 * 크루스칼 알고리즘 적용
 */
function solution(n, costs) {
  const parents = [...Array(n).keys()];
  const rank = Array(n).fill(0);

  function findParent(node) {
    if (parents[node] !== node) parents[node] = findParent(parents[node]);
    return parents[node];
  }

  function unionParent(a, b) {
    const aParent = findParent(a);
    const bParent = findParent(b);

    // union-by-rank 적용하여 최적화
    if (rank[aParent] > rank[bParent]) {
      parents[bParent] = aParent;
    } else {
      parents[aParent] = bParent;
      if (rank[aParent] === rank[bParent]) rank[bParent] += 1;
    }
  }

  const edges = costs.sort((a, b) => a[2] - b[2]);
  let res = 0;

  for (const [a, b, c] of edges) {
    if (findParent(a) !== findParent(b)) {
      unionParent(a, b);
      res += c;
    }
  }

  return res;
}

// 크루스칼 알고리즘 기본
function solution(n, costs) {
  const parents = [...Array(n).keys()];

  function findParent(node) {
    if (parents[node] !== node) parents[node] = findParent(parents[node]);
    return parents[node];
  }

  function unionParent(a, b) {
    const aParent = findParent(a);
    const bParent = findParent(b);
    aParent < bParent
      ? (parents[bParent] = aParent)
      : (parents[aParent] = bParent);
  }

  const edges = costs.sort((a, b) => a[2] - b[2]);
  let res = 0;

  for (const [a, b, c] of edges) {
    if (findParent(a) !== findParent(b)) {
      unionParent(a, b);
      res += c;
    }
  }

  return res;
}
