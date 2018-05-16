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
//   rayArray.push(3);
//   rayArray.push(5);
//   rayArray.push(15);
//   rayArray.push(19);
//   rayArray.push(45);
//   rayArray.push(10);
//   rayArray.pop();
//   rayArray.pop();
//   rayArray.pop();
  rayArray.push('tauhida');
  console.log('first item in array is',rayArray.get(0));
  console.log(rayArray);
}
main();

// Length is 1, Capacity is 3, Memory Address ptr is 0

// Length is 6, Capacity is 12, Memory Address ptr is 3
// Capcity is 12 because when we make our push, the if statement in the push method sees that this.length is bigger than this._capacity,
// so it then adds one to the length and multiplies by the array.size.ratio, giving us 12


// After .pop()
// Length is 3, Capacity is 12, Memory Address ptr is 3
// After the 3 .pop()'s, our array length is reduced down to 3, but the memory capacity remained unchanged at 12. That extra capacity 
// is left unchanged to leave room for our array to grow into later. 


// First item in the array is 3


// After emptying the array and pushing "tauhida", when we try to print out the one item, the result is NaN. 


// The purpose of the _resize() function is to allocate more memory space for actions that need to be stored in our memory. The resize function
// gets called by the push() and insert() functions when an action requires memory space. Those actions will pass a size length needed to the
// resize() function and the resize() function will allocate the necessary amount of memory space for those action functions