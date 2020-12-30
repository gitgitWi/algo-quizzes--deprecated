/**
 * lv1. 실패율
 *
 * 2019 KAKAO BLIND RECRUITMENT
 *
 * https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript
 */

const getRange = (num) => [...Array(num).keys()];

function solution(N, stages) {
	let stageRange = {};
	getRange(N).forEach((idx) => {
		stageRange[idx + 1] = { total: 0, fail: 0 };
	});

	stages.forEach((stage) => {
		getRange(stage).forEach((idx) => {
			const key = idx + 1;
			if (idx >= N) return;
			stageRange[key]["total"]++;
			if (key === stage) {
				stageRange[key]["fail"]++;
			}
		});
	});

	const failRate = {};
	Object.keys(stageRange).forEach((stage) => {
		const { total, fail } = stageRange[stage];
		failRate[stage] = fail / total;
	});

	const orders = Object.keys(failRate).sort((a, b) => {
		return failRate[b] - failRate[a];
	});
	return orders.map((idx) => Number(idx));
}

module.exports = function solve() {
	const qq = [
		[5, [2, 1, 2, 6, 2, 4, 3, 3]],
		[4, [4, 4, 4, 4, 4]]
	];

	qq.forEach((ele) => console.log(solution(...ele)));
};
