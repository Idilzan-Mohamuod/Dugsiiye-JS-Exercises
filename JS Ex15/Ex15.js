

const people = [
  { name: "Ali", age: 19, city: "London" },
  { name: "Ahmed", age: 25, city: "Chicago" },
  { name: "Fahiima", age: 29, city: "newYork" },
];

for (const person of people) {
  console.log("--  personal profile --");

  for (const key in person) {
    console.log(key + ": " + person[key]);
  }
}


