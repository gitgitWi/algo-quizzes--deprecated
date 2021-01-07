/**
 * 최단경로
 *
 * - 다익스트라 강의 참고해서 Python -> JS로 언어 변경해 적용해봄
 * - 다익스트라 + 우선순위 큐(연결리스트) 활용해 예제는 맞췄는데
 * - 런타임에러만 계속나서 확인을 못하고 있음..
 * - 우선순위 큐 구현에 시간이 너무 걸리는데 이게 맞는건지 잘 모르겠음
 *
 * https://www.acmicpc.net/problem/1753
 */

const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Element {
  constructor(index, distance, next = null) {
    this.index = index;
    this.distance = distance;
    this.next = next;
  }
}

class PriorityQueue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(index, dist) {
    const newEle = new Element(index, dist);
    this.length++;
    if (!this.head) {
      this.head = newEle;
      return;
    }

    const current = this.head;
    if (current.distance > dist) {
      [this.head, newEle.next] = [newEle, current];
      return;
    }

    while (current.next && current.next.distance <= dist) {
      current = current.next;
    }
    // current - newEle - current.next
    [current.next, newEle.next] = [newEle, current.next];
  }

  pop() {
    if (!this.head) return null;
    const head = this.head;
    this.head = this.head.next;
    this.length--;
    return head;
  }
}

const solution = (inputs) => {
  // input 데이터 전처리
  const [ve, k, ...edges] = inputs;
  const [V, E] = ve.split(" ").map((e) => +e);
  const Start = +k;

  // 간선 정보를 그래프로 변환
  const graph = Array(V + 1)
    .fill(1)
    .map((_) => []);
  edges
    .map((ele) => ele.split(" ").map((e) => +e))
    .forEach(([a, b, c]) => {
      graph[a].push([b, c]);
    });

  const distances = Array(V + 1).fill(Infinity);

  const dijkstra = (start) => {
    // 우선순위 큐 활용
    const q = new PriorityQueue();
    q.add(start, 0);
    distances[start] = 0;

    while (q.length > 0) {
      // 최단거리 가장 짧은 노드 pop
      const { index, distance } = q.pop();
      // console.log(index, distance);
      // 방문여부/최소길이 비교
      if (distances[index] < distance) continue;

      // 인접리스트에서 인접 노드들 확인
      graph[index].forEach((ele) => {
        const [idx, dist] = ele;
        const length = distance + dist;
        // 현재 노드를 거치는 거리가 더 짧은 경우 distances 간선 완화
        if (length < distances[idx]) {
          distances[idx] = length;
          q.add(idx, length);
        }
      });
    }
  };

  dijkstra(Start);

  console.log(distances.slice(1).join("\n"));
};

// [["5 6", "1", "5 1 1", "1 2 2", "1 3 3", "2 3 4", "2 4 5", "3 4 6"]].forEach(
//   solution
// );

solution(inputs);
