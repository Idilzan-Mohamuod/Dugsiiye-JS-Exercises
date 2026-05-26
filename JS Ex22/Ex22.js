console.log("Template literals");
const firstName = "Ali";
const lastName = "Yasin";
const age = 28;

const sentence = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;

console.log(sentence);

console.log("Array Destructuring ");

const colors = ["red", "green", "blue"];
const [first, , third] = colors;

console.log(first);
console.log(third);
