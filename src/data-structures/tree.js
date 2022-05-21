// Node Class
// accepts an argument that gets assigned top the data property
// and initialize an empty array for storing children
// methods: add and remove.

// Tree Class
// tree constructor should initialize a 'root' property to null.

// traverseBFS
// iterating on each level of the tree
// starting from the top
// from left ot right
// example: company position hierarchy

// traverseDFS
// starting from the root,
// trying to hit at the bottom of the tree

export class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const newNode = new Node(data);
    this.children.push(newNode);
  }

  remove(data) {
    this.children = this.children.filter((child) => child.data !== data);
  }
}

export class Tree {
  constructor() {
    this.root = null;
  }

  traverseBFS(cb) {
    let arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      cb(node);
    }
  }
}
