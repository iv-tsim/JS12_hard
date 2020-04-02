const arr = [1234, 234, 7654, 4567, 758, 4758, 7748];

console.log(
    arr.filter(function(number){
        return (number.toString().slice(0, 1) === "2" || number.toString().slice(0, 1) === "4");
    })
);
const n = 100;

primeNumbers:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue primeNumbers;
    }
    console.log(i + ": делители этого числа 1 и " + i);
}