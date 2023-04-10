import assert from "node:assert/strict";

// EventEmitter is a grate pattern to decouple the code.
// Implement YourEventEmitter to pass the tests down below.

class YourEventEmitter {
  // Write your code here.

  emit(key, data) {
    // Write your code here.
  }

  off(key, handler) {
    // Write your code here.
  }

  on(key, handler) {
    // Write your code here.
  }
}

const tracker = new assert.CallTracker();

const eventEmitter = new YourEventEmitter();

// Event 1.
const event1Data = "event1 is called";
const event1Handler = (data) => {
  assert.deepEqual(data, event1Data);
};
const trackedEvent1Handler = tracker.calls(event1Handler, 2);

eventEmitter.on("event1", trackedEvent1Handler);
eventEmitter.on("event1", trackedEvent1Handler);
eventEmitter.emit("event1", event1Data);
eventEmitter.off("event1", trackedEvent1Handler);
eventEmitter.emit("event1", event1Data);

// Event 2.
const event2Data = "event2 is called";
const event2Handler = (data) => {
  assert.deepEqual(data, event2Data);
};
const trackedEvent2Handler = tracker.calls(event2Handler, 1);

eventEmitter.on("event2", trackedEvent2Handler);
eventEmitter.emit("event2", event2Data);

// Verify calls.
// Event1 must be called twice.
// Event2 must be called once.
tracker.verify();
