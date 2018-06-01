/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let out = new ListNode(-1);
    let head = out;

    while(lists.length > 0)
    {
        let lowest = 0;
        for(let i = 0; i < lists.length; i++)
        {
            if(lists[i] == null)
            {
                lists.splice(i, 1);
                i--;
                continue;
            }
            if(lists[i].val <= lists[lowest].val)
                lowest = i;
        }
        if(lists[lowest] != null)
        {
            head.next = new ListNode(lists[lowest].val);
            lists[lowest] = lists[lowest].next;
            head = head.next;
        }
    }
    return out.next;
};

let l1 = new ListNode(1)
l1.next = new ListNode(4);
l1.next.next = new ListNode(5);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

let l3 = new ListNode(2);
l3.next = new ListNode(6);

let list = [l1,l2,l3];
let out = mergeKLists(list);
console.log("-----");
while(out.next != null)
{
    console.log(out.val);
    out = out.next;
}
