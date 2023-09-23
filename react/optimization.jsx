// Suggest all possible ways to optimize the <Component />.

import React, { useState } from "react";

function getCounter(shouldIncrement) {
  let counter = 0;

  if (shouldIncrement) {
    while (counter < Number.MAX_SAFE_INTEGER) {
      counter++;
    }
  } else {
    while (counter > Number.MIN_SAFE_INTEGER) {
      counter--;
    }
  }

  return counter;
}

function Text({ veryGreedyValue }) {
  return <p>{veryGreedyValue}</p>;
}

export default function Component() {
  const [shouldIncrement, setShouldIncrement] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setShouldIncrement(!shouldIncrement);
        }}
      >
        Click me!
      </button>
      <Text veryGreedyValue={getCounter(shouldIncrement)} />
    </>
  );
}
