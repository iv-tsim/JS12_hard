const arr = [1234, 234, 7654, 4567, 758, 4758, 7748];

for (let i = 0; i< arr.length; i++) {
    if (arr[i].toString().slice(0, 1) === "2" || arr[i].toString().slice(0, 1) === "4") {
        console.log(arr[i]);
    }
}

const n = 100;

primeNumbers:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue primeNumbers;
    }
    console.log( i );
}