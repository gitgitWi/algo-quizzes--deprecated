/*
 * @lc app=leetcode id=1514 lang=javascript
 *
 * [1514] Path with Maximum Probability
 *
 * 다익스트라 + 연결리스트로 구현한 우선순위 큐 연습
 *
 * 거의 2시간 걸려 푼듯?
 * - 그래프 생성 시 Array(n).fill([]) 이렇게만 생성했더니
 * 		배열에 대해서 같은 주소를 참조해서, 모든 push가 들어감
 * - 우선순위 큐 add() if (this.head.prob < prob) 부분에서
 * 		node.next = this.head.next로 잘못 넣어서 헤맸고
 * - 문제에서 양방향 노드이기 때문에
 * 		그래프 만들 때 [from, to] -> [to, from]에도 넣어야 하는 것 안해서 틀림
 *
 * 그래도 두어번 해보니까 전체적인 구조는 조금씩 외워지는 듯함
 */

// @lc code=start

class Node {
  constructor(idx, prob, next = null) {
    this.idx = idx;
    this.prob = prob;
    this.next = next;
  }
}

class QueueList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(idx, prob) {
    const node = new Node(idx, prob);
    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }

    if (this.head.prob < prob) {
      [this.head, node.next] = [node, this.head];
      return;
    }

    let current = this.head;
    while (current.next && current.next.prob >= prob) {
      current = current.next;
    }
    [current.next, node.next] = [node, current.next];
  }

  pop() {
    if (!this.head) return;
    this.length--;
    const head = this.head;
    this.head = this.head.next;
    return head;
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
const maxProbability = (n, edges, succProb, start, end) => {
  const graph = Array(n)
    .fill(0)
    .map((_) => []);
  edges.forEach(([from, to], idx) => {
    graph[from].push([to, succProb[idx]]);
    graph[to].push([from, succProb[idx]]);
  });

  const probs = Array(n).fill(0);

  const pq = new QueueList();
  pq.add(start, 1);
  probs[start] = 0;

  while (pq.head) {
    const { idx, prob } = pq.pop();

    if (probs[idx] > prob) continue;

    graph[idx].forEach(([currIdx, currProb]) => {
      const newProb = prob * currProb;
      if (newProb > probs[currIdx]) {
        probs[currIdx] = newProb;
        pq.add(currIdx, newProb);
      }
    });
  }

  return probs[end];
};
// @lc code=end

const qq = [
  [
    3,
    [
      [0, 1],
      [1, 2],
      [0, 2],
    ],
    [0.5, 0.5, 0.2],
    0,
    2,
  ],
  [
    5,
    [
      [2, 3],
      [1, 2],
      [3, 4],
      [1, 3],
      [1, 4],
      [0, 1],
      [2, 4],
      [0, 4],
      [0, 2],
    ],
    [0.06, 0.26, 0.49, 0.25, 0.2, 0.64, 0.23, 0.21, 0.77],
    0,
    3,
  ],
  [
    5,
    [
      [1, 4],
      [2, 4],
      [0, 4],
      [0, 3],
      [0, 2],
      [2, 3],
    ],
    [0.37, 0.17, 0.93, 0.23, 0.39, 0.04],
    3,
    4,
  ],
];

qq.forEach((q) => console.log(maxProbability(...q)));
// 0.25
// 0.16
// 0.2139
