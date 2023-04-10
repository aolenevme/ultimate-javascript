import assert from "node:assert/strict";

// Rotate the matrix 90 degrees.

const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function rotate90(matrix) {
  // Write your code here.
}

const rotatedMatrix = [
  [13, 9, 5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3],
  [16, 12, 8, 4],
];

assert.deepEqual(rotate90(arr), rotatedMatrix);
