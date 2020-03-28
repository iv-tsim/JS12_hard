let num = 266219;

let result = num.toString().split("").reduce((result, current) => result * current);

console.log(result **= 3);

console.log(result.toString().slice(0, 2));