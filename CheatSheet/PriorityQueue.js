/**
 * 연결리스트를 활용한 우선순위 큐
 */

class QueueElement {
  constructor(val, priority, next = null) {
    this.value = val;
    this.priority = priority;
    this.next = next;
  }
}

class PriorityQueue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value, priority) {
    const element = new QueueElement(value, priority);

    if (this.isEmpty()) {
      this.head = element;
      this.length++;
      return;
    }

    this.length++;
    if (this.head.priority > priority) {
      element.next = this.head;
      this.head = element;
      return;
    }

    let current = this.head;
    while (current.next && priority >= current.next.priority) {
      current = current.next;
    }
    [element.next, current.next] = [current.next, element];
  }

  remove(value) {
    return this.isEmpty()
      ? false
      : (() => {
          if (this.head.value === value) {
            this.head = this.head.next;
            return;
          }

          let current = this.head;
          while (current.next && current.next.value !== value) {
            current = current.next;
          }

          if (!current.next) return false;

          // current - removed - removed.next
          current.next = current.next.next;
          this.length--;
        })();
  }

  popHead() {
    return this.isEmpty()
      ? false
      : (() => {
          const { priority, value } = this.head;
          this.head = this.head.next;
          this.length--;
          return [priority, value];
        })();
  }

  isEmpty() {
    return this.length === 0;
  }

  printQueue() {
    return this.isEmpty()
      ? []
      : (() => {
          let current = this.head;
          const queue = [[current.priority, current.value]];
          while (current.next) {
            current = current.next;
            queue.push([current.priority, current.value]);
          }
          return queue;
        })();
  }
}

const pq = new PriorityQueue();
pq.add(3, 5);
pq.add(6, 4);
pq.add(4, 1);
pq.add(6, 3);
pq.add(7, 3);
pq.add(36, 6);
pq.add(63, 8);
pq.add(12, 2);
console.log(pq.printQueue());
pq.remove(16); // false
pq.remove(36);
console.log(pq.printQueue());
console.log(pq.popHead());
