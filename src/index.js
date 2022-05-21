import "regenerator-runtime/runtime";
import { spiralMatrix } from "./algorithms";
import { LinkedList } from "./data-structures/linked-list";
import { Node } from "./data-structures/tree";

const treeNode = new Node(20);

treeNode.add(30);
treeNode.add(50);
treeNode.remove(50)
console.log(treeNode);
