/**
 * 146. LRU Cache
 * 
 * 단일 연결리스트로 좀 무식하게 풀었는데,
 * 이중 연결리스트, Map에 node 주소를 저장해서 좀더 개선해야 함
 * 
 * 복습 필요!!
 * 
 * LRU Cache Class
 * @param {number} capacity
 */
function LRUCache(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.values = new Map();
  this.LRUs = new LRUNodes("head");
}

function LRUNodes(key, next) {
  this.key = key;
  this.next = next ? next : null;
}

LRUCache.prototype.setHeadNode = function (key) {
  let prev = this.LRUs;
  let curr = this.LRUs.next;
  while (curr) {
    if (curr.key === key) {
      prev.next = curr.next;
      curr.next = this.LRUs.next;
      this.LRUs.next = curr;
      return;
    }
    curr = curr.next;
    prev = prev.next;
  }
};

LRUCache.prototype.removeTailNode = function () {
  let prev = this.LRUs;
  let curr = this.LRUs.next;
  while (curr.next) {
    curr = curr.next;
    prev = prev.next;
  }
  prev.next = null;
  return curr.key;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const value = this.values.get(key);
  if (value === undefined) return -1;
  this.setHeadNode(key);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.values.get(key) === undefined) {
    if (this.size < this.capacity) {
      this.size++;
    } else {
      const tail = this.removeTailNode();
      this.values.delete(tail);
    }
    const curNode = new LRUNodes(key);
    curNode.next = this.LRUs.next;
    this.LRUs.next = curNode;
  } else {
    this.setHeadNode(key);
  }
  this.values.set(key, value);
  return;
};
