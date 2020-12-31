/**
 * LeetCode
 *
 * Binary Tree Pre-Order
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root) => {
	const nodes = [];

	const traversy = (node) => {
		if (!node) return [];

		const { val, left, right } = node;
		nodes.push(val);
		traversy(left);
		traversy(right);
	};

	traversy(root);

	return nodes;
};

const inorderTraversal = (root) => {
	const nodes = [];

	const traversy = (node) => {
		if (!node) return [];

		const { val, left, right } = node;
		traversy(left);
		nodes.push(val);
		traversy(right);
	};

	traversy(root);

	return nodes;
};

const postorderTraversal = (root) => {
	const nodes = [];

	const traversy = (node) => {
		if (!node) return [];

		const { val, left, right } = node;
		traversy(left);
		traversy(right);
		nodes.push(val);
	};

	traversy(root);

	return nodes;
};

// 동 레벨 우선 탐색; BFS
const levelOrder = (root) => {
	if (!root) return [];

	const queue = [root],
		nodes = [];
	while (queue.length) {
		const temp = [];
		[...queue].forEach((node) => {
			const { val, left, right } = queue.shift();
			temp.push(val);
			left && queue.push(left);
			right && queue.push(right);
		});
		nodes.push(temp);
	}
	return nodes;
};

// max-depth 값 찾기
const getDepth = (node, depth = 0) => {
	if (!node) return depth;
	const { left, right } = node;
	depth++;
	const leftDepth = getDepth(left, depth);
	const rightDepth = getDepth(right, depth);

	return Math.max(leftDepth, rightDepth);
};

const maxDepth = (root) => {
	return getDepth(root, 0);
};

// Symmetric 판단
// leetCode 결과를 보면, 재귀가 대체로 iterative 보다 조금더 빠른듯
const isSymmetric = (root) => {
	if (!root) return true;

	const { left, right } = root;
	const qq = [left],
		pp = [right];

	while (qq.length > 0 || pp.length > 0) {
		const q = qq.pop(),
			p = pp.pop();
		if (!q && !p) continue;
		if (!q || !p || q.val !== p.val) return false;
		qq.push(q.left, q.right);
		pp.push(p.right, p.left);
	}

	return true;
};
