/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
const maxDepth = (root) => {
	if (!root) return 0;

	const temp = [];
	const getDepth = (node, depth) => {
		if (!node) return depth;
		const { children } = node;
		if (children.length === 0) {
			temp.push(depth);
			return;
		}
		children.forEach((c) => {
			getDepth(c, depth + 1);
		});
	};

	getDepth(root, 1);

	return Math.max(...temp);
};

/**
 * [참고]
 * 승지니어 기술면접 라이브코딩 실전편
 * 트리, BFS
 * (https://youtu.be/t1NkSkVHcnA)
 *
 * LeetCode 결과에서 memory usage는 좀더 증가하지만,
 * 좀더 깔끔하고 실수를 방지할 수 있는 코드
 */
const maxDepth = (root) => {
	if (!root) return 0;

	let queue = [root];
	let depth = 0;
	while (queue.length > 0) {
		depth++;
		const copiedQ = [...queue];
		queue = [];
		copiedQ.forEach((ele) => {
			const { children } = ele;
			children.forEach((c) => queue.push(c));
		});
	}
	return depth;
};
// @lc code=end
