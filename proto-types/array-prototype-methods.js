import assert from "node:assert/strict";

// Implement logic to pass the test.

const rawArray = [
  1,
  2,
  3,
  0,
  null,
  undefined,
  NaN,
  {},
  true,
  false,
  1e7,
  "",
  "true",
  Symbol("a"),
  BigInt("1"),
];

const filterMap = (array) => {
  const filtered = array.filter(() => {
    // Implement the correct filter function
    return true;
  });

  const mapped = filtered.map((current) => {
    // Implement the correct map function
    return current;
  });

  return mapped;
};

const reduce = (array) => {
  const reduced = array.reduce((accumulator) => {
    // Implement the correct reduce function
    return accumulator;
  }, []);

  return reduced;
};

const result = ["one", "two", "three", "{} is an object", "true", "BigInt 1"];

assert.deepEqual(filterMap(rawArray), result);
assert.deepEqual(reduce(rawArray), result);
