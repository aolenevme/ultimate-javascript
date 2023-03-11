// What will be printed at the mount and after the button click? In what order and why?

import React, { useEffect, useState } from "react";

function Component3() {
  useEffect(() => {
    console.log("<Component3 /> inited");

    return () => {
      console.log("<Component3 /> destroyed");
    };
  }, []);

  return <></>;
}

function Component2() {
  useEffect(() => {
    console.log("<Component2 /> inited");

    return () => {
      console.log("<Component2 /> destroyed");
    };
  }, []);

  return (
    <>
      <Component3 />
    </>
  );
}

export default function Component1() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    console.log("<Component1 /> inited");
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setKey(key + 1);
        }}
      >
        Click me!
      </button>
      <Component2 key={key} />
    </>
  );
}
