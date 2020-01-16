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
  for (let i = 1; i < n; i++) {
    if (!real[i])
      return i;
  }

  return max + 1;
}

/*
 * Time: O(n)
 * Space: O(1)
 */
const solutionTwo = (nums) => {
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    const ins = nums[i]-1;
    if (ins >= 0 && ins < nums.length && nums[ins] != nums[i]) {
      const temp = nums[ins];
      nums[ins] = nums[i];
      nums[i] = temp;
      i--;
    }
}
for (let i = 0; i < n; i++) {
  if (nums[i] - 1 != i)
    return i + 1;
}

  return n + 1;
}

 /**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  return solutionTwo(nums);  
};