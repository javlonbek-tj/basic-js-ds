const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = this._addNode(this.treeRoot, data);
  }

  _addNode(node, data) {
    if (!node) return new Node(data);

    if (data < node.data) {
      node.left = this._addNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._addNode(node.right, data);
    }

    return node;
  }

  has(data) {
    return this._hasNode(this.treeRoot, data);
  }

  _hasNode(node, data) {
    if (!node) return false;
    if (node.data === data) return true;

    return data < node.data
      ? this._hasNode(node.left, data)
      : this._hasNode(node.right, data);
  }

  find(data) {
    return this._findNode(this.treeRoot, data);
  }

  _findNode(node, data) {
    if (!node) return null;
    if (node.data === data) return node;

    return data < node.data
      ? this._findNode(node.left, data)
      : this._findNode(node.right, data);
  }

  remove(data) {
    this.treeRoot = this._removeNode(this.treeRoot, data);
  }

  _removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let minFromRight = this._minNode(node.right);
      node.data = minFromRight.data;
      node.right = this._removeNode(node.right, minFromRight.data);
      return node;
    }
  }

  min() {
    return this.treeRoot ? this._minNode(this.treeRoot).data : null;
  }

  _minNode(node) {
    while (node.left) node = node.left;
    return node;
  }

  max() {
    return this.treeRoot ? this._maxNode(this.treeRoot).data : null;
  }

  _maxNode(node) {
    while (node.right) node = node.right;
    return node;
  }
}

module.exports = {
  BinarySearchTree,
};
