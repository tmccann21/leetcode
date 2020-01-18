/*
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font
 * for better legibility)
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * https://leetcode.com/problems/zigzag-conversion/
 */
const solutionOne = (s, numRows) => {
  const n = s.length;
  const rows = new Array(numRows).fill('');
  let pointer = 0;

  while (pointer < n) {
    for (let i = 0; i < numRows; i++) {
      rows[i] += s[pointer];
      pointer++;
      if (pointer === n)
        return rows.join('');;
    }
    for (let i = numRows - 2; i > 0; i--) {
      rows[i] += s[pointer];
      pointer++;
      if (pointer === n)
        return rows.join('');;
    }
  }

  return rows.join('');
}

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  return solutionOne(s, numRows);
};

console.log(convert('PAYPALISHIRING', 3));
const tgt = 'PAHNAPLSIIGYIR';