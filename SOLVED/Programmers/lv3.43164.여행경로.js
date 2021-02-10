/**
 * lv3. 여행경로
 * - https://programmers.co.kr/learn/courses/30/lessons/43164
 *
 *  출발은 무조건 ICN부터
 * 
 *  백트래킹 활용한 DFS
 *  전체적인 발상 자체는 크게 어렵지 않았지만,
 *  name2idx - idx2name 구현을 어떻게 해야 할지,
 *  backtracking에서 visited 해제하는 부분을 놓쳐서 오래 걸렸음..
 * 
 *  공항 수 최대 10,000개면 시간 복잡도가 어느 정도 될 것 같아서,
 *  차라리 공간을 좀더 써서 idx-name 전환 배열, ticket 2차원 배열을 만들었다
 *  다른 사람들 풀이를 보니, slice 활용하고 그냥 배열 순회했어도 되는거였나 보다..
 *
 * @param {string[][]} ways 경로정보, [a, b]: a -> b, 3 <= 총 공항수 <= 10,000
 * @returns {string[]} 여러 경로 있는 경우 알파벳 순으로 가장 먼저인 경로
 */
const solution = (ways) => {
  const START = "ICN";
  const SIZE = ways.length + 1;

  const idx2name = [];
  const name2idx = ways.reduce((acc, val) => {
    const [a, b] = val;
    if (acc[a] === undefined) {
      const idx = idx2name.length
      acc[a] = idx;
      idx2name[idx] = a;
    }
    if (acc[b] === undefined) {
      const idx = idx2name.length
      acc[b] = idx;
      idx2name[idx] = b;
    }
    return acc;
  }, {});

  const tickets = Array.from({ length: idx2name.length }, () => Array(idx2name.length).fill(0));
  ways.map(way => {
    const [from, to] = way;
    tickets[name2idx[from]][name2idx[to]] += 1;
  });

  const routes = [];

  // backtracking 함수
  const bt = (from, res) => {
    if (res.length === SIZE) {
      routes.push(res);
      return true;
    }
    let isNextOK = false;
    const fromIdx = name2idx[from];
    for (const toIdx in tickets[fromIdx]) {
      if (!tickets[fromIdx][toIdx]) continue;

      // backtracking
      // tickets memoization을 deepcopy해서 args로 넘기기엔 구현하기 쉽지 않으므로,
      // isNextOK 변수로 체크한 뒤, 다음 사용을 위해 tickets[fromIdx][toIdx] 값 복구
      tickets[fromIdx][toIdx] -= 1;
      if (bt(idx2name[toIdx], res.concat(idx2name[toIdx]))) isNextOK = true;
      tickets[fromIdx][toIdx] += 1;
    }
    return isNextOK;
  }

  // 경로 탐색 시작
  bt(START, [START]);

  // 알파벳 순 정렬후 가장 첫번째
  return routes.sort()[0];
};

[
  [
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ],
  [
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ],
].forEach((q) => console.log(solution(q)));
