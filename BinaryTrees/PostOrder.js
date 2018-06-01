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

 // recursive solution

let postOrderHelper = function(root, out)
{
    if(root)
    {
        out = postOrderHelper(root.left, out);
        out = postOrderHelper(root.right, out);
        out.push(root.val);
    }
    return out;
}


var recursivePostorderTraversal = function(root) {
    return postOrderHelper(root, []);
};


/**
 * Equal to or fasther than 94.72% of Javascript submissions on LeetCode
 * https://leetcode.com/submissions/detail/154690208/
 */

//iterative solution

var postorderTraversal = function(root) 
{
    if(!root || root.length == 0)
    {
        return [];
    }
    let stack = [];
    let current = root;
    let result = [];
    do
    {
        while(current != null)
        {
            if(current.right)
                stack.push(current.right);
            stack.push(current);
            current = current.left;
        }
        let pop = stack.pop();
        current = pop;
        if(pop.right && pop.right == stack[stack.length -1])
        {
            stack.pop();
            stack.push(pop);
            current = current.right;
        }else{
            result.push(current.val);
            current = null;
        }
    }while(stack.length != 0);

    return result;
};

/**
 * Equal to or fasther than 61.13% of Javascript submissions on LeetCode
 * https://leetcode.com/submissions/detail/154713863/
 */