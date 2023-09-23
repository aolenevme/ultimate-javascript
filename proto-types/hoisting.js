// What will be printed?

console.log(x);
var x = 10;

console.log(y);
let y = "hello";

console.log(z);
const z = true;

const example = () => {
  console.log(a);
  var a = [1, 2, 3];

  console.log(b);
  let b = { foo: "bar" };
};

class Person {
  constructor(name) {
    console.log(this);
    this.name = name;
  }
}

example();
const john = new Person("John");
