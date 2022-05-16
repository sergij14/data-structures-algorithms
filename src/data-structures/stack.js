// Stacks

// FILO - first in last out

class Stack {
  constructor() {
    this.data = [];
  }

  add(el) {
    this.data.push(el);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
