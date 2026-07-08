// function declartion//
console.log("Function Declartion");

function add(a, b) {
  console.log( " added Numbers"  , a + b);
}
add(4, 3);
add(10, 3);
add(10, 50);
add(5, 3);


// function with Return Value //

console.log("Function Return Value");

function addNumbers(a, b) {
  return a + b;
}
//  let result = addNumbers(10,5);
console.log("Result of addedNumbers: " + addNumbers(20, 10));
console.log("Result of addedNumbers: " + addNumbers(22, 10));
console.log("Result of addedNumbers: " + addNumbers(88, 10));
console.log("Result of addedNumbers: " + addNumbers(90, 10));

// Function Expression//
console.log("Function Expression");

const adding = function (a,b) {
console.log( a+ b);
}

adding(10,4);
adding(19,4);
adding(40,4);
adding(70,4);

