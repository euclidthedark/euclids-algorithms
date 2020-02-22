// TODO: write iterative and functional version
// iterative version
module.exports = class BST {
  constructor (value) {
    this.currentValue = value;
    this.type = typeof value;
    this.leftNode = null;
    this.rightNode = null;
  }

  insert (value) {
    // TODO: make Error better.
    if (typeof value !== typeof this.currentValue) throw new TypeError('Tree must contain values of the same type.');

    let currentNode = this;

    while (true) {
      if (value === currentNode.currentValue) return;
      if (value < currentNode.currentValue && currentNode.leftNode === null) {
        currentNode.leftNode = new BST(value);
        break;
      }

      if (value > currentNode.currentValue && currentNode.rightNode === null) {
        currentNode.rightNode = new BST(value);
        break;
      }

      if (value < currentNode.currentValue) {
        currentNode = currentNode.leftNode;
      } else {
        currentNode = currentNode.rightNode;
      }
    }
  }
};
