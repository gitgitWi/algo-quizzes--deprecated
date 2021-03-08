/*
 * 895. Hard. Maximum Frequency Stack
 *
 * https://leetcode.com/explore/featured/card/february-leetcoding-challenge-2021/587/week-4-february-22nd-february-28th/3655/
 */

/**
 * Map, 인접리스트(?) 풀이
 *
 * 아래 연결리스트 풀이 이후 상위권 solution 참고함
 * - 해당 숫자가 들어올 때마다 해당 숫자의 frequency에 해당하는 배열에 push하고
 * - max frequency에 해당하는 배열에서 하나씩 pop
 *
 * runtime 384ms로 크게 줄임
 */
class FreqStack {
  constructor() {
    this.freqsMap = new Map();
    this.freqArrMap = new Map();
    this.maxFreq = 0;
  }

  /**
   * push
   * @param {number} x
   * @return {void}
   */
  push(x) {
    const curFreq = (this.freqsMap.get(x) || 0) + 1;
    this.freqsMap.set(x, curFreq);
    if (this.maxFreq < curFreq) this.maxFreq = curFreq;
    if (!this.freqArrMap.has(curFreq)) this.freqArrMap.set(curFreq, []);
    this.freqArrMap.get(curFreq).push(x);
    return;
  }

  /**
   * pop
   * @return {number}
   */
  pop() {
    const curFreqArr = this.freqArrMap.get(this.maxFreq);
    const curVal = curFreqArr.pop();
    this.maxFreq > 1
      ? this.freqsMap.set(curVal, this.maxFreq - 1)
      : this.freqsMap.delete(curVal);
    if (curFreqArr.length === 0) {
      this.freqArrMap.delete(this.maxFreq);
      while (this.maxFreq && !this.freqArrMap.has(this.maxFreq)) {
        this.maxFreq--;
      }
    }
    return curVal;
  }
}

/**
 * 연결리스트 & Map 풀이
 *
 * runtime 1516ms으로 13.92% 하위권
 *
 * 다만 메모리는 89.87%로 상위권
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class FreqStack {
  constructor() {
    this.freqMap = new Map();
    this.head = new Node("Head");
    this.maxFreq = 0;
  }

  /**
   * push
   * @param {number} x
   * @return {void}
   */
  push(x) {
    const curNode = new Node(x);
    curNode.next = this.head.next;
    this.head.next = curNode;
    const curCnt = this.freqMap.has(x) ? this.freqMap.get(x) + 1 : 1;
    this.freqMap.set(x, curCnt);
    if (this.maxFreq < curCnt) this.maxFreq = curCnt;
  }

  /**
   * pop
   * @return {number}
   */
  pop() {
    let prev = this.head;
    let cur = this.head.next;
    while (cur) {
      const curCnt = this.freqMap.get(cur.val);
      if (curCnt === this.maxFreq) {
        curCnt === 1
          ? this.freqMap.delete(cur.val)
          : this.freqMap.set(cur.val, curCnt - 1);
        break;
      }
      prev = prev.next;
      cur = cur.next;
    }
    prev.next = cur.next;
    cur.next = null;
    this.getMax();
    return cur.val;
  }

  getMax() {
    let max = 0;
    this.freqMap.forEach((val) => {
      if (val > max) max = val;
    });
    this.maxFreq = max;
  }
}
