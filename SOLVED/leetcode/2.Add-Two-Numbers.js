/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 2. Easy. Add Two Numbers
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let ans = new ListNode("start");
  let tmp = ans;
  let carry = 0;
  while (l1 || l2) {
    const num1 = l1 ? Number(l1.val) : 0;
    const num2 = l2 ? Number(l2.val) : 0;
    const nextNum = num1 + num2 + carry;
    const val = nextNum % 10;
    carry = Math.floor(nextNum / 10);

    tmp.next = new ListNode(val);
    tmp = tmp.next;
    if (l1.next) l1 = l1.next;
    if (l2.next) l2 = l2.next;
  }

  if (carry) tmp.next = new ListNode(carry);

  return ans.next;
}
