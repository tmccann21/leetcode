/*
 * Roman numerals are represented by seven different symbols:
 * I, V, X, L, C, D and M.

 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * For example, two is written as II in Roman numeral, just two
 * one's added together. Twelve is written as, XII, which is
 * simply X + II. The number twenty seven is written as XXVII,
 * which is XX + V + II.

 * Roman numerals are usually written largest to smallest from
 * left to right. However, the numeral for four is not IIII. Instead,
 * the number four is written as IV. Because the one is before the
 * five we subtract it making four. The same principle applies to
 * the number nine, which is written as IX. There are six instances
 * where subtraction is used:

 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90. 
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * Given an integer, convert it to a roman numeral. Input is guaranteed
 * to be within the range from 1 to 3999
 * 
 * https://leetcode.com/problems/integer-to-roman/
 */

const isSpecial = (d) => {
  return (
    d === 4 ||
    d === 9 ||
    d === 40 ||
    d === 90 ||
    d === 400 ||
    d === 900
  )
}

const getSpecialDigit = (d) => {
  switch (d) {
    case 4:
      return 'IV';
    case 9:
      return 'IX';
    case 40:
      return 'XL';
    case 90:
      return 'XC';
    case 400:
      return 'CD';
    case 900:
      return 'CM';
  }
}

const repeatChar = (c, n) => {
  let out = '';
  for (let i = 0; i < n; i++)
    out += c;
  return out;
}

const solutionOne = (num) => {
  const m = Math.floor(num / 1000);
  num = num - m * 1000;
  let out = repeatChar('M', m);
  const hun = Math.floor(num / 100) * 100;
  if (isSpecial(hun)) {
    out += getSpecialDigit(hun);
    num -= hun;
  }
  if (num >= 500) {
    out += 'D';
    num -= 500;
  }
  const c = Math.floor(num / 100);
  out += repeatChar('C', c);
  num = num - c * 100;
  
  const ten = Math.floor(num / 10) * 10;
  if (isSpecial(ten)) {
    out += getSpecialDigit(ten);
    num -= ten;
  }
  if (num >= 50) {
    out += 'L';
    num -= 50;
  }
  const x = Math.floor(num / 10);
  out += repeatChar('X', x);
  num = num - x * 10;

  if (isSpecial(num)) {
    out += getSpecialDigit(num);
    return out;
  }
  if (num >= 5) {
    out += 'V';
    num -= 5;
  }

  out += repeatChar('I', num);
  return out;
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  return solutionOne(num);
};

console.log(solutionOne(1994));
console.log(solutionOne(58));