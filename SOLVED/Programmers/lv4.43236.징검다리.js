/**
 * lv4. 징검다리
 *
 * @param {number} distance 출발지점에서 도착지점까지 거리, 1 ~ 1,000,000,000
 * @param {number[]} rocks 현재 바위들의 위치, length : 1 ~ 50000
 * @param {number} n 제거할 바위 개수, 1~rocks.length
 * @returns {number} 모든 경우의 바위 사이 최소값들 중 최대값
 */
const solution = (distance, rocks, n) => {
  const START = 0;
  let front = START;
  let rear = distance;

  // 모든 바위, 출발지점, 도착지점 사이 거리를 구하기 위해 distance 추가
  // 바위 위치 정렬
  rocks.push(distance);
  rocks = rocks.sort((a, b) => a - b);
  while (front <= rear) {
    // 현재 loop에서 최소거리
    const mid = Math.floor((front + rear) / 2);

    // 현재 비교대상; 출발지점에서 시작
    let cRock = START;

    // 사라지는 바위 수
    let cnt = 0;

    // 모든 바위, 도착지점과 비교
    // 두 바위 사이 거리가, 현재 최소거리 보다 작으면 사라질 수 있음
    // 반대 경우면 사라질 수 없는 바위이므로, 현재 바위를 비교대상으로 변경
    for (const rock of rocks) {
      rock - cRock < mid ? cnt++ : (cRock = rock);
    }

    // 현재 최소거리에서 사라질 수 있는 바위수가 n 보다 많으면 줄여야 함
    cnt > n ? (rear = mid - 1) : (front = mid + 1);
  }
  return rear;
};

console.log(solution(25, [2, 14, 11, 21, 17], 2));
