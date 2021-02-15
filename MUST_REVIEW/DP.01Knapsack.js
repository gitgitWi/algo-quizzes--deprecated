/**
 * 0-1 Knapsack Problem 기본 문제
 *
 * knapsack 문제는 기본적으로 2차원 배열에서 판단해야 함
 * - 참고: https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1/?category[]=Dynamic%20Programming#
 */

/**
 * @param {number} W 가방의 최대 weight 한도
 * @param {number[]} wt 각 item별 weight
 * @param {number[]} val 각 item별 value
 * @param {number} N item 개수
 * @returns {number} 가방에 넣을 수 있는 최대 value
 */
function knapSack(W, wt, val, N) {
  // rows: 각 item을 넣을지 안넣을지 판단
  // cols: 현재 가방의 최대한도가 col이라면 얼마까지 넣을 수 있는지
  const memo = Array.from({ length: N + 1 }, () => Array(W + 1).fill(0));

  for (let n = 1; n < N + 1; n++) {
    for (let w = 1; w < W + 1; w++) {
      memo[n][w] =
        wt[n - 1] > w
          ? // 현재 item의 무게가 sub-problem 최대 한도보다 큰 경우
            // 이전까지 누적된 value 입력
            memo[n - 1][w]
          : // 현재 item 무게가 sub-problem 최대 한도보다 작은 경우
            // (현재 무게 빼고 누적된 value + 현재 value)와 (이전까지 누적된 value)와 비교
            // 이 부분에 대한 점화식 세우는 과정에서 많이 헷갈림..
            Math.max(val[n - 1] + memo[n - 1][w - wt[n - 1]], memo[n - 1][w]);
    }
  }

  // 마지막 item까지 판단하고, 최대 weight 한도에서 가질 수 있는 최대 value
  return memo[N][W];

  // 아래는 recursion 코드는 memoization 제대로 되지 않아 시간 초과 에러
  //
  //   const dp = (N, w) => {
  //       if (N === 0) return (w-wt[N] > 0) ? val[N] : 0;
  //       if (w-wt[N] > 0) return Math.max(dp(N-1, w-wt[N]) + val[N], dp(N-1, w));
  //       return dp(N-1, w);
  //   }
  //   return dp(n-1, W);
}
