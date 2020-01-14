/*
 * Given an unsorted integer array, find the smallest missing positive integer.
 * Your algorithm should run in O(n) time and uses constant extra space.
 * 
 * https://leetcode.com/problems/first-missing-positive/
 */

/*
 * Time: O(n)
 * Space: O(n)
 */
const solutionOne = (nums) => {
  let n = nums.length;
  let max = 0;
  let real = [];
  for (let i = 0; i < n; i++ ){
    if (nums[i] < 1 || nums[i] > n) {
      nums.splice(i,1);
      i--;
    } else {
      real[nums[i]] = nums[i];
      if (nums[i] > max)
        max = nums[i];
    }
  }

  n = real.length;
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (!real[i])
      return i;
  }

  return max + 1;
}

 /**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  return solutionOne(nums);  
};

console.log(firstMissingPositive(
  [7,8,9,11,12]))