/**
 * lv2. n진수 게임
 *
 * 2018 KAKAO BLIND RECRUITMENT
 *
 * https://programmers.co.kr/learn/courses/30/lessons/17687?language=javascript
 * 
 * JS라서 쉽게 풀수 있었던 문제
 * 함수형으로 풀었다면 좀 더 가독성이 좋았을 듯
 */


/**
 * n 진법, t 숫자갯수, m 참가인원, p 순서
 */
function solution(n, t, m, p) {
	let nums = "";
	let tubes = "";

	for (let i = 0; i < t * m + 1; i++) {
		nums += i.toString(n).toUpperCase();
	}

	for (let j = 0; j < t; j++) {
		tubes += nums[j * m + p - 1] || "";
	}

	return tubes;
}

module.exports = function solve() {
	const qq = [
		[2, 4, 2, 1],
		[16, 16, 2, 1],
		[16, 16, 2, 2]
	];

	qq.forEach((ele) => console.log(solution(...ele)));
};
