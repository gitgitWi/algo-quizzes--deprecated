/**
 * 플로이드 와샬 알고리즘으로 풀이
 * @param {number} n 선수의 수, 1~100
 * @param {number[][]} results 경기결과, [a, b] === a가 b를 이김
 * @returns {number} 정확하게 순위를 매길 수 있는 선수의 수
 */
const solution = (n, results) => {
	// 각 결과에 대해 2차원 배열에 표기
	const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
	results.map((val) => {
		const [win, lose] = val;
		graph[win][lose] = 1;
		graph[lose][win] = -1;
		graph[win][win] = 0;
		graph[lose][lose] = 0;
	});

	// Python의 range를 대체하여 좀더 간편하게 활용
	const rangeN = [...Array(n).keys()].map((e) => e + 1);

	// 플로이드 와샬 알고리즘 적용
	for (const mid of rangeN) {
		for (const a of rangeN) {
			for (const b of rangeN) {
				// a가 mid를 이기고, mid가 b를 이기면 a가 b를 이김
				if (graph[a][mid] === 1 && graph[mid][b] === 1) graph[a][b] = 1;
				// a가 mid에게 지고, mid가 b에게 지면 a가 b에게 짐
				if (graph[a][mid] === -1 && graph[mid][b] === -1)
					graph[a][b] = -1;
			}
		}
	}

	// 경기결과를 추측할 수 없는 경우는 false로 그대로 남아있음
	// 각 선수에 대해 false가 전혀 없는 경우만 ans + 1
	let ans = 0;
	for (const self of rangeN) {
		let hasFalse = false;
		for (const other of rangeN) {
			if (graph[self][other] === false) {
				hasFalse = true;
				break;
			}
		}
		ans += hasFalse ? 0 : 1;
	}

	return ans;
};

/**
 * 조건에 맞는 수만 카운트 하는 방식으로 풀이
 *
 * @param {number} n 선수의 수, 1~100
 * @param {number[][]} results 경기결과, [a, b] === a가 b를 이김
 * @returns {number} 정확하게 순위를 매길 수 있는 선수의 수
 */
const solution = (n, results) => {
	const rangeN = [...Array(n).keys()].map((e) => e + 1);
	// key: winner, value : Set([losers])
	const wins = {};
	// key: loser, value : Set([winners])
	const loses = {};
	rangeN.map((key) => {
		wins[key] = new Set([]);
		loses[key] = new Set([]);
	});

	// 승패 결과 저장
	results.map((val) => {
		const [winner, loser] = val;
		wins[winner].add(loser);
		loses[loser].add(winner);
	});

	rangeN.map((i) => {
		// i 선수를 이긴 선수(losers[i])는 i 선수에게 패한 선수들(wins[i])도 이김
		for (const winner of [...loses[i]]) {
			if (!wins[winner]) continue;
			for (const loser of wins[i]) {
				wins[winner].add(loser);
			}
		}
		// i 선수에게 패한 선수는 i선수를 이긴 선수들에게도 패함
		for (const loser of [...wins[i]]) {
			if (!loses[loser]) continue;
			for (const winner of loses[i]) {
				loses[loser].add(winner);
			}
		}
	});

	return rangeN.reduce(
		(ans, i) => (wins[i].size + loses[i].size === n - 1 ? ans + 1 : ans),
		0
	);
};

console.log(
	solution(5, [
		[4, 3],
		[4, 2],
		[3, 2],
		[1, 2],
		[2, 5],
	])
);
