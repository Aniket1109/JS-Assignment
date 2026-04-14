let L = (prompt("Enter L:"));
let R = (prompt("Enter R:"));
let K = (prompt("Enter K:"));

let count = 0;

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

for (let x = L; x <= R; x++) {

    if (x % K == 0) {

        let temp = x;
        let sum = 0;
        let hasZero = false;

        while (temp > 0) {
            let digit = temp % 10;
            if (digit == 0) {
                hasZero = true;
                break;
            }
            sum = sum + digit;
            temp = Math.floor(temp / 10);
        }

        if (!hasZero && isPrime(sum)) {
            count++;
        }
    }
}

alert("Count = " + count);