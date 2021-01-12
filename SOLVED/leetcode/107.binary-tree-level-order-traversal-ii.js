/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 */

// @lc code=start
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
 * @return {number[][]}
 */
/**
 * 재귀 활용
 */
const levelOrderBottom = (root) => {
	const nodes = [];

	const traversy = (root, depth = 0) => {
		if (!root) return nodes;
		const { val, left, right } = root;
		left && traversy(left, depth + 1);
		right && traversy(right, depth + 1);
		if (val !== null)
			nodes[depth] ? nodes[depth].push(val) : (nodes[depth] = [val]);
	};

	traversy(root);

	return nodes.reverse();
};
/**
 * BFS Queue 활용
 */
const levelOrderBottom = (root) => {
	const nodes = [];
	if (!root) return nodes;

	const q = [root];
	while (q.length > 0) {
		const temp = [];
		[...q].forEach(() => {
			const { val, left, right } = q.shift();
			temp.push(val);
			left && q.push(left);
			right && q.push(right);
		});
		nodes.push(temp);
	}

	return nodes.reverse();
};
// @lc code=end
