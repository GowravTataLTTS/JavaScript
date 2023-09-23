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
if (hasDriversLicense) console.log('I can Drive')
console.log(hasDriversLicense)

// const private = 23; // Uncomment this line to see 

/*
FUNCTIONS: 
functions are a piece of code, which can be used to write some logic and store it and
reuse it for many times
*/ 

function logger() {
    console.log('My name is Gowrav');
}

logger() // Calling/Running/Invoking the function, by referring the name with params

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice
}

const appleJuice = fruitProcessor(4,5) ;
console.log(appleJuice);
// Function is invoked and the value is stored in a variable and the same is printed

// In one line
console.log(fruitProcessor(2,3));


/* 
In the above defined function , no parameters, but it is invoked with 2 params, that params will not
be considered while executing the function
*/
logger(2,3)


/*
FUNCTIONS : DECLARATIONS VS EXPRESSIONS
The main difference between functions and declarations is declaration can be called from anywhere
meaning , function declaration can be called before it is defined , this is know as HOISTING
function expression can only be used only after it is declared
*/
// Define a function which defines the age based on the input
// Function Declaration
// console.log(calcAge(1996)); // Uncomment this line to see function declaration can be called before it is defined

function calcAge(birthYear) {
    return `Your age is ${2023 - birthYear} years.`
}

//const age1 = console.log(calcAge(1996));

//console.log(calcAge2(1996)); // Uncomment this line to see if function expression can be called before definining

// Function Expression
const calcAge2  = function (birthYear) {
    return `Your age is ${2023 - birthYear} years.`
}
const age1 = calcAge(1996);
const age2 = calcAge2(1996);
console.log(age1, age2);

/*
ARROW FUNCTIONS
*/

const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 60 - age
    return `${firstName} will retire in ${retirement} years`
}

console.log(yearUntilRetirement(1996, 'Gowrav'));