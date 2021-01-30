/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start

const getSum = (candidates, currentTarget, ans, sum = []) => {
	if (currentTarget === 0) {
		const sortedSum = sum.sort((a, b) => a - b);
		const sumToStr = sortedSum.join(",");
		if (!ans[sumToStr]) ans[sumToStr] = sortedSum;
		return;
	}

	candidates.forEach((can) => {
		if (currentTarget >= can)
			getSum(candidates, currentTarget - can, ans, sum.concat(can));
	});
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
	const ans = {};
	getSum(candidates, target, ans);
	return Object.values(ans);
};
// @lc code=end
