import "regenerator-runtime/runtime";
import { visualizeSteps } from "./algorithms";
import { LinkedList } from "./data-structures/linked-list";

const list = new LinkedList();
list.insertLast(10);
list.insertLast(17);
list.insertLast(13);

for(let node of list){
    console.log(node);
}


console.log(visualizeSteps(20));