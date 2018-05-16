const Mem = require('./memory');
const Memory = new Mem();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }

  push(value) {
    if(this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    if(this.ptr === null) {
      throw new Error('Out of Memory');
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if(index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return Memory.get(this.ptr + index);
  }

  pop() {
    if(this.length == 0) {
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if(index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if(this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if(index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}
Array.SIZE_RATIO = 3;


function main() {
  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let rayArray = new Array();
  
  //add an item to the array
  rayArray.push(3);
  rayArray.push(5);
  rayArray.push(15);
  rayArray.push(19);
  rayArray.push(45);
  rayArray.push(10);
  console.log(rayArray);
}
main();

// Length is 1, Capacity is 3, Memory Address ptr is at 0

// Length is 6, Capacity is 12, Memory Address ptr is at 3