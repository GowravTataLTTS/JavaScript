'use strict';

// For comparison
for (let rep = 1; rep <= 2; rep++) {
  console.log(`Lifting weights repetition ${rep} from for loop `);
}

// Doing it using while loop
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}  from while loop`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6 + 1);

// Don't run the below code in your browser, it might crash the browser

// while (dice!==6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6 +1);
// }
