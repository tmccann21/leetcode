/**
Definition for a binary tree node.
**/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
*/

// recursive solution

let preorderHelper = function(root, out)
{
    if(root)
    {
       out.push(root.val);
       out = preorderHelper(root.left, out);
       out = preorderHelper(root.right, out);
    }
    return out;
}
 
 
var recursivePreorderTraversal = function(root) {
    return preorderHelper(root, []);
};

/**
* Equal to or fasther than 90.93% of Javascript submissions on LeetCode
* https://leetcode.com/submissions/detail/156804970/
*/

// iterative solution

var preorderTraversal = function(root) {
    let stack = [];
    let out = [];
    if(root)
        out.push(root.val);
    else
        return out;
    if(root.right)
        stack.push(root.right);
    if(root.left)
        stack.push(root.left);

    while(stack.length > 0)
    {
        let top = stack.pop();
        out.push(top.val);
        if(top.right)
            stack.push(top.right);
        if(top.left)
            stack.push(top.left);
    }
    return out;
}

/**
* Equal to or fasther than 90.93% of Javascript submissions on LeetCode
* https://leetcode.com/submissions/detail/156807369/
*/