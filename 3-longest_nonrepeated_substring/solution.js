/*
 * Given a string, find the length of the longest substring
 * without repeating characters.
 * 
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/*
 * Time: O(n^2)
 * Space: O(n)
 */

const solutionOne = (s) => {
  const n = s.length;
  let max = (n === 0) ? 0 : 1;
  
  for (let i = 0; i < n-1; i++) {
    let c = 1;
    let seen = { [s[i]]: true };
    for (let j = i + 1; j < n; j++) {
      if (seen[s[j]])
        break;
      seen[s[j]] = true;
      c++;
    }

    max = Math.max(c, max);
  }

  return max;
}

/*
 * sliding window approach
 * Time: O(n)
 * Space: O(n)
 */
const solutionTwo = (s) => {
  const n = s.length;
  if (n === 1)
    return 1;
  const windowMap = {};

  let low = 0;
  let high = 0;
  let max = 0;
  let current = 0;
  while (low < n - 1 && high < n) {
    if (!windowMap[s[high]]) {
      windowMap[s[high]] = true;
      current++;
      max = Math.max(current, max);s
      high++;
    } else {
      windowMap[s[low]] = false;
      low++;
      current--;
    }
  }

  return max;
}

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  return solutionTwo(s);
};