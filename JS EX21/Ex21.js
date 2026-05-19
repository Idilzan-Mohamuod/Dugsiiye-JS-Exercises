
//Filter//
console.log("Filter Method");
const numb = [10, 15, 20, 25, 30];

const evenNumbers = numb.filter(number => number % 2 === 0);

console.log(evenNumbers); 

// Reduce//
console.log("Reduce Method");

const numbers = [1, 2, 3, 4, 5];

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(product); 