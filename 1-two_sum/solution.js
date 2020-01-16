/*
 * Given an array of integers, return indices of the two numbers
 * such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * 
 * https://leetcode.com/problems/two-sum/
 */

/*
 * Time: O(n)
 * Space: O(n)
 */
const solutionOne = (nums, target) => {
  let map = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (map[nums[i]]  !== undefined)
      return [i, map[nums[i]]]
    else
      map[target - nums[i]] = i;
  }
}

var twoSum = function(nums, target) {
  return solutionOne(nums, target);
};