import { HashTable, HashTable_2 } from "./data-structures/hash-table";
import { LinkedList } from "./data-structures/linked-list";
import { Stack } from "./data-structures/stack";

// HASH TABLES

// const myHashTable = new HashTable_2(50);
// myHashTable.set("apples", 1000);
// myHashTable.set("grapes", 1000);
// console.log(myHashTable, myHashTable.get("apples"));

// LINKED LISTS

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.prepend(45);

// console.log(myLinkedList);

// STACKS

// const myStack = new Stack();
// myStack.push("google");
// myStack.push("twitter");
// myStack.push("youtube");

// console.log(myStack);

// myStack.pop();

// console.log(myStack);

//QUEUES

// ALGO

// let counter = 0;

// function recursiveFn() {
//   if (counter > 3) {
//     return "done";
//   }

//   counter++;
//   return recursiveFn();
// }
// console.log(recursiveFn());

// function findFactorialRecursive(num) {
//   if (num === 2) {
//     return 2;
//   }
//   return num * findFactorialRecursive(num - 1);
// }

// function findFactorialIterative(num) {
//   let answ = 1;
//   for (let i = 1; i <= num; i++) {
//     answ = answ * i;
//   }
//   return answ;
// }
// console.log(findFactorialRecursive(2));

const nums = [2, 54, 76, 34, 6];

function bubleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        //swap
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubleSort(nums));
