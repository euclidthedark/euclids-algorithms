// TODO: write iterative and functional version
module.exports = class BST {
  constructor (value) {
    this.currentValue = value;
    this.type = typeof value;
    this.leftNode = null;
    this.rightNode = null;
  }
};
