/**
 * 2019. lv3. 징검다리 건너기
 * 
 * 이진탐색
 * 
 * @param {number[]} stones 징검다리 돌마다 밟을 수 있는 횟수
 * @param {number} k 최대 건너갈 수 있는 거리
 */
function solution(stones, k) {
  const isOK = (n) => {
    let zeros = 0;
    for (const num of stones) {
      (num - n > 0) ? (zeros = 0) : zeros++;
      if (zeros >= k) return false;
    }
    return true;
  }

  let l = 0, r = Number.MAX_SAFE_INTEGER;
  while (l <= r) {
    const cur = Math.floor((l + r) / 2);
    (isOK(cur)) ? (l = cur + 1) : (r = cur - 1);
  }

  return l;
}