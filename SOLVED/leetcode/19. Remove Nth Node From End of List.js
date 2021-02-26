/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let num = n;
  const dummy = new ListNode(0, head);
  let first = dummy;
  while (num--) {
    first = first.next;
  }

  let second = dummy;
  while (first && first.next) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
}
