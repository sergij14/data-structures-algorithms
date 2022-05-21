import "regenerator-runtime/runtime";
import { spiralMatrix } from "./algorithms";
import { LinkedList } from "./data-structures/linked-list";
import { Node, Tree } from "./data-structures/tree";

const node = new Node(20);
const tree = new Tree();
tree.root = node;
node.add(30)
node.add(50)

console.log(tree.traverseDFS(node => console.log(node)));
