/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change 2
 */

// @lc code=start
/**
 * Space O(N)
 *
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function (amount, coins) {
  const memo = Array(amount + 1).fill(0);
  memo[0] = 1;
  for (const coin of coins) {
    for (let sum = 1; sum < amount + 1; sum++) {
      if (coin <= sum) memo[sum] += memo[sum - coin];
    }
  }
  return memo[amount];
};

/**
 * Space O(MN)
 *
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function (amount, coins) {
  let ans = 0;

  const memo = Array.from({ length: coins.length + 1 }, () =>
    Array(amount + 1).fill(0)
  );
  memo[0][0] = 1;
  for (const coin in memo) {
    if (+coin === 0) continue;
    for (const sum in memo[coin]) {
      if (sum === "0") {
        memo[coin][sum] = 1;
        continue;
      }

      memo[coin][sum] =
        coins[+coin - 1] > +sum
          ? memo[+coin - 1][sum]
          : memo[+coin - 1][sum] + memo[coin][+sum - coins[+coin - 1]];
    }
  }

  return memo[coins.length][amount];
};
// @lc code=end
