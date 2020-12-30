/**
 * lv2. 후보키
 *
 * 2019 KAKAO BLIND RECRUITMENT
 *
 * https://programmers.co.kr/learn/courses/30/lessons/42890?language=javascript
 *
 * 두 시간 정도 고민하다가 아래 블로그 참고해서 해결..
 * https://velog.io/@sso/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-javascript-%EC%98%A4%ED%94%88%EC%B1%84%ED%8C%85%EB%B0%A9
 *
 * 위 블로그 해결 방식과 비슷하게 생각은 했던 것 같은데,
 * 1차로 경우의 수 만드는 게 익숙치 않아서 오래걸렸고,
 * 각 경우의 수별로 일일이 비교하는게 연산이 너무 많지 않을까하는 고민 때문에 오래 걸림
 * 제출 결과, 우려할만큼 리소스 문제는 없었고 이전 문제들에 비해 아주 조금 더 많이 나오는 정도..
 */

const getRange = (num) => [...Array(num).keys()];

/**
 * 경우의 수 만들기
 * 현재 원소가 포함되는 경우와 그렇지 않은 경우
 */
const getCases = (arrayLength) => {
	let cases = [[]];
	getRange(arrayLength).forEach((idx) => {
		const temp = [...cases];
		cases = [];
		temp.forEach((ele) => {
			cases.push([...ele, idx]);
			cases.push([...ele]);
		});
	});
	return cases
		.filter((ele) => ele.length)
		.sort((a, b) => a.length - b.length);
};

/**
 * 최소성 검사
 * 찾아진 키 집합의 원소가 현재 검사 예정인 키에 완전히 포함되는지
 */
const isIncludes = (current, keys) => {
	let isIn = false;
	keys.forEach((item) => {
		let count = 0;
		item.forEach((id) => {
			if (current.includes(id)) count++;
		});
		if (count === item.length) isIn = true;
	});

	return isIn;
};

function solution(relation) {
	const colLen = relation[0].length;
	const rowLen = relation.length;
	const keys = [];

	/**
	 * 각 경우의 수 중 최소성 검사 통과한 경우 유일성 검사
	 * 각 row 별로 colums 값들을 하나의 문자열로 만들어 Set 에 보관
	 * Set에 있는 경우 유일하지 않으므로 return
	 */
	getCases(colLen).forEach((colIds, idx) => {
		if (isIncludes(colIds, keys)) return;

		const concatSet = new Set();
		for (let row of getRange(rowLen)) {
			let tempStr = "";
			for (let col of colIds) {
				tempStr += relation[row][col];
			}
			if (concatSet.has(tempStr)) return;
			concatSet.add(tempStr);
		}

		keys.push(colIds);
	});
	return keys.length;
}

module.exports = function solve() {
	const qq = [
		[
			["100", "ryan", "music", "2"],
			["200", "apeach", "math", "2"],
			["300", "tube", "computer", "3"],
			["400", "con", "computer", "4"],
			["500", "muzi", "music", "3"],
			["600", "apeach", "music", "2"]
		]
	];

	qq.forEach((q) => console.log(solution(q)));
};
