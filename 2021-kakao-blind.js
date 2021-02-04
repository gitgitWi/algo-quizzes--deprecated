/**
 * lv1. 신규 아이디 추천
 *
 * 아이디 생성 단계
 * - 모든 대문자 => 소문자
 * - 허용된 문자외 다른 문자 제거
 * - 마침표 2번 이상인 경우 1개로
 * - 마침표 처음과 끝에 있으면 제거
 * - 빈 문자열이 되면 a 대입
 * - 16자 이상이면 앞의 15자만, 마침표가 끝에 있으면 제거
 * - 2자 이하이면 마지막 문자를 반복해 추가하여 3글자로
 *
 * @param {string} newId  1~1000자
 * @returns {string} 3~15자, [a-z0-9\-\_\.], 마침표(.)은 처음, 끝, 연속 사용 불가
 */
// const solution = (newId) => {
// 	let ans = newId
// 		.toLowerCase()
// 		.replace(/[^a-z0-9\-\_\.]+/g, "")
// 		.replace(/\.{2,}/g, ".")
// 		.replace(/^\./, "")
// 		.replace(/\.$/, "");

// 	ans = ans.length > 0 ? ans : "a";
// 	ans = ans.length > 15 ? ans.slice(0, 15) : ans;
// 	ans = ans.replace(/^\./, "").replace(/\.$/, "");
// 	ans = ans.length < 3 ? ans.padEnd(3, ans[ans.length - 1]) : ans;
// 	return ans;
// };

// [
// 	["...!@BaT#*..y.abcdefghijklm"],
// 	["z-+.^."],
// 	["=.="],
// 	["123_.def"],
// 	["abcdefghijklmn.p"],
// ].forEach((q) => console.log(solution(...q)));

/**
 * lv2. 메뉴 리뉴얼
 *
 * 코스 요리 만들기
 * - 가장 많이 함께 주문한 단품을 코스메뉴로 조합
 * - 최소 2개 이상 구성
 * - 최소 2명 이상 주문된 조합만
 *
 * @param {string[]} orders 주문 이력, 2~20개 원소, 각 원소 길이 2~10, 중복
 * @param {number[]} course 구성할 요리 수, 1~10개 수, 각 원소 2~10, 오름차순, 중복X
 * @returns {string[]}  최소 2개 이상, 각 원소 알파벳 오름차순 정렬
 */
// const solution = (_orders, _course) => {
// 	const orders = {};

// 	// _orders 각 원소에서 조합 추출해 orders 객체에 key = 주문 string, value = count값 저장
// 	_orders.forEach((order) => {
// 		// 조합
// 		Array.from(order)
// 			.reduce(
// 				(prev, val) => {
// 					const curr = [];
// 					prev.forEach((a) => {
// 						curr.push(a);
// 						curr.push(a + val);
// 					});
// 					return curr;
// 				},
// 				[""]
// 			)
// 			.forEach((ele) => {
// 				if (ele.length > 1) {
// 					ele = Array.from(ele).sort().join("");
// 					orders[ele] ? orders[ele]++ : (orders[ele] = 1);
// 				}
// 			});
// 	});

// 	// _course 각 원소에 해당하는 길이 가진 요리들 중 count가 가장 높은 것만 저장
// 	// 오름차순 정렬?
// 	const courses = [];
// 	_course.forEach((len) => {
// 		const keys = Object.keys(orders).filter((key) => key.length === len);
// 		const maxi = Math.max(
// 			...keys.map((key) => orders[key]).filter((cnt) => cnt > 1)
// 		);
// 		if (maxi > 1) {
// 			courses.push(...keys.filter((key) => orders[key] === maxi));
// 		}
// 	});
// 	return courses.sort();
// };

// [
// 	[
// 		["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],
// 		[2, 3, 4],
// 	],
// 	[
// 		["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],
// 		[2, 3, 5],
// 	],
// 	[
// 		["XYZ", "XWY", "WXA"],
// 		[2, 3, 4],
// 	],
// ].forEach((q) => console.log(solution(...q)));

/**
 * lv2. 순위 검색
 *
 * query 조건을 만족하는 지원자 중 점수를 x점 이상 받은 지원자 수?
 * 개발언어: cpp, java, python, -
 * 직군: backend, frontend, -
 * 경력: junior, senior, -
 * 소울푸드: chicken, pizza, -
 * 점수
 *
 * 효율성 테스트 전부 실패
 *
 * @param {string[]} info 1~50000, "개발언어 직군 경력 소울푸드 점수"
 * @param {string[]} query 1~100000, "개발언어 and 직군 and 경력 and 소울푸드"
 * @returns {number[]}
 */
// const solution = (info, query) => {
// 	const infoTree = {};

// 	const infoParser = (str) => {
// 		const [lan, end, year, food, score] = str.split(" ");
// 		if (!infoTree[lan]) infoTree[lan] = {};
// 		if (!infoTree[lan][end]) infoTree[lan][end] = {};
// 		if (!infoTree[lan][end][year]) infoTree[lan][end][year] = {};
// 		if (!infoTree[lan][end][year][food])
// 			infoTree[lan][end][year][food] = [];

// 		infoTree[lan][end][year][food].push(+score);
// 	};

// 	info.forEach(infoParser);

// 	const queryParser = (str) => str.split(/\s+/).filter((e) => e !== "and");

// 	return query.map(queryParser).map((q) => {
// 		let people = 0;

// 		const traverse = (idx = 0, prev = infoTree) => {
// 			if (idx === 4) {
// 				people += prev.filter((ele) => ele >= q[idx]).length;
// 				return;
// 			}

// 			if (q[idx] !== "-") {
// 				if (prev[q[idx]]) traverse(idx + 1, prev[q[idx]]);
// 			} else {
// 				Object.keys(prev).forEach((key) => {
// 					if (prev[key]) traverse(idx + 1, prev[key]);
// 				});
// 			}
// 		};
// 		traverse();

// 		return people;
// 	});
// };

// 당연히 시간 더 오래 걸림
// const solution = (info, query) => {
// 	class Candidate {
// 		constructor(lan, end, year, food, score) {
// 			this.lan = lan;
// 			this.end = end;
// 			this.year = year;
// 			this.food = food;
// 			this.score = score;
// 		}
// 	}

// 	const candidates = [];

// 	const infoParser = (str) => {
// 		const [lan, end, year, food, score] = str.split(" ");
// 		candidates.push(new Candidate(lan, end, year, food, +score));
// 	};
// 	info.forEach(infoParser);

// 	const queryParser = (str) => str.split(/\s+/).filter((e) => e !== "and");

// 	return query.map(queryParser).map(([lan, end, year, food, score]) => {
// 		return candidates
// 			.filter((c) => (lan === "-" ? true : c.lan === lan))
// 			.filter((c) => (end === "-" ? true : c.end === end))
// 			.filter((c) => (year === "-" ? true : c.year === year))
// 			.filter((c) => (food === "-" ? true : c.food === food))
// 			.filter((c) => c.score >= score).length;
// 	});
// };

// [
// 	[
// 		[
// 			"java backend junior pizza 150",
// 			"python frontend senior chicken 210",
// 			"python frontend senior chicken 150",
// 			"cpp backend senior pizza 260",
// 			"java backend junior chicken 80",
// 			"python backend senior chicken 50",
// 		],
// 		[
// 			"java and backend and junior and pizza 100",
// 			"python and frontend and senior and chicken 200",
// 			"cpp and - and senior and pizza 250",
// 			"- and backend and senior and - 150",
// 			"- and - and - and chicken 100",
// 			"- and - and - and - 150",
// 		],
// 	],
// ].forEach((q) => console.log(solution(...q)));

/**
 * lv3. 합승 택시 요금
 * 출발 S => A, B 각각 도착하는데 최저 요금
 *
 * 1차: 효율성 모두 실패
 * - 다익스트라 최단경로 활용 (getRoute)
 * - Start -> Stopover
 * - Stopover -> A
 * - Stopover -> B
 * - stopver에 따른 최단 경로값 들 중 최소값
 * - getRoute 함수 한번만 실행해도 효율성 절반 정도는 시간 초과
 *
 * @param {number} n 지점개수, 3~200
 * @param {number} s 출발지점
 * @param {number} a A 도착지점
 * @param {number} b B 도착지점
 * @param {number[][]} fares 간선 간 요금, [C지점, D지점, 요금F]
 * @returns {number} 최저 요금
 */
const solution = (n, s, a, b, fares) => {
	const graph = fares.reduce((acc, val) => {
		const [c, d, f] = val;
		acc[d] ? (acc[d][c] = f) : (acc[d] = { [c]: f });
		acc[c] ? (acc[c][d] = f) : (acc[c] = { [d]: f });
		return acc;
	}, {});

	const fees = Array(n + 1)
		.fill(0)
		.reduce((acc, _, idx) => {
			acc.push(Array(n + 1).fill(Infinity));
			acc[idx][idx] = 0;
			return acc;
		}, []);

	const getRoute = (
		current,
		start,
		dest,
		feeAcc = 0,
		visited = Array(n + 1).fill(false)
	) => {
		if (current === dest) return;
		visited[current] = true;

		if (graph[current]) {
			Object.keys(graph[current]).forEach((nextNode) => {
				if (visited[nextNode]) return;
				const nextFee = feeAcc + graph[current][nextNode];
				if (nextFee > fees[start][nextNode]) return;
				fees[start][nextNode] = nextFee;
				getRoute(+nextNode, start, dest, nextFee, [...visited]);
			});
		}
	};

	let ans = Infinity;
	[...Array(n).keys()]
		.map((n) => n + 1)
		.forEach((stopover) => {
			getRoute(s, s, stopover);
			getRoute(stopover, stopover, a);
			getRoute(stopover, stopover, b);

			if (
				[
					fees[s][stopover],
					fees[stopover][a],
					fees[stopover][b],
				].includes(Infinity)
			)
				return;

			const temp =
				fees[s][stopover] + fees[stopover][a] + fees[stopover][b];

			if (temp < ans) {
				ans = temp;
			}
		});

	return ans;
};

/**
 * 2차. 플로이드 워셜 알고리즘 적용
 *
 * 이전까지 for 쓰기 싫어서 range 함수 만들었었는데..
 * - `const range = (n) => [...Array(n + 1).keys()];`
 * range 함수 호출에서 시간 초과로 효율성 1개만 통과..
 * for 로 전부 바꾸고 통과
 *
 * 효율성 테스트가 있는 경우에는 forEach 자체해야 할 듯
 * */
const solution = (n, s, a, b, fares) => {
	const fees = Array(n + 1)
		.fill(0)
		.reduce((acc, _, idx) => {
			acc.push(Array(n + 1).fill(Infinity));
			acc[idx][idx] = 0;
			return acc;
		}, []);

	fares.reduce((_, val) => {
		const [c, d, f] = val;
		fees[c][d] = f;
		fees[d][c] = f;
		return _;
	}, 0);

	// 플로이드 워셜 알고리즘에 따라
	// 모든 노드간 최소 비용 산출
	for (let k = 1; k < n + 1; k++) {
		for (let a = 1; a < n + 1; a++) {
			for (let b = 1; b < n + 1; b++) {
				const temp = fees[a][k] + fees[k][b];
				if (temp < fees[a][b]) fees[a][b] = temp;
			}
		}
	}

	let ans = Infinity;
	for (let stopover = 1; stopover < n + 1; stopover++) {
		const temp = fees[s][stopover] + fees[stopover][a] + fees[stopover][b];
		if (temp < ans) ans = temp;
	}

	return ans;
};

[
	[
		6,
		4,
		6,
		2,
		[
			[4, 1, 10],
			[3, 5, 24],
			[5, 6, 2],
			[3, 1, 41],
			[5, 1, 24],
			[4, 6, 50],
			[2, 4, 66],
			[2, 3, 22],
			[1, 6, 25],
		],
	],
	[
		7,
		3,
		4,
		1,
		[
			[5, 7, 9],
			[4, 6, 4],
			[3, 6, 1],
			[3, 2, 3],
			[2, 1, 6],
		],
	],
	[
		6,
		4,
		5,
		6,
		[
			[2, 6, 6],
			[6, 3, 7],
			[4, 6, 7],
			[6, 5, 11],
			[2, 5, 12],
			[5, 3, 20],
			[2, 4, 8],
			[4, 3, 9],
		],
	],
].forEach((q) => console.log(solution(...q)));
