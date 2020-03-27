let num = 266219,
    result = 1;

num = String(num);

for (let i = 0; i < num.length; i++) {
    result *= num[i];
}
console.log("Результат умножения цифр числа " + num + ": " + result);

result **= 3;

console.log(result);

console.log(String(result)[0] + String(result)[1]);