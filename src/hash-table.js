export class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    if (!this.data.length) {
      return undefined;
    }
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

export class HashTable_2 {
  constructor(size) {
    this.table = new Array(size);
  }

  hash(string) {
    let hash = 17;
    for (let i = 0; i < string.length; i++) {
      hash = (13 * hash * string.charCodeAt(i)) % this.table.length;
    }
  }

  set(key, value) {
    const idx = this.hash(key);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  }

  get(key) {
    const idx = this.hash(key);
    if (!this.table[idx]) {
      return null;
    }
    return this.table[idx].find((el) => el[0] === key)[1];
  }
}
