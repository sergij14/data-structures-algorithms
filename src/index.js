import "regenerator-runtime/runtime";
import { isPrime, memoize, memoizedAddTo14, spiralMatrix } from "./algorithms";
import {
  binarySearch,
  binarySearchRecursive,
  linearSearh,
} from "./algorithms/searching";
import { bubbleSort } from "./algorithms/sorting";
import { LinkedList } from "./data-structures/linked-list";
import { Node, Tree } from "./data-structures/tree";

const node = new Node(20);
const tree = new Tree();
tree.root = node;
node.add(30);
node.add(50);

console.log(tree.traverseDFS((node) => console.log(node)));
const memoed = memoize((a, b) => a + b);

console.log(memoed(14, 5));
console.log(memoed(14, 5));
console.log(memoed(14, 3));

console.log(isPrime(5));

console.log(bubbleSort([1, 3, 4, 5, 6, -56, 7, 3456, 76, 234234]));
