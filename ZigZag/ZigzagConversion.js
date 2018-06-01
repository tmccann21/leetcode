/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let strings = new Array(numRows);
    strings.fill("");
    let col = 0;
    let row = 0;
    while(s.length > 0)
    {
        while(s.length > 0 && row < numRows)
        {
            let c = s[0];
            s = s.substring(1);
            strings[row] += c;
            row++;
        }
        row--;
        while(s.length > 0 && row > 1)
        {
            row--;
            let c = s[0];
            s = s.substring(1);
            strings[row] += c;
        }
        row = 0;
    }
    return strings.join("");
};

/*
Equal to or fasther than 88.79% of Javascript submissions on LeetCode
https://leetcode.com/submissions/detail/156802773/
*/