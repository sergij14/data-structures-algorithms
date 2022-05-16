// Queue

// FIFO - first in first out
// creating an an array with some methods
// unshift - adding in the beginning,
// pop - removing from the end

export class Queue {
  constructor(){
    this.data = []
  }

  add(el){
    this.data.unshift(el)
  }

  remove(){
    this.data.pop()
  }
}


