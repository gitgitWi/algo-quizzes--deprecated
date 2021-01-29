/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * 코드없는 프로그래밍 참고
 * - 코딩테스트, 기초, 백트래킹 backtracking 소개
 * - https://youtu.be/Ar40zcPoKEI
 */

// @lc code=start
const letters = {
	2: ["a", "b", "c"],
	3: ["d", "e", "f"],
	4: ["g", "h", "i"],
	5: ["j", "k", "l"],
	6: ["m", "n", "o"],
	7: ["p", "q", "r", "s"],
	8: ["t", "u", "v"],
	9: ["w", "x", "y", "z"],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
	if (digits.length === 0) return [];
	const answer = [];
	const getCombi = (idx = 1, combi = "") => {
		if (idx > digits.length) {
			answer.push(combi);
			return;
		}
		[...letters[digits[idx - 1]]].forEach((l) =>
			getCombi(idx + 1, combi + l)
		);
	};
	getCombi(1, "");
	return answer;
};
// @lc code=end
