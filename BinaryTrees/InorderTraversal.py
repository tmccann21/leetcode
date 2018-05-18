# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# recursive solution

class RecSolution:
    def inorderHelper(self, root, out):
        if(root):
            out = self.inorderHelper(root.left, out)
            out.append(root.val)
            out = self.inorderHelper(root.right, out)
        return out

    def inorderTraversal(self, root):
        return self.inorderHelper(root, [])
        
#
# Equal to or fasther than 99.45% of Python3 submissions on LeetCode
# https://leetcode.com/submissions/detail/154687153/
#

# iterative solution
    
class Solution:
    def inorderTraversal(self, root):
        current = root
        stack = []
        result = []
        while(current is not None or len(stack) > 0):
            if(current != None):
                stack.append(current)
                current = current.left
            else:
                if(len(stack) >= 1):
                    top = stack.pop()
                    if(top is not None):
                        result.append(top.val)
                        current = top.right
        return result

#
# Equal to or fasther than 99.45% of Python3 submissions on LeetCode
# https://leetcode.com/submissions/detail/154688047/
#
                    
                    