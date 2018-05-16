/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let n1 = l1;
    let n2 = l2;
    let a1 = n1.val;
    let a2 = n2.val;
    let carry = 0;

    let head = new ListNode(-1);
    let next = head;

    while(n1 != null || n2 != null || carry != 0)
    {
        let i = a1 + a2 + carry;
        carry = (i/10) | 0;
        i = i % 10;
        next.next = new ListNode(i);
        next = next.next;
        if(n1 != null)
        {
            n1 = n1.next;
            a1 = (n1 != null) ? n1.val : 0;
        }
        if(n2 != null)
        {
            n2 = n2.next;
            a2 = (n2 != null) ? n2.val : 0;
        }
    }
    return head.next;
};

/*
Equal to or fasther than 97.33% of Javascript submissions on LeetCode
https://leetcode.com/submissions/detail/144990026/
*/