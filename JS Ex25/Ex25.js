
const numbers=[ 1, 2, 3];
const combineNumbers =[...numbers, 4,5,6];
console.log(combineNumbers);


// rest
function multiply(...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}

console.log(multiply(10, 2, 3));
