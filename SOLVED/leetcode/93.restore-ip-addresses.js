/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = (s) => {
	const ans = [];

	/**
	 * @param {string} num 숫자 string
	 * @returns {boolean}
	 */
	const isValid = (num) => {
		if (num.length === 0) return false;
		if (num[0] === "0" && num.length > 1) return false;
		if (+num < 0 || +num > 255) return false;
		return true;
	};

	/**
	 * @param {string} rest 남은 문자열
	 * @param {number} dots 남은 구분점 3~0
	 * @param {string} str 만들어진 문자열
	 */
	const getIps = (rest = s, dots = 3, str = "") => {
		if (dots === 0) {
			isValid(rest) && ans.push(str + rest);
			return;
		}

		[1, 2, 3].forEach((idx) => {
			const current = rest.slice(0, idx);
			const next = rest.slice(idx);
			isValid(current) && getIps(next, dots - 1, `${str}${current}.`);
		});
	};

	// IP 복구 시작
	getIps();
	return ans;
};
// @lc code=end
