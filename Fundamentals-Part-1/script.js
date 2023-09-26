let js = "amazing";
let firstName = "Bobby";
//console.log(firstName);
/*
console.log(Boolean({}));
console.log(Boolean(undefined));
*/
let money = 0;
/*
Money wil be considered as False, at JS converts the block in
if statement into a boolean expression
*/
/*
if (money) {
    console.log("Don't spend it all ;");
} else {
    console.log("You should get a job !");
}
*/
/*
//////////////// EQUALITY OPERATORS == VS ===
// True will be the result if only both sides are true, no type coercion is done
const age = '18';
if (age === 18) console.log("You just become an adult ! (Strict)") ;
if (age == 18) console.log("You just become an adult ! (Loose)") ;
// Type coercion is done, True will be the result as both sides become true
const new_age = '18';
if (new_age == 18) console.log("Type coercion is done !");
const favourite = Number(prompt("What's your favourite number ?"))
console.log(favourite);
console.log(typeof favourite)
if (favourite===23){ // This is the strict equivalent operator, , meaning no type coercion is done to check the equivalent
    console.log("Cool ! 23 is an amazing number!");
} else if (favourite == 7){ // This is the loose equivalent operator , meaning type coercion is done to check the equivalent
    console.log("Cool ! 7 is an amazing number!");
} else {
    console.log("Number is not either 23 or 7 ");
}
if ( favourite !=23){ // This is the loose equivalent operator
    console.log("Number is not 23")
}
if (favourite !==23) {
    console.log("Why not 23")
}
*/
//////////////// BOOLEAN OPERATORS
/*
const hasDriverLicense = true; // A
const hasGoodVision = true; // B
// AND operator
//console.log(hasDriverLicense && hasGoodVision); // AND Operator
//console.log(hasDriverLicense || hasGoodVision); // OR Operator
//console.log(!hasDriverLicense); // NOT Operator inverts the existing operator
if (hasDriverLicense && hasGoodVision){
    console.log("Sara is able to drive !")
}
else {
   console.log("Some one else should drive")
}
const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && !isTired);
if (hasDriverLicense && hasGoodVision && !isTired){
    console.log("Sara can drive all the way !");
}
else {
    console.log("Someone please sober up sara !")
}
*/
/////////////////////////// SWTICH STATEMENT
/*
const day = prompt('Enter the day: ');
// Switch statement is less used, better to know
switch (day) {
    case 'monday': // day === monday
        console.log('Plan course structure');
        console.log('Go to coding meetup') ;
        break; // with out the break, the code simply gets executed
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    default:
        console.log('Chill on weekends ! ')
        break;
}
if (day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup') ;
}
else if (day === 'tuesday') {
    console.log('Prepare theory videos');
}
else if (day === 'wednesday' || day =='thursday') {
    console.log('Write code examples');
}
else if (day === 'friday') {
    console.log('Record Videos');
}
else {
    console.log('Enjoy the weekends! ')
}
*/
/////////////////////////// TERNARY OPERATOR
const age = 3;
/*
As seen in line 136, A single line ternary operator can be used to check only if the condition is single
instead of using if-else condition as shown below
*/
// Ternary Operator can also be used in a template literal , an if-else statement cannot be used in that
const ride =
  age >= 18
    ? "I like to drive cars :sunglasses:"
    : "I love to ride bicycle :bike:";
console.log(ride);
let _ride;
if (age > 18) {
  _ride = "I like to drive cars :sunglasses:";
} else {
  _ride = "I love to ride bicycle :bike:";
}
console.log(_ride);

console.log(`I like to ride ${age >= 18 ? "Car" : "Bicycle"}`);

/*
In a restaurant if the bill is greater than 50 & less than 300
tip is 15 %, if else tip is 20 %, find the total bill and tip
*/
const bill = 275;
const tip = bill < 300 && bill > 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
