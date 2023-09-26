/* 
STRICT MODE:
To use strict mode in JavaScript, the following string has to be placed in the script
It should be present in the beginning of the script, Comments are allowed :D

In the below code, the variable name is passed wrong, by using strict mode it gives the 
correct error message, without strict mode, no errors are seen and it is a blank screen

If the variable name is used against a reserved keyword, if strict mode is used a clear error
message is shown as this keyword is reserved
*/

'use strict';

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense =true; // Uncomment this line and see the error in console
if (hasDriversLicense) console.log('I can Drive');
console.log(hasDriversLicense);

// const private = 23; // Uncomment this line to see

/*
FUNCTIONS: 
functions are a piece of code, which can be used to write some logic and store it and
reuse it for many times
*/

function logger() {
  console.log('My name is Tata');
}

logger(); // Uncomment this line Calling/Running/Invoking the function, by referring the name with params

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(4, 5);
console.log(appleJuice); // Uncomment this line
// Function is invoked and the value is stored in a variable and the same is printed

// In one line
console.log(fruitProcessor(2, 3)); // Uncomment this line

/* 
In the above defined function , no parameters, but it is invoked with 2 params, that params will not
be considered while executing the function
*/
logger(2, 3); // Uncomment this line

/*
FUNCTIONS : DECLARATIONS VS EXPRESSIONS
The main difference between functions and declarations is declaration can be called from anywhere
meaning , function declaration can be called before it is defined , this is know as HOISTING
function expression can only be used only after it is declared
*/
// Define a function which defines the age based on the input
// Function Declaration
console.log(calcAge(2000)); // Uncomment this line to see function declaration can be called before it is defined

function calcAge(birthYear) {
  return `Your age is ${2023 - birthYear} years.`;
}

//const age1 = console.log(calcAge(2000));

// console.log(calcAge2(2000)); // Uncomment this line to see if function expression can be called before definining

// Function Expression
const calcAge2 = function (birthYear) {
  return `Your age is ${2023 - birthYear} years.`;
};
const age1 = calcAge(2000);
const age2 = calcAge2(2000);
console.log(age1, age2); // Uncomment this line
/*
ARROW FUNCTIONS:
arrow functions will not get 'this' keyword
*/

const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(2000);
console.log(age3); // Uncomment this line

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 60 - age;
  return `${firstName} will retire in ${retirement} years`;
};

console.log(yearUntilRetirement(2000, 'Tata')); // Uncomment this line

/*
Function calling one from another
*/

function cutFruitPieces(fruit) {
  return 4 * fruit;
}

function fruitsProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  return `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
}

console.log(fruitsProcessor(2, 3)); // Uncomment this line

/*
REVIEWING FUNCTIONS
Function declarations are one which can be accessed from anywhere
Function expressions can only be accessed when they are declared and have to be stored in a variable
Arrow Functions are used only for one line functions
*/

// Arrow Functions

const ages = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (personName, yearOfBirth) {
  const age = ages(yearOfBirth);
  const retirementInYears = 60 - age;
  const retirement =
    retirementInYears > 0
      ? `${personName} will retire in ${retirementInYears} years`
      : `${personName} retired ${Math.abs(retirementInYears)} years ago`;
  return retirement;
};

console.log(yearsUntilRetirement('Tata', 2000)); // Uncomment this line

/*
ASSIGNMENT
*/

const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    const winner = 'Dolphins win';
    console.log(winner);
    return;
  } else if (avgKoalas >= 2 * avgDolphins) {
    const winner = 'Koalas win';
    console.log(winner);
    return;
  } else {
    const winner = 'No team wins...';
    console.log(winner);
    return;
  }
}

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
checkWinner(scoreDolphins, scoreKoalas); // Uncomment this line
//
//// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas); // Uncomment this line
