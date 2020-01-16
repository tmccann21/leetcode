/*
 * Given a linked list, reverse the nodes of a linked list k at
 * a time and return its modified list.

 * k is a positive integer and is less than or equal to the length
 * of the linked list. If the number of nodes is not a multiple of
 * k then left-out nodes in the end should remain as it is.
 * 
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 */
const createNode = (val) => ({ val: val, next: null })

const recursiveReverse = (head, k) => {
  if (!head)
    return null
  let follower = head;
  let sentinel = head;
  for (let i = 0; i < k-1; i++) {
    if (sentinel.next) {
      sentinel = sentinel.next;
    } else {   
      return follower;
    }
  }

  for (let i = 0; i < k - 1; i++ ) {
    const save = follower.next;
    follower.next = sentinel.next;
    sentinel.next = follower;
    follower = save;
  }

  for (let i = 0; i < k - 1; i++) {
    sentinel = sentinel.next;
  }

  sentinel.next = recursiveReverse(sentinel.next, k);
  return follower;
}

const solutionOne = (head, k) => {
  return recursiveReverse(head, k);
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    return solutionOne(head, k)
};