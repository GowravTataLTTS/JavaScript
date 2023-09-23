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

const private = 23;

/*
FUNCTIONS:
*/ 

function logger() {
    console.log('My name is Gowrav');
}

logger() // Calling/Running/Invoking the function 