/**
 * lv3. 입국심사
 *
 * Parametric Search를 활용한 풀이는 처음이라,
 * 이진 탐색의 대상을 뭐로 정해야하는지 생각해내는 것이 오래 걸렸고,
 * 이렇게 큰 수를 가지고 연산하는 것이 정말 가능한가 의문이 들기도 했다.
 * O(logN) 이어서 그런지 시간을 많이 잡지는 않았다
 *
 * @param {number} n  대기인원, 1~1,000,000,000
 * @param {number[]} times  입국 심사대, 각 심사대별 소요 시간, length: 1~100,000, 시간: 1~1,000,000,000
 * @returns {number}  최소 소요 시간
 */
const solution = (n, times) => {
	const MAXTIME = 1000000000 * 1000000000;
	let front = 0;
	let rear = MAXTIME;
	let ans = 0;
	while (front <= rear) {
		const mid = Math.floor((front + rear) / 2);
		let finished = 0;
		for (const ctime of times) {
			finished += Math.floor(mid / ctime);
			if (finished >= n) break;
		}

		if (finished >= n) {
			rear = mid - 1;
			ans = mid;
		}
		if (finished < n) front = mid + 1;
	}
	return ans;
};

[
	[6, [7, 10]], // 28
	[10, [3, 8, 3, 6, 9, 2, 4]], // 8
].forEach((q) => console.log(solution(...q)));
