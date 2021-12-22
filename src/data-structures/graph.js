class Graph {
  constructor() {
    this.numOfNodes = 0;
    this.adjasentList = {};
  }
  addVertex(node) {
    this.adjasentList[node] = [];
    this.numOfNodes++;
  }
  addEdge(node1, node2) {
    this.adjasentList[node1].push(node2);
    this.adjasentList[node2].push(node1);
  }
}
