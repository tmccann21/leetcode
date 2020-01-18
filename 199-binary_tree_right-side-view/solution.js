/*
 * Given a binary tree, imagine yourself standing on the
 * right side of it, return the values of the nodes you
 * can see ordered from top to bottom.
 * 
 * https://leetcode.com/problems/binary-tree-right-side-view/
 */

const solutionOne = (root) => {
  let out = [];
  
  /*
   * intuition is to do a BFS that goes from left to right
   * while keeping track of depth. This way, we can just 
   * keep overwriting the value at that depth because we
   * know the rightmost node at that level will be the last
   * to update the output
   */
  const recursiveBFS = (node, depth) => {
    if (node) {
      out[depth] = node.val;
      recursiveBFS(node.left, depth + 1);
      recursiveBFS(node.right, depth + 1);
    }
  }

  recursiveBFS(root, 0);
  return out;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  return solutionOne(root);
};