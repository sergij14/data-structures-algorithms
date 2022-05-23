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

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (data < this.data && this.left) {
      this.left.insert(newNode);
    } else if (data < this.data) {
      this.left = newNode;
    }

    if (data > this.data && this.right) {
      this.right.insert(newNode);
    } else if (data > this.data) {
      this.right = newNode;
    }
  }
}
