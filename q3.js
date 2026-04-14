let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

function isPalindrome(num) {
    let original = num;
    let rev = 0;

    while (num > 0) {
        let d = num % 10;
        rev = rev * 10 + d;
        num = Math.floor(num / 10);
    }

    return original == rev;
}

let answer = -1;

for (let X = 0; X <= 100000; X++) {
    let value = N + X;

    if (isPalindrome(value) && value % K == 0) {
        answer = X;
        break;
    }
}

alert("X = " + answer);