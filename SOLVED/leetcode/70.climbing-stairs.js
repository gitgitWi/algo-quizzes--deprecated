/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
	const memo = [0, 1, 2];
	let i = 3;
	while (i < n + 1) {
		memo.push(memo[i - 1] + memo[i - 2]);
		i++;
	}
	return memo[n];
};
// @lc code=end
