# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def addTwoNumbers(self, l1, l2):
        n1 = l1
        n2 = l2
        a1 = n1.val
        a2 = n2.val
        carry = 0

        head = ListNode(-1)
        nextNode = head

        while(n1 is not None or n2 is not None or carry != 0):
            i = a1 + a2 + carry
            carry = int(i/10)
            i = i % 10
            nextNode.next = ListNode(i)
            nextNode = nextNode.next
            if(n1 is not None):
                n1 = n1.next
                if(n1 is not None):
                    a1 = n1.val
                else:
                    a1 = 0
            if(n2 is not None):
                n2 = n2.next
                if(n2 is not None):
                    a2 = n2.val
                else:
                    a2 = 0
        return head.next

#
# Equal to or fasther than 94.01% of Python3 submissions on LeetCode
# https://leetcode.com/submissions/detail/144990026/
#