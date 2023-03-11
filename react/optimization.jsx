// Suggest at least two ways to optimize the rendering after the clicking.

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
  return veryGriddyValue;
}

export default function Component() {
  const [shouldIncrement, setShouldIncrement] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click me!
      </button>
      <Text veryGreedyValue={getCounter(shouldIncrement)} />
    </>
  );
}
