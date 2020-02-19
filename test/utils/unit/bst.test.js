const BST = require('../../../lib/data-structures/bst');

function itBehavesLikeItHasNullLeftNode (bst) {
  return (
    it('`this.leftNode` to be null', function () {
      expect(bst.leftNode).to.be.null;
    })
  );
}

function itBehavesLikeItHasNullRightNode (bst) {
  return (
    it('`this.rightNode` to be null', function () {
      expect(bst.rightNode).to.be.null;
    })
  );
}

describe('./lib/bst', function () {
  const value = 20;

  describe('contructor', function () {
    context('when instantiated with value', function () {
      const bst = new BST(value);

      it('assigns `this.currentValue`', function () {
        expect(bst.currentValue).to.be.equal(value);
      });

      it('assigns `this.type`', function () {
        expect(bst.type).to.equal(typeof value);
      });

      itBehavesLikeItHasNullLeftNode(bst);
      itBehavesLikeItHasNullRightNode(bst);
    });

    context('when instantiated without a value', function () {
      const bst = new BST();

      it('doesn\'t assign `this.currentValue`', function () {
        expect(bst.currentValue).to.not.exist;
      });

      itBehavesLikeItHasNullLeftNode(bst);
      itBehavesLikeItHasNullRightNode(bst);
    });
  });
});
