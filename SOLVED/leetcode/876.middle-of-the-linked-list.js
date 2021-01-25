/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 *  제출 답안
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
	let current = head;
	const arr = [current];
	while (current.next) {
		arr.push(current.next);
		current = current.next;
	}
	return arr[Math.floor(arr.length / 2)];
};

/**
 * by 승지니어 (https://youtu.be/ucJ1XhM6EEU)
 *
 * walker-runner technique
 *
 * walker: 1 step by 1 loop
 * runner: 2 step by 2 loop
 * - 이 문제에서 runner가 끝나면 walker는 자동으로 중간에 있게 됨
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
	let walker = head;
	let runner = head;
	while (runner !== null) {
		runner = runner.next;
		if (runner !== null) {
			walker = walker.next;
			runner = runner.next;
		}
	}
	return walker;
};
// @lc code=end
