// What will be printed?

const parent = {
  f: function () {
    return this.a + this.b;
  },
};
const child = Object.create(o);

child.a = 1;
child.b = 4;

console.log(child.f());
