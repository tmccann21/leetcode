/*
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single
 * digit. Add the two numbers and return it as a linked list.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * 
 * https://leetcode.com/problems/add-two-numbers/
 */

const createNode = (val) => ({ val: val, next: null })

const recursiveAdd = (l1, l2, carry) => {
  let newNode;
  if (l1 && l2) {
    const digit = l1.val + l2.val + carry;
    newNode = createNode(digit % 10);
    newNode.next = recursiveAdd(l1.next, l2.next, digit > 9 ? 1 : 0);
  } else if (l1 && !l2) {
    const digit = l1.val + carry;
    newNode = createNode(digit % 10);
    newNode.next = recursiveAdd(l1.next, l2, digit > 9 ? 1 : 0);
  } else if (!l1 && l2) {
    const digit = l2.val + carry;
    newNode = createNode(digit % 10);
    newNode.next = recursiveAdd(l1, l2.next, digit > 9 ? 1 : 0);
  } else if (carry === 1) {
    return createNode(1);
  }
  return newNode;
}

/*
 * Space: O(n)
 * Time: O(n)
 */

const solutionOne = (l1, l2) => {
  return recursiveAdd(l1, l2, 0);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  return solutionOne(l1, l2);
};