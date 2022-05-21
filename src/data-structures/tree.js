// Node Class
// accepts an argument that gets assigned top the data property
// and initialize an empty array for storing children
// methods: add and remove.

// Tree Class
// tree constructor should initialize a 'root' property to null.

// traverseBFS
// traverseDFS

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
