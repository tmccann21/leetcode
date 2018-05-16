/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    for(let i = 0; i < s.length; i++)
    {
        let q = s.substring(i+1).indexOf(s[i]);
        
    }

    return out.length;
};
console.log(lengthOfLongestSubstring("abcabcbb"));