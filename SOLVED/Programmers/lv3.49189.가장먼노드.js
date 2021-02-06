/**
 *  lv3. 가장 먼 노드
 *
 *  https://programmers.co.kr/learn/courses/30/lessons/49189
 */

/**
 * 1번 노드에서 최단 경로로 이동했을 때 간선 갯수가 가장 많은 노드
 *
 * 재귀로 풀었다가 런타임 에러, 시간 초과 나서 while로 해결
 *
 * @param {number} n 노드 개수 2~20,000
 * @param {number[]} edge 간선 정보, 1~50,000
 * @returns {number} 가장 멀리 떨어진 노드 갯수
 */
const solution = (n, edge) => {
	const START = 1;
	const results = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
	results[START] = 0;

	const graph = edge.reduce((acc, val) => {
		const [a, b] = val;
		acc[a] ? acc[a].push(b) : (acc[a] = [b]);
		acc[b] ? acc[b].push(a) : (acc[b] = [a]);
		return acc;
	}, {});

	const visited = Array(n + 1).fill();
	visited[START] = true;

	const queue = [{ node: START, count: 0 }];
	let maxi = 0;

	while (queue.length) {
		const { node, count } = queue.shift();
		results[node] = count;
		if (maxi < count) maxi = count;

		for (const nextNode of graph[node]) {
			if (visited[nextNode]) continue;
			queue.push({ node: nextNode, count: count + 1 });
			// 여기서 다음 노드에 대해 미리 방문 처리해주어서 중복 방문 제거
			// 모든 간선 길이가 1이기 때문에 가능한 듯?
			visited[nextNode] = true;
		}
	}

	return results.filter((e) => e === maxi).length;
};

console.log(
	solution(6, [
		[3, 6],
		[4, 3],
		[3, 2],
		[1, 3],
		[1, 2],
		[2, 4],
		[5, 2],
	])
);
