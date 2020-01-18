/*
 * Given a non-empty string s, you may delete at most one
 * character. Judge whether you can make it a palindrome.
 * 
 * https://leetcode.com/problems/valid-palindrome-ii/
 */

const charRemove = (s, ind) => {
  return s.substring(0, ind) + s.substring(ind + 1);
}
const solutionOne = (s, removed) => {
  const n = s.length;
  const mid = Math.floor(n / 2);
  for (let i = 0; i < mid; i++) {
    if (s[i] !== s[n - i - 1]) {
      return !removed && 
        (solutionOne(charRemove(s, i), true) ||
        solutionOne(charRemove(s, n - i - 1), true));
    }
  }

  return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  return solutionOne(s, false);
};