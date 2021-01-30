/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) =>
	nums.reduce(
		(acc) => {
			const curr = [];
			nums.forEach((num) => {
				acc.forEach(
					(a) => !a.includes(num) && curr.push(a.concat(num))
				);
			});
			return curr;
		},
		[[]]
	);
// @lc code=end
