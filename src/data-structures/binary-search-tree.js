// Binary tree
// Every parent can have  max 2 node child
// childs are called according to their position: left-right

// Binary search tree
// we validate every node's value as well
// every value to the left of the parent are less than parent's value
// every value to the right of the parent are more parent

////////////////////////////////////////////////////////////////////

// Node class
// constructor initializes valies 'data', 'left', 'right'

export class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (data === this.data) {
      return this;
    }

    if (this.data > data && this.left) {
      return this.left.contains(data);
    } else if (this.data < data && this.right) {
      return this.right.contains(data);
    }

    return null;
  }
}
