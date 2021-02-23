/**
 * 160. Easy. Intersection of Two Linked Lists
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * time complexity O(n)
 * space complexity O(n)
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  while (headA) {
    headA.visited = true;
    headA = headA.next;
  }

  while (headB) {
    if (headB.visited) return headB;
    headB = headB.next;
  }

  return null;
}

function getIntersectionNode(headA, headB) {
  const visited = new Set();
  while (headA) {
    visited.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (visited.has(headB)) return headB;
    headB = headB.next;
  }

  return null;
}

/**
 * time complexity O(n)
 * space complexity O(1)
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  let a = headA,
    b = headB;
  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return null;
}

function getIntersectionNode(headA, headB) {
  function getSize(head) {
    let size = 0;
    while (head) {
      head = head.next;
      size++;
    }
    return size;
  }

  let diff = getSize(headA) - getSize(headB);

  startA = headA;
  startB = headB;
  if (diff >= 0) {
    while (diff) {
      startA = startA.next;
      diff--;
    }
  } else {
    while (diff) {
      startB = startB.next;
      diff++;
    }
  }

  while (startA && startB) {
    if (startA === startB) return startA;
    startA = startA.next;
    startB = startB.next;
  }

  return null;
}
