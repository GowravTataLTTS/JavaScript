// Ennabling Strict mode in the script
'use strict';

/*
This Data Strcuture is called Object
the keys present in the object are called properties,
the below object has 5 properties
*/
const james = {
  firstName: 'James',
  lastName: 'Bond',
  birthYear: 1934,
  job: 'SPY Agent',
  friends: ['Jack', 'Jill'],
};

console.log(james);

// To get the key from a object, can be done in two ways
console.log(james.firstName);
console.log(james['firstName']);

const nameKey = 'Name';
console.log(james['first' + nameKey]); // Even the expression can be used inside the object

// Using prompt to get the key
// const interestedIn = prompt('What do you want to know about James ? Choose between firstName,lastName,birthYear,job,friends');
const interestedIn = 'job';
//  The above will not work with dot notation, it works only with bracket notation
console.log(james[interestedIn]);

if (james[interestedIn]) {
  console.log(james[interestedIn]);
} else {
  console.log(
    'Wrong reqiest! Choose between firstName,lastName,birthYear,job,friends'
  );
}

// Adding new properties to the object

james.location = 'England';
james['guns'] = 'Fifty';
console.log(james);

console.log(
  `${james.firstName} has ${james.friends.length} friends, and his best friend is called ${james.friends[0]}`
);

// OBJECT METHODS
