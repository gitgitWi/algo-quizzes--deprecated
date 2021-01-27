/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
	const arr = [];
	const inorder = (node) => {
		if (!node) return;
		const { left, val, right } = node;
		inorder(left);
		arr.push(val);
		inorder(right);
	};
	inorder(root);
	return arr[k - 1];
};

/**
 * [참고]
 * 승지니어 기술면접 라이브코딩 실전편
 * (https://youtu.be/uz8Ivl0uTAw)
 *
 * 어차피 inorder 탐색하면 가장 작은 값부터 탐색하게 되므로
 * ++i 활용해 k번째 탐색에서 탈출하게 됨
 *
 * 근데 runtime beats 는 오히려 떨어짐..?
 * 최적화가 맞는건가?
 * 104 ms => 128 ms // 44.7 MB => 43.7 MB
 */
const kthSmallest = (root, k) => {
	let i = 0;
	let ans = 0;
	const inorder = (node) => {
		if (!node) return false;
		const { left, val, right } = node;
		const isTF = inorder(left);
		if (isTF) return isTF;
		if (++i === k) {
			ans = val;
			return true;
		}
		return inorder(right);
	};
	inorder(root);
	return ans;
};
// @lc code=end
