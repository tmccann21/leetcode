/**
 * Definition for a binary tree node.
 **/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// recursive traversal / trivial solution

function ainorderHelper(root, out)
{
    if(root.left != null)
        out = inorderHelper(root.left, out);
    out.push(root.val);
    if(root.right != null)
        out = inorderHelper(root.right, out);
    return out;
};

var inorderTraversal = function(root) {
    if(root == null)
        return [];
    return inorderHelper(root, []);
};

/**
 * Equal to or fasther than 93.44% of Javascript submissions on LeetCode
 * https://leetcode.com/submissions/detail/154565584/
 */

 //iterative traversal

var inorderTraversal = function(root) {
    let nodeStack = [];
    let result = [];
    let current = root;
    while(current != null || nodeStack.length > 0)
    {
        if(current != null)
        {
            nodeStack.push(current);
            current = current.left;
        }else{
            if(nodeStack.length >= 1)
            {
                let pop = nodeStack.pop();
                if(pop != null)
                {
                    result.push(pop.val);
                    current = pop.right;
                }
            }
        }
    }
    return result;
};

/**
 * Equal to or fasther than 93.44% of Javascript submissions on LeetCode
 * https://leetcode.com/submissions/detail/154685473/
 */