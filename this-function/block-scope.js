// Fix the code to print every help text.

function print() {
  var texts = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < texts.length; i++) {
    var item = texts[i];

    setImmediate(() => {
      console.log(item.help);
    });
  }
}

print();
