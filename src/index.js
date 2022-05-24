import "regenerator-runtime/runtime";
import { Node } from "./data-structures/binary-search-tree";


const tree = new Node(10);
tree.insert(5)
tree.insert(15)
tree.insert(-3)
tree.insert(8)


console.log(tree);
console.log(tree.contains(5));
