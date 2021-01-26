/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
	const arr = Array.from(s);
	const stack = [];
	while (arr.length > 0) {
		const curr = arr.pop();
		switch (curr) {
			case "(":
				if (stack.pop() !== ")") return false;
				break;
			case "{":
				if (stack.pop() !== "}") return false;
				break;
			case "[":
				if (stack.pop() !== "]") return false;
				break;
			default:
				stack.push(curr);
				break;
		}
	}
	return stack.length === 0;
};
// @lc code=end
