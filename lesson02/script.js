let num = 266219,
    result = 1;

num.toString().split("").forEach(item => result *= item);

result **= 3;

console.log(result);

console.log(result.toString().slice(0, 2));