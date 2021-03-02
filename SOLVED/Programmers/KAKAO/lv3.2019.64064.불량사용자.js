/**
 * Kakao 2019.
 * lv3. 64064. 불량 사용자
 * - https://programmers.co.kr/learn/courses/30/lessons/64064?language=javascript
 *
 * 모든 경우의 수를 찾아야 하기 때문에 DP 활용해 풀이
 * N-Queens 변형 문제 같은 느낌으로 풀음
 */

/**
 * isCandidate
 * 해당 사용자 id가 차단 사용자 id일 수 있는지 판단하는 helper 함수
 * @param {string} uid 사용자 id
 * @param {string} bid 차단 사용자 id
 */
function isCandidate(uid, bid) {
  if (uid.length !== bid.length) return false;
  for (let i = 0; i < uid.length; i++) {
    if (bid[i] === "*") continue;
    if (uid[i] !== bid[i]) return false;
  }
  return true;
}

/**
 * solution
 *
 * @param {string[]} userId 사용자 id 배열
 * @param {string[]} bannedId 차단 사용자 id 배열
 */
function solution(userId, bannedId) {
  const uidSize = userId.length;
  const bidSize = bannedId.length;
  const memo = Array.from({ length: uidSize }, () =>
    Array(bidSize).fill(false)
  );
  for (const uid in userId) {
    for (const bid in bannedId) {
      if (isCandidate(userId[uid], bannedId[bid])) memo[uid][bid] = true;
    }
  }

  const visitedRow = Array(uidSize).fill(false);
  const resSet = new Set();
  const dp = (crow, ccol, res) => {
    // 마지막 bid까지 판단한 경우, set에 추가
    if (ccol === bidSize - 1) {
      resSet.add(res.sort().join(","));
      return;
    }

    visitedRow[crow] = true;
    const ncol = ccol + 1;
    for (const nrow in memo) {
      // 다음 row == uid 에 대해 후보자이면서 방문하지 않은 경우 다음 dp 실행
      if (memo[nrow][ncol] && !visitedRow[nrow]) {
        dp(nrow, ncol, [...res, userId[nrow]]);
      }
    }

    // visitedRow가 공유되고 있으므로
    // 해당 열에서 작업 마치면 다른 경우의 수를 위해 방문처리 취소
    visitedRow[crow] = false;
    return;
  };

  // 특정 사용자 id에서 출발
  for (const uid in userId) {
    if (!memo[uid][0]) continue;
    dp(uid, 0, [userId[uid]]);
  }

  // 결과 size
  return resSet.size;
}
