// Linked List
// Compared to Array:
// Linked lists does not have indexes.
// Arrays are in contiguous places in memory
// Linked lists could all over the place.
// Linked lists have head(points to the first item) and tail(points to the last item)
// Each item points to the next to the next..., and last one points to null.

import { isThisTypeNode } from "typescript";

////////////////////////////////////////////////////////////////////

// operation on linked lists

// adding to the end: number of steps is the same every time. - O(1)
// removing the last item - 0(n)

export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
    }
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
}
