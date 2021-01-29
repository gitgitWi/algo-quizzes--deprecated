/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) =>
	nums.reverse().reduce(
		(acc, val) => {
			const curr = [];
			acc.forEach((e) => {
				curr.push(e);
				curr.push([val].concat(e));
			});
			return curr;
		},
		[[]]
	);
// @lc code=end
