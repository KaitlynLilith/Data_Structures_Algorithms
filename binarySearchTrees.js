// Binary Search Tree

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * Inorder traversal
 *
 * @param {TreeNode} root
 */
const inorder = (root) => {
  const nodes = [];
  if (root) {
    inorder(root.left);
    nodes.push(root.val);
    inorder(root.right);
  }
  return nodes;
};
// for our example tree, this returns [1,2,3,4,5,6]

/**
 * Postorder traversal
 *
 * @param {TreeNode} root
 */
const postorder = (root) => {
  const nodes = [];
  if (root) {
    postorder(root.left);
    postorder(root.right);
    nodes.push(root.val);
  }
  return nodes;
};
// for our example tree, this returns [1,3,2,6,5,4]

/**
 * Preorder traversal
 *
 * @param {TreeNode} root
 */
const preorder = (root) => {
  const nodes = [];
  if (root) {
    nodes.push(root.val);
    preorder(root.left);
    preorder(root.right);
  }
  return nodes;
};
// for our example tree, this returns [4,2,1,3,5,6]

/**
 * Valid Binary Search Tree
 *
 * @param {TreeNode} root
 */
const isValidBST = (root) => {
  const helper = (node, min, max) => {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  };
  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

/**
 * Binary Tree Max Depth
 *
 * @param {TreeNode} root
 */
const maxDepth = function (root) {
  const calc = (node) => {
    if (!node) return 0;
    return Math.max(1 + calc(node.left), 1 + calc(node.right));
  };
  return calc(root);
};

/**
 * Lowest Common Ancestor Between Two Tree Nodes
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 */
const lowestCommonAncestor = function (root, p, q) {
  let lca = null;
  const isCommonPath = (node) => {
    if (!node) return false;
    var isLeft = isCommonPath(node.left);
    var isRight = isCommonPath(node.right);
    var isMid = node == p || node == q;
    if ((isMid && isLeft) || (isMid && isRight) || (isLeft && isRight)) {
      lca = node;
    }
    return isLeft || isRight || isMid;
  };
  isCommonPath(root);
  return lca;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
