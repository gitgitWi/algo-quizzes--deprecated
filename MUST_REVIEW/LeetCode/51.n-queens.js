/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start

/**
 * 코드 없는 프로그래밍 영상 참고
 * - N-Queens의 규칙을 생각해 경우의 수를 최소화함으로써 최적화 할 수 있다
 *
 * @param {number} n  1 <= n <= 9
 * @return {string[][]}
 */
const solveNQueens = (n) => {
	const rangeN = Array(n).fill();
	const results = [];
	// column 중복 체크용 Set
	const colSet = new Set([]);
	// 우상향 대각선 (row + col) 중복 체크용 Set
	const diagUpSet = new Set([]);
	// 우하향 대각선 (row - col) 중복 체크용 Set
	const diagDownSet = new Set([]);

	// 특정 col에 Q 지정하여 row 생성 함수
	const setRow = (col) => {
		const row = Array(n).fill(".");
		row[col] = "Q";
		return row.join("");
	};

	const bt = (row, col, board = []) => {
		const diagUp = row + col;
		const diagDown = row - col;
		if (
			// exit 1: 범위 벗어난 경우
			row === n ||
			col === n ||
			// exit 2: 중복체크
			colSet.has(col) ||
			diagUpSet.has(diagUp) ||
			diagDownSet.has(diagDown)
		)
			return;

		// backtracking process
		// col 중복 없는 현재 row 생성, board에 추가
		const currentRow = setRow(col);
		board.push(currentRow);
		if (board.length === n) {
			results.push([...board]);
			board.pop();
			return;
		}

		// 중복 체크 위해 현재 정보 저장
		colSet.add(col);
		diagUpSet.add(diagUp);
		diagDownSet.add(diagDown);

		// 다음 row에 대해 재귀로 진행
		rangeN.reduce((idx) => {
			bt(row + 1, idx, board);
			return idx + 1;
		}, 0);

		// 다른 backtracking 진행 위해 현재 정보 해제
		diagUpSet.delete(diagUp);
		diagDownSet.delete(diagDown);
		colSet.delete(col);
		board.pop();
	};

	rangeN.reduce((idx) => {
		bt(0, idx, []);
		return idx + 1;
	}, 0);

	return results;
};
// @lc code=end

/**
 * 아래 코드는 brute-force로 경우의 수를 하나하나 전부 만드는 방식
 * 시간 초과로 검증 안됨..
 *
 * @param {number} n  1 <= n <= 9
 * @return {string[][]}
 */
// const solveNQueens = (n) => {
// 	const rangeN = () => Array(n).fill(0);
// 	const board = Array.from({ length: n }, () => Array(n).fill(false));
// 	// columns 확인
// 	const checkCol = (row, col) => {
// 		for (const y in rangeN) {
// 			if (y !== row && board[y][col]) return false;
// 		}
// 		return true;
// 	};
// 	// rows 확인
// 	const checkRow = (row, col) => {
// 		for (const x in rangeN) {
// 			if (x !== col && board[row][x]) return false;
// 		}
// 		return true;
// 	};
// 	// 대각선 확인
// 	const checkDiag = (row, col) => {
// 		const diags = [
// 			[1, 1],
// 			[-1, -1],
// 			[-1, 1],
// 			[1, -1],
// 		];
// 		const queue = [[row, col]];
// 		while (queue.length) {
// 			const [cy, cx] = queue.shift();
// 			for (const [x, y] of diags) {
// 				const nextY = cy + y;
// 				const nextX = cx + x;
// 				if (nextY < 0 || nextY > n - 1 || nextX < 0 || nextX > n - 1) {
// 					continue;
// 				}
// 				if (board[nextY][nextX]) return false;
// 				queue.push([nextY, nextX]);
// 			}
// 		}
// 		return true;
// 	};
// 	const ans = [];
// 	const bt = (row, col, isQ, board) => {
// 		if (row === n && col === n) ans.push(board);
// 		if (row < 0 || col < 0 || row > n - 1 || col > n - 1) return true;
// 		if (!checkCol(row, col) || !checkRow(row, col) || !checkDiag(row, col))
// 			return false;
// 		board[row][col] = isQ;
// 		for (const tf of [true, false]) {
// 			for (const [nextRow, nextCol] of [
// 				[1, 0],
// 				[0, 1],
// 				[-1, 0],
// 				[0, -1],
// 			]) {
// 				if (bt(nextRow, nextCol, tf)) return true;
// 			}
// 		}
// 		board[row][col] = !isQ;
// 		return false;
// 	};
// 	for (const tf of [true, false]) {
// 		bt(
// 			0,
// 			0,
// 			tf,
// 			Array.from({ length: n }, () => Array(n).fill(false))
// 		);
// 	}
// 	return ans.map((b) => b.map((row) => row.map((e) => (e ? "Q" : "."))));
// };
