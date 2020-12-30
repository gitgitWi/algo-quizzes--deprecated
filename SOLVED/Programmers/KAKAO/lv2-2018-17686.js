/**
 * lv2. 파일명 정렬
 *
 * 2018 KAKAO BLIND RECRUITMENT
 *
 * https://programmers.co.kr/learn/courses/30/lessons/17686?language=javascript
 *
 * match-그룹을 잘 쓰면 한방에 다 나눠버릴 수 있다
 * tail은 필요가 없다는 걸 다른 분들 코드를 보고 알았다..
 * localeCompare 를 못 쓴다면 어떻게 짤 것인지?
 */

const numReg = /\d+/;

function solution(files) {
	const parsed = files
		.map((name) => {
			const [head, tail] = name.split(numReg);
			const nums = Number(name.match(numReg));
			return { head, nums, name };
		})
		.sort((a, b) => a.nums - b.nums)
		.sort((a, b) =>
			a.head.toUpperCase().localeCompare(b.head.toUpperCase())
		)
		.map(({ name }) => name);

	return parsed;
}

module.exports = function solve() {
	const qq = [
		[
			[
				"img12.png",
				"img10.png",
				"img02.png",
				"img1.png",
				"IMG01.GIF",
				"img2.JPG"
			]
		],
		[
			[
				"F-5 Freedom Fighter",
				"B-050 Superfortress",
				"A-0010 Thunderbolt II",
				"F-14 Tomcat"
			]
		],
		[["F-5 Freedom 654 Fighter", "B-50 Superfortress 23"]]
	];

	qq.forEach((ele) => console.log(solution(...ele)));
};
