/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
const inorderTraversal = (root, nodes = []) => {
	if (!root) return [];
	const { val, left, right } = root;
	if (left) inorderTraversal(left, nodes);
	val && nodes.push(val);
	if (right) inorderTraversal(right, nodes);
	return nodes;
};
// @lc code=end

/**
 *  while 사용한 solution
 *  - 가독성 떨어지는 대신 메모리를 조금 덜 사용
 *  - 최대 호출 스택 문제 있을 경우 시용
 */
const inorderTraversal = (root) => {
	const stack = [];
	const result = [];
	let current = root;

	while (stack.length || current) {
		while (current) {
			stack.push(current);
			current = current.left;
		}

		current = stack.pop();
		result.push(current.val);

		if (current) {
			current = current.right;
		}
	}

	return result;
};
