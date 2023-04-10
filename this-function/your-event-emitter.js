import assert from "node:assert/strict";

// EventEmitter is a cool concept to decouple the code.
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

const eventEmitter = new YourEventEmitter();

function event1Handler(data) {
  console.log("event1", data);
}

eventEmitter.on("event1", event1Hanlder);
eventEmitter.on("event1", event1Hanlder);

// Must be called twice.
eventEmitter.emit("event1", "hello world from event1");

eventEmitter.off("event1", event1Hanlder);

// No call.
eventEmitter.emit("event1", "hello world from event1 for the second time");

function event2Handler(data) {
  console.log("event2", data);
}

eventEmitter.on("event2", event2Handler);

eventEmitter.emit("event2", "hello world from event2");
