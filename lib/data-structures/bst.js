// TODO: write iterative and functional version
// TODO: use lodash methods to do conditionals
// iterative version

function throwBstTypeError (lineNumber) {
  throw new TypeError(
    'Tree must contain values of the same type.',
    './lib/data-structures/bst.js',
    lineNumber,
  );
}

module.exports = class BST {
  constructor (value) {
    this.currentValue = value;
    this.type = typeof value;
    this.leftNode = null;
    this.rightNode = null;
  }

  insert (value) {
    if (typeof value !== typeof this.currentValue) throwBstTypeError(21);

    let currentNode = this;

    while (true) {
      if (value === currentNode.currentValue) return;

      if (value < currentNode.currentValue && !currentNode.leftNode) {
        currentNode.leftNode = new BST(value);
        break;
      }

      if (value > currentNode.currentValue && !currentNode.rightNode) {
        currentNode.rightNode = new BST(value);
        break;
      }

      if (value < currentNode.currentValue) currentNode = currentNode.leftNode;
      else currentNode = currentNode.rightNode;
    }
  }

  containes (value) {
    if (typeof value !== typeof this.currentValue) throwBstTypeError(46);

    let currentNode = this;

    while (true) {
      if (value === currentNode.currentValue) return true;

      if (value < currentNode.currentValue && currentNode.leftNode) currentNode = currentNode.leftNode;
      else if (value > currentNode.currentValue && currentNode.rightNode) currentNode = currentNode.rightNode;
      else return false;
    }
  }
};
