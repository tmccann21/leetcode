/*
 * Merge k sorted linked lists and return it as one sorted list.
 * Analyze and describe its complexity.
 * 
 * https://leetcode.com/problems/merge-k-sorted-lists/
 */

const createNode = (val) => ({ val: val, next: null })

const merge = (pointerA, pointerB) => {
  let merged = createNode(-1);
  mergePointer = merged;
  while (pointerA && pointerB) {
    if (pointerA.val < pointerB.val) {
      mergePointer.next = createNode(pointerA.val);
      pointerA = pointerA.next;
    } else {
      mergePointer.next = createNode(pointerB.val);
      pointerB = pointerB.next;
    }
    mergePointer = mergePointer.next;
  }
  if (pointerA)
    mergePointer.next = pointerA;
  else
    mergePointer.next = pointerB;

  return merged.next
}

/*
 * Time: O(n log(k))
 * Space: O(nk)
 */

const solutionOne = (lists) => {
  let solution = [...lists];
  while (solution.length > 1) {
    let nextSolutions = [];
    while (solution.length >= 2) {
      nextSolutions.push(merge(solution.pop(), solution.pop()));
    }
    if (solution.length === 1)
      nextSolutions.push(solution.pop());
    solution = nextSolutions;
  }

  return solution[0] || null;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  return solutionOne(lists);
};