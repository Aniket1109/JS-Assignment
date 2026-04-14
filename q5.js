let N = prompt("Enter N:");
let seed = prompt("Enter seed:");

let m = 0;
let sum = 0;
let skip = seed + 2;

while (sum < N) {
    m++;

    if (m % skip != 0) {
        sum = sum + m;
    }
}

alert("m = " + m + " Sum = " + sum);