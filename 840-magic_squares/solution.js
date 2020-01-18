/*
 * A 3 x 3 magic square is a 3 x 3 grid filled with distinct
 * numbers from 1 to 9 such that each row, column, and both
 * diagonals all have the same sum.

 * Given an grid of integers, how many 3 x 3 "magic square"
 * subgrids are there?  (Each subgrid is contiguous).
 * 
 * https://leetcode.com/problems/magic-squares-in-grid/
 */

const solutionOne = (grid) => {
  const n = grid.length;
  const m = grid[0].length;

  const testRows = (x, y) => {
    let sums = [];
    for (let i = 0; i < 3; i++) {
      sums[i] = grid[y + i][x] + grid[y + i][x + 1] + grid[y + i][x + 2];
    }

    return sums[0] === sums[1] && sums[1] === sums[2];
  }

  const testColumns = (x, y) => {
    let sums = [];
    for (let i = 0; i < 3; i++) {
      sums[i] = grid[y][x + i] + grid[y + 1][x + i] + grid[y + 2][x + i];
    }

    return sums[0] === sums[1] && sums[1] === sums[2];
  }

  const testDiagonals = (x, y) => {
    const lr = grid[y][x] + grid[y + 1][x + 1] + grid[y + 2][x + 2];
    const rl = grid[y][x + 2] + grid[y + 1][x + 1] + grid[y + 2][x];

    return lr === rl;
  }
  
  const isDistinct = (x, y) => {
    const values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        values[grid[y + i][x + j]] += 1;
      }
    }

    return (
      values[1] === 1 &&
      values[2] === 1 &&
      values[3] === 1 &&
      values[4] === 1 &&
      values[5] === 1 &&
      values[6] === 1 &&
      values[7] === 1 &&
      values[8] === 1 &&
      values[9] === 1
    );
  }

  let count = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 2; j++) {
      const a = (testRows(j, i) && testColumns(j, i) && testDiagonals(j, i) && isDistinct(j, i)) ? 1 : 0;
      count = count + a;
    }
  }

  return count;
}

 /**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  return solutionOne(grid);
};