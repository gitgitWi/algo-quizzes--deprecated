/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = (root, low, high, sum = 0) => {
  if (!root) return 0;
  const { val, left, right } = root;
  const currSum = val >= low && val <= high ? sum + val : sum;
  const leftSum = left ? rangeSumBST(left, low, high, sum) : 0;
  const rightSum = right ? rangeSumBST(right, low, high, sum) : 0;
  return leftSum + rightSum + currSum;
};

// @lc code=end
