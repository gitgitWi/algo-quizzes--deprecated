/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 *  1차 제출
 *
 *  모든 경우의 수를 구한 뒤, 중복은 sort, map 활용해 제거
 */
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

/**
 *  개선된 방법
 *
 *  현재 인덱스 이상인 경우에만 재귀 호출
 *
 *  참고
 *  - 코드없는 프로그래밍
 *  - Combination 합 (https://youtu.be/C6vZH6hnzJg)
 */
const getSum = (candidates, currentTarget, idx, ans, sum = []) => {
	if (currentTarget === 0) {
		const sortedSum = sum.sort((a, b) => a - b);
		ans.push(sortedSum);
		return;
	}

	candidates.forEach((can, i) => {
		if (currentTarget >= can && i >= idx)
			getSum(candidates, currentTarget - can, i, ans, sum.concat(can));
	});
};

const combinationSum = (candidates, target) => {
	const ans = [];
	getSum(candidates, target, 0, ans);
	return ans;
};
// @lc code=end
