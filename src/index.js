import { LinkedList, Node } from "./data-structures/linked-list";
import { Queue } from "./data-structures/queue";

// Queues

const queue1 = new Queue();
const queue2 = new Queue();
queue1.add('first')
queue1.add('second')
queue1.add('third')

queue2.add(4)
queue2.add(5)
queue2.add(6)

// combining two queues
function weave(src1, src2){
    const q = new Queue()

    while(src1.peek() || src2.peek()){
        if(src1.peek()){
            q.add(src1.remove())
        }

        if(src2.peek()){
            q.add(src2.remove())
        }

    }

    return q
}

// console.log(weave(queue1, queue2))


// Linked list

const list = new LinkedList();
list.insertFirst(5)
list.insertFirst(3)
list.insertLast(10);
console.log(list.getAt(3));