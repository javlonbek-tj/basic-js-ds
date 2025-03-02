const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []; // Internal array to store stack elements
  }

  push(element) {
    this.items.push(element); // Adds an element to the top of the stack
  }

  pop() {
    return this.items.pop(); // Removes and returns the top element of the stack
  }

  peek() {
    return this.items[this.items.length - 1]; // Returns the top element without removing it
  }
}

module.exports = {
  Stack,
};
