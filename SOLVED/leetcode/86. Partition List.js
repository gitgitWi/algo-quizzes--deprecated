/**
 * 86. Partition List
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * x 보다 val이 큰 경우에만 stack 만들고
 * 나중에 Linked List로 합치는 방식
 *
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
  const dummy = new ListNode(0, head);
  const tails = [];

  let curr = head;
  let prev = dummy;

  while (curr) {
    if (curr.val >= x) {
      const tail = curr;
      prev.next = tail.next;
      curr = tail.next;
      tail.next = null;
      tails.push(tail);
      continue;
    }

    [curr, prev] = [curr.next, curr];
  }

  const last = new ListNode();
  let ln = last;
  for (const tail of tails) {
    ln.next = tail;
    ln = ln.next;
  }

  prev.next = last.next;
  return dummy.next;
}

/**
 * 두 개의 Linked List 만드는 방식
 *
 * 일단 가독성은 이 방식이 훨씬 낫다
 * 이전 제출 코드들을 보면 runtime도 좀더 짧았는데,
 * 이상하게 위 stack 만들고 합치는 방식 보다 조금 더 오래 걸림
 */
function partition(head, x) {
  const frontNode = new ListNode();
  const rearNode = new ListNode();
  let curr = head;
  let front = frontNode,
    rear = rearNode;
  while (curr) {
    if (curr.val < x) {
      front.next = curr;
      front = front.next;
    } else {
      rear.next = curr;
      rear = rear.next;
    }
    curr = curr.next;
  }

  rear.next = null;
  front.next = rearNode.next;

  return frontNode.next;
}
