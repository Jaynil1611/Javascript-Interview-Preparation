function Node(val = null) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.insertNode = function insert(root, insertVal) {
    if (!root) {
      return new Node(insertVal);
    }
    if (root.val === insertVal) {
      return root;
    }
    if (root.val > insertVal) {
      root.left = insert(root.left, insertVal)
    } else {
      root.right = insert(root.right, insertVal)
    }
    return root;
  }

  this.searchNode = function search(root, searchVal) {
    if (!root) {
      return `Node with value ${searchVal} not found`;
    }
    if (root.val === searchVal) {
      return root;
    }
    if (root.val > searchVal) {
      return search(root.left, searchVal);
    }
    return search(root.right, searchVal);
  }

  this.preorderTraversal = function preorder(root) {
    if (root) {
      console.log(root.val);
      preorder(root.left);
      preorder(root.right);
    }
  }

  this.inorderTraversal = function inorder(root) {
    if (root) {
      inorder(root.left);
      console.log(root.val);
      inorder(root.right);
    }
  }

  this.postorderTraversal = function postorder(root) {
    if (root) {
      postorder(root.left);
      postorder(root.right);
      console.log(root.val);
    }
  }

  function getInorderSuccessor(root) {
    let current = root;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  this.deleteNode = function remove(root, deleteVal) {
    if (!root) {
      return root;
    }
    if (root.val < deleteVal) {
      root.left = remove(root.left, deleteVal);
    }
    else if (root.val > deleteVal) {
      root.right = remove(root.right, deleteVal);
    }
    else {
      let temp = null;
      if (!root.left) {
        temp = root.right;
        root = null;
        return temp;
      }
      else if (!root.right) {
        temp = root.left;
        root = null;
        return temp;
      }
      temp = getInorderSuccessor(root.right);
      root.val = temp.val;
      root.right = remove(root.right, temp.val);
    }
    return root;
  }
}

const tree = new BinarySearchTree();
let root = null;
root = tree.insertNode(root, 5);
root = tree.insertNode(root, 2);
root = tree.insertNode(root, 9);
tree.inorderTraversal(root);
console.log(tree.searchNode(root, 2));
tree.preorderTraversal(root);
root = tree.deleteNode(root, 5);
console.log(root);

module.exports = { BinarySearchTree };