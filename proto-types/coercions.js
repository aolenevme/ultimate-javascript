Object.prototype.toString = () => {
  throw new TypeError("Heh :)");
};

console.log(0 + "1");
console.log(0 - "1");
console.log(0 * "1");
console.log(0 / "1");
console.log(true + "1");
console.log(true + 1);
console.log(undefined || 1);
console.log(undefined && 1);
console.log(undefined ?? 1);
console.log(0 ?? 1);
console.log(Number.isNaN(+" 0001 "));
console.log(Number.isNaN(+" 0001_"));
console.log(+" 0001 " === NaN);
console.log(+0 === -0);
console.log(Object.is(+0, -0));
console.log(null === undefined);
console.log(null === null);
console.log(undefined == undefined);
console.log(Symbol("1") === Symbol("1"));
console.log({ a: 1 } === { a: 1 });
console.log({ a: 1 } == { a: 1 });
console.log({} === {});
console.log({} === 1);
console.log({} == 1);
