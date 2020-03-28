const num = 266219;

const multipliedNumbersOfNum = num.toString().split("").reduce((result, current) => result * current);

let exponentiation = multipliedNumbersOfNum ** 3;
console.log(exponentiation);

console.log(exponentiation.toString().slice(0, 2));