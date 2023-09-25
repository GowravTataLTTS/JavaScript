
'use strict';

// Create a method, that should summarise all the data present about a person

const james = {
    firstName: 'James',
    lastName: 'Bond',
    birthYear: 1934,
    job: 'SPY Agent',
    friends: ['Jack', 'Jill'],
    hasDriversLicense : true,
    calcAge: function (_birthYear) { // Any function that is attached to a object is called method
        this.age = 2023 - this.birthYear;
        return this.age ;
    },
    getSummary : function () {
        return `${this.firstName} is a ${this.age} old ${this.job}, he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`

    }
}

// Accessing the method defined in the Object
console.log(james.calcAge(james.birthYear));

console.log(james['calcAge'](james.birthYear)); // Can also be done like this

console.log(james.calcAge()); // 89 

console.log(james.age); // In this method , we have already saved the result in the variable and we're calling the variable from the object


console.log(james.getSummary());