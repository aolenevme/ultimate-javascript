// Make it to print true

const data = [
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

const result = ["one", "two", "three", "{} is an object", "true", "BigInt 1"];

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

const areEqual = (array1, array2, array3) => {
  const stringifiedFirstArray = JSON.stringify(array1);
  const stringifiedSecondArray = JSON.stringify(array2);
  const stringifiedThirdArray = JSON.stringify(array3);

  return (
    stringifiedFirstArray === stringifiedSecondArray &&
    stringifiedSecondArray === stringifiedThirdArray
  );
};

console.log(areEqual(result, filterMap(data), reduce(data)));
