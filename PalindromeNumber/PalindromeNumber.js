/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xstr = x.toString();
    for(let i = 0; i < xstr.length/2; i++)
    {
        if(xstr[i] != xstr[xstr.length-1-i])    
            return false;
    }
    return true;
};

/*
Equal to or fasther than 92.60% of Javascript submissions on LeetCode
https://leetcode.com/submissions/detail/156804196/
*/