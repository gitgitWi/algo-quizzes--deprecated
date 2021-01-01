/**
 * lv2. 소수 판별
 * 문제: https://level.goorm.io/exam/43238/%EC%86%8C%EC%88%98-%ED%8C%90%EB%B3%84/quiz/1
 *
 * FP로 풀어봄
 */

// 풀이 부분
const getRange = (num) =>
	[...Array(Math.floor(Math.sqrt(Number(num)))).keys()].map((ele) => ele + 1);

const findPrime = (num) => {
	const numRange = getRange(num);

	const factors = [];
	numRange.forEach((ele) => {
		if (num % ele === 0) {
			factors.push(ele, num / ele);
		}
	});

	console.log(factors.length === 2 ? "True" : "False");
};

// 입출력
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function (line) {
	findPrime(line);
	rl.close();
}).on("close", function () {
	process.exit();
});
