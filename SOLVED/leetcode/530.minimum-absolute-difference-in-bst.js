/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
 * @return {number}
 */
const getMinimumDifference = (root) => {
	const arr = [];

	const inorder = (node) => {
		if (!node) return;
		const { val, left, right } = node;
		inorder(left);
		arr.push(val);
		inorder(right);
	};
	inorder(root);

	return arr.reduce(
		(mini, val, idx) =>
			idx > 0 ? Math.min(mini, val - arr[idx - 1]) : mini,
		Infinity
	);
};
// @lc code=end
