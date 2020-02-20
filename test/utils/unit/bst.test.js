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

  describe.only('.insert', function () {
    context('when typeof value !== typeof `this.currentValue`', function () {
      const bst = new BST(value);

      it('throws TypeError', function () {
        expect(() => bst.insert('asdf')).to.throw('Tree must contain values of the same type.');
      });
    });
    context('when typeof value === typeof `this.currentValue`', function () {
      context('and value is not unique', function () {
        const bst = new BST(value);
        bst.insert(value);

        it('returns base node with no children', function () {
          expect(bst.leftNode).to.be.null;
          expect(bst.rightNode).to.be.null;
        });
      });
      context('and value is unique', function () {
        it('builds tree 1', function () {
          const bst = new BST(value);

          bst.insert(2);
          bst.insert(4);
          bst.insert(23);
          bst.insert(27);
          bst.insert(31);
          bst.insert(7);
          bst.insert(11);

          expect(bst.currentValue).to.be.equal(20);
          // left node assertions
          expect(bst.leftNode.currentValue).to.be.equal(2);
          expect(bst.leftNode.rightNode.currentValue).to.be.equal(4);
          expect(bst.leftNode.rightNode.rightNode.currentValue).to.be.equal(7);
          expect(bst.leftNode.rightNode.rightNode.rightNode.currentValue).to.be.equal(11);
          // right node assertions
          expect(bst.rightNode.currentValue).to.be.equal(23);
          expect(bst.rightNode.rightNode.currentValue).to.be.equal(27);
          expect(bst.rightNode.rightNode.rightNode.currentValue).to.be.equal(31);
        });
      });
    });
  });
});
