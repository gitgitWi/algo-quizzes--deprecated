/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * [참고]
 * 승지니어 기술면접 라이브코딩 기본편
 * 예제로 알아보는 백트래킹
 * (https://youtu.be/Bt11jaoqt_Y)
 */

// @lc code=start
const generator = (n, openNum, closeNum, str, results) => {
	if (openNum === n && openNum === closeNum) {
		results.push(str);
		return;
	}
	if (openNum < n) generator(n, openNum + 1, closeNum, str + "(", results);
	if (closeNum < openNum)
		generator(n, openNum, closeNum + 1, str + ")", results);
};

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
	const results = [];
	generator(n, 0, 0, "", results);
	return results;
};
// @lc code=end
