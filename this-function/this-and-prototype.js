// What will be printed?

const parent = {
  a: 10,
  b: 40,
  f: function () {
    return this.a + this.b;
  },
};

const child = Object.create(parent);

child.a = 1;
child.b = 4;

console.log(child.f());
