function Operate(a, b, callback) {
  return callback(a, b);
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function notDivide(a, b) {
  if (a === 0) {
    return "can't Divided to Zero";
  }
}

console.log("Addition: ", Operate(2, 3, add));
console.log("Subtraction: ", Operate(6, 4, subtract));
console.log("Multiplication: ", Operate(12, 3, multiply));
console.log("Division: ", Operate(10, 5, divide));
console.log("Not-Divisible by Zero: ", Operate(0, 5, notDivide));
