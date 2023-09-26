'use strict';

// for loops keep running while condition it TRUE
for (let rep = 1; rep <= 2; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// For loop to find the factorial of a number
let factorial = 1;
const number = 6;

for (let start = 1; start <= number; start++) {
  factorial = factorial * start;
}

// console.log(factorial);

const james = ['James', 'Bond', 1934, ['Peter', 'Parker']];

// printing the elements in the array

const types = [];

for (let i = 0; i < james.length; i++) {
  console.log(james[i], typeof james[i]);
  // types[i] = typeof james[i]; adding the elements to the index
  types.push(typeof james[i]); // This is much cleaner approach
}

console.log(types);

const years = [2000, 2004, 2008, 2012, 2016, 2020];

const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

// Continue : it is to exit the current iteration and continue to the next one
// break: it is to terminate the loop

for (let i = 0; i < james.length; i++) {
  if (typeof james[i] !== 'string') continue; // It checks if the element type is not string , then it is skipped

  console.log(james[i], typeof james[i]);
}

for (let i = 0; i < james.length; i++) {
  if (typeof james[i] === 'number') break; // It checks if the element type is not string , then it is breaked

  console.log(james[i], typeof james[i]);
}

const newJames = ['James', 'Bond', 1934, ['Peter', 'Parker']];

for (let i = newJames.length - 1; i >= 0; i--) {
  console.log(i, newJames[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----Starting Exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) { 
    console.log(`Now lifting weights : ${rep} `);
  }
}
