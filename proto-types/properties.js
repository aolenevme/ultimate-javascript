import assert from "node:assert/strict";

// Extend Rabbit and configure its properties to pass the test.

const Animal = {
  animal1: 1,
  animal2: 2,
  animal3: 3,
};

const Rabbit = {
  rabbit1: 1,
  rabbit2: 2,
  rabbit3: 3,
};

// Write your code here.

const keys = [];
for (const key in Rabbit) {
  keys.push(key);
}

const result = ["rabbit1", "rabbit3", "animal1", "animal3"];

assert.deepEqual(keys, result);
