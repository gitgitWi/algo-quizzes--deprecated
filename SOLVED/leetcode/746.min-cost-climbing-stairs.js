/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (cost) => {
	const accs = [cost[0], cost[1]];
	const SIZE = cost.length;
	let i = 2;
	while (i < SIZE) {
		accs[i] = Math.min(accs[i - 1], accs[i - 2]) + cost[i];
		i++;
	}
	console.log(accs);
	return Math.min(accs[SIZE - 1], accs[SIZE - 2]);
};
// @lc code=end
