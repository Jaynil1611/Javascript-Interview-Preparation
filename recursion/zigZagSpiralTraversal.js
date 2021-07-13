const { BinarySearchTree } = require("./binarySearchTree");

const tree = new BinarySearchTree();
let root;
root = tree.insertNode(root, 5);
root = tree.insertNode(root, 1);
root = tree.insertNode(root, 3);
root = tree.insertNode(root, 2);
root = tree.insertNode(root, 7);
root = tree.insertNode(root, 9);
root = tree.insertNode(root, 6);
root = tree.insertNode(root, 10);

function levelOrder(root) {
  const spiralLevels = [];
  function spiral(root, level) {
    if (!root) {
      return;
    }
    if (spiralLevels[level]) {
      level & 1 ? spiralLevels[level].unshift(root.val) :
      spiralLevels[level].push(root.val);
    }
    else {
      spiralLevels[level] = [root.val];
    }

    spiral(root.left, level + 1);
    spiral(root.right, level + 1);
  }
  spiral(root, 0);
  return spiralLevels;
}

BinarySearchTree.prototype.levelOrder = levelOrder;

console.log(tree.levelOrder(root));