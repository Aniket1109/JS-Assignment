let base = prompt("Enter base:");
let distance = prompt("Enter distance:");
let minutesLate = prompt("Enter minutesLate:");
let seed = prompt("Enter seed:");

let fare = base + 7 * distance;

if (minutesLate > 15) {
    fare = fare + 20;
}

if (distance > 10) {
    fare = fare + Math.floor(fare * 0.10);
}

if (seed % 2 == 1) {
    fare = fare - seed;
} else {
    fare = fare + seed;
}

while (fare % 5 != 0) {
    fare++;
}

alert("Final Fare = " + fare);