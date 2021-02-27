/**
 * 146. LRU Cache
 *
 * 노코프님 영상보고 이중 연결리스트, Node 주소 저장한 Map으로 해결한 코드
 *
 * runtime을 거의 절반으로 줄여서 (376ms => 184ms)
 * 상위 92.78% 달성함
 *
 * LRU Cache Class
 *
 * @param {number} capacity
 */
function LRUCache(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.values = new Map();
  // most recent
  this.head = new LRUNodes("head", false);
  // least recent
  this.tail = new LRUNodes("tail", false);
  this.head.next = this.tail;
  this.tail.prev = this.head;
}

function LRUNodes(key, val, prev, next) {
  this.key = key;
  this.val = val;
  this.prev = prev ? prev : null;
  this.next = next ? next : null;
}

LRUCache.prototype.setHeadNode = function (node) {
  if (node.prev && node.next) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
};

LRUCache.prototype.removeTailNode = function () {
  const tailNode = this.tail.prev;
  this.values.delete(tailNode.key);
  this.tail.prev = tailNode.prev;
  this.tail.prev.next = this.tail;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.values.get(key);
  if (node === undefined) return -1;
  this.setHeadNode(node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let curNode;
  if (this.values.has(key)) {
    curNode = this.values.get(key);
    curNode.val = value;
  } else {
    this.size < this.capacity ? this.size++ : this.removeTailNode();
    curNode = new LRUNodes(key, value);
  }
  this.setHeadNode(curNode);
  this.values.set(key, curNode);
  return;
};

/**
 * 단일 연결리스트, 단순 key-value Map으로 해결한 코드
 *
 * LRU Cache Class
 *
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
