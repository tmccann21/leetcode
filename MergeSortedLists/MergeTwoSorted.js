/**
 * Definition for singly-linked list.
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
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(-1);
    let pointer = head;
    while(l1 != null || l2 != null)
    {
        console.log(l1)
        if((l1 != null && l2 == null) ||((l1 != null && l2 != null) && l1.val < l2.val))
        {
            pointer.next = new ListNode(l1.val);
            pointer = pointer.next;
            l1 = l1.next;
        
        }
        else if((l2 != null && l1 == null) ||((l2 != null && l1 != null) && l2.val < l1.val))
        {
            pointer.next = new ListNode(l2.val);
            pointer = pointer.next;
            l2 = l2.next;
        }
    }
    return head.next;
};


/*
Equal to or fasther than 96.15% of Javascript submissions on LeetCode
https://leetcode.com/submissions/detail/154737703/
*/