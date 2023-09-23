// In what order will the numbers be displayed?

console.log(1);

setTimeout(() => {
  console.log(2);
}, 100);

setImmediate(() => {
  console.log(3);
});

const promise = new Promise((resolve) => {
  console.log(4);

  resolve(5);
});

queueMicrotask(() => {
  console.log(6);
});

promise
  .then((result) => {
    console.log(result);

    return 7;
  })
  .then((result) => {
    console.log(result);

    setTimeout(() => {
      throw new Error(8);
    });

    return Promise.resolve(9);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });

promise
  .then((result) => {
    return new Promise(() => {
      console.log("1" + result);

      throw new Error(10);
    });
  })
  .catch((result) => {
    console.log(result.message);
  });

process.on("uncaughtException", (err) => {
  console.log(err.message);
});
