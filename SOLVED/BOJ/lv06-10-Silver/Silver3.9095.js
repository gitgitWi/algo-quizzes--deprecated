/**
 * Silver3. 9095. 1, 2, 3 더하기
 *
 * - https://www.acmicpc.net/problem/9095
 *
 * @param {string[]} arr 입력 문자열
 */
const solution = (arr) => {
	const memo = { 1: 1, 2: 2, 3: 4, 4: 7 };
	const nums = arr.slice(1).map(Number);

	const find = (num) => {
		if (memo[num]) return memo[num];
		memo[num] = find(num - 1) + find(num - 2) + find(num - 3);
		return memo[num];
	};

	for (const num of nums) {
		console.log(find(num));
	}
};

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const q = [];
rl.on("line", (line) => {
	line ? q.push(line) : rl.close();
}).on("close", () => {
	solution(q);
	process.exit();
});
