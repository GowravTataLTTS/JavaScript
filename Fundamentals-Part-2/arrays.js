'use strict';

/*
ARRAYS are the data structures that are used to bundle the data 
*/

const friends = ['Mahesh', 'Prabhas', 'Pawan']; // literal syntax
console.log(friends);

const y = new Array(2000,2004,2008,2012); // new keyword is to be used

console.log(friends[0]); // Getting the element in the array using index ( position)

console.log(friends.length); // gives the last element of the array

/*
One way to retrieve the last element in the array
*/
console.log(friends[friends.length-1]); 

friends[2] = 'Charan'; // Even though it is defined as constant , we are able to change, as array is not a primitive data type
console.log(friends);

const firstName='tata';
const tata = [firstName, 'sai' , 2023-2000, friends ];
console.log(tata);
console.log(tata.length);

const calcAge = function (yearOfBirth) {
    return 2023 - yearOfBirth;
}

const year = [1990,1994,1998,2002,2006,2010];

// Here the calcAge function is called directly in the array
const ages = [calcAge(year[0]), calcAge(year[1]), year[2],calcAge(year[year.length -1])];
console.log(ages);

/* 
ARRAY OPERATIONS
Here we'll see the different methods applicable to Array
*/

// PUSH (push) : add elements at end of the array

const friendList = ['Mahesh', 'Prabhas', 'Pawan'];
const friendListLength = friendList.push('NTR'); // After pushing if we send it to a variable we'll get the length

console.log(friendList);
console.log(friendListLength); // ['Mahesh', 'Prabhas', 'Pawan', 'NTR']

// UNSHIFT :  add element at beginning of the array
friendList.unshift('Chiru'); 
console.log(friendList); // ['Chiru', 'Mahesh', 'Prabhas', 'Pawan', 'NTR']

// POP (pop) :  removes the last element in the array
friendList.pop();  // If an elemenet is passed into the pop function , it only removes the last element present in the array

console.log(friendList); // ['Chiru', 'Mahesh', 'Prabhas', 'Pawan']

// SHIFT (shift) : removes first element in the array
friendList.shift();
console.log(friendList); // ['Mahesh', 'Prabhas', 'Pawan']

// INDEX (indexOf):  gets the index or position of the string in array
console.log(friendList.indexOf('Pawan')); // 2
console.log(friendList.indexOf('Mohan')); // -1 , as the element is not present inside the array

// INCLUDE (includes): returns the boolean by checking the existence of a given string, this methods checks strict equality
console.log(friendList.includes('Pawan')); // true, as the element is present 
console.log(friendList.includes('Mohan Babu')); // false

friendList.push(23);
console.log(friendList.includes('23')); // false , as the given is string 
console.log(friendList.includes(23)); // true , as the given is number

// AT (at): returns the element at the index, even with negative index
const numbersArray  = [0,1,2,-2,-1];
console.log(numbersArray[-2]) ;// undefined, Negative index wil  not work 
console.log(numbersArray.at(-2)) ;// returns -2, works even with negative index

// CONCAT (concat) : concats one array with another
const arrayOne = [1,2,3];
const arrayTwo = [4,5,6];
const arrayThree = arrayOne.concat(arrayTwo);
console.log(arrayThree) ;// [1,2,3,4,5,6]

// WITHIN (copyWithin) :  copies the elements in the array
const arrayAlphabets = ['a', 'b', 'c', 'd', 'e'];
console.log(arrayAlphabets.copyWithin(0)); // ['a', 'b', 'c', 'd', 'e'] , Here all the elements are copied starting from index 0
console.log(arrayAlphabets.copyWithin(1)); // ['a', 'a', 'b', 'c', 'd'] , Here all the elements are copied starting from index 1
console.log(arrayAlphabets.copyWithin(2)); // ['a', 'b',  a', 'b', 'c'], Here all the elements are copied starting from index 2
console.log(arrayAlphabets.copyWithin(3)); // ['a', 'b', 'c', 'a', 'b'] , Here all the elements are copied starting from index 1
console.log(arrayAlphabets.copyWithin(4)); // ['a', 'b',  c', 'd', 'a'], Here all the elements are copied starting from index 2

console.log(arrayAlphabets.copyWithin(0,2)) ;// [ 'c', 'd', 'e', 'd', 'e' ], starting from index 2 , copies all the elements from index 0

console.log(arrayAlphabets.copyWithin(0,3,4)); // ['d','b','c','d','e'] , copies all the elements starting from index 3 , at index 0

//ENTRIES (entries):  this method is used to make the array into an operator using it like a key value pair

const exampleEntries = ['a','b','c'];
const exampleEntriesIterator = exampleEntries.entries();

console.log(exampleEntriesIterator.next().value) // [0,a],returns a key value pair as shown like this, 0 is the key, a is value

// EVERY (every): It is used to check whether all the elements pass the implemented function, like all() in python

const containsBond = (currentValue) => currentValue.includes('Bond');
const testString= ['My Name is Bond','Shane Bond', 'James Bond' ];
console.log(testString.every(containsBond)) // It checks thats the passed array passes the condition defined in funciton containsBond

// FILL (fill): Used to fill the array with the defined index

const testNumbers = [1,2,3];
console.log(testNumbers.fill(2)) ;//  [2,2,2] As no index is defined , number 2 is copied at all the places
console.log(testNumbers.fill(0,1)); // [1,0,0] Number 0 is filled in the array with 

// FILTER (filter): This is used to filter the elements in the array with a specified condition

const sampleFilterArray = ['James Bonds','Ruskin Bond', 'Shane Bond'];
const result = sampleFilterArray.filter((word) => word.includes('Bond'));
console.log(result);

// FIND (find): Returns the first element in the array with the satisfied condition
const testFindNumbers = [1,2,3,5,78,23];

const numFind = testFindNumbers.find((number) => number>5);
console.log(numFind); // 78 , it returns only the first element after the condition has met

// FINDINDEX (findIndex): Returns the index of the element after the condition has met

const exampleFindIndex = [12,35,14,78,69];
const findIndex = exampleFindIndex.findIndex((number) => number>14);
console.log(findIndex);

// FINDLAT (findIndex): Returns the last element after the condition has met by interating the list in reverse order

const exampleLastIndex = [12,35,14,78,69];
const lastIndex = exampleLastIndex.findLast((number) => number>14);
console.log(lastIndex);

// FINDLASTINDEX: (findLastIndex). Returns the last index after the condition  by interating the list in reverse order

const findLastIndexArray = [14,37,64];
const findLastIndexValue = findLastIndexArray.findLastIndex((number)=> number > 37);
console.log(findLastIndexValue); // 2

// FLAT (flat) : Used to flatten the array based on the depth provided


const sampleUnflattedArray = [0,1,2,[3,4],[5,6,7]];
console.log(sampleUnflattedArray.flat()); // [0, 1, 2, 3, 4, 5, 6, 7]

// FOREACH (forEach): Applies the function to all the elements in the array

const exampleForArray = [1,2,3];
exampleForArray.forEach(function(element, index, _array) 
{
    _array[index] = element * 2;
});
console.log(exampleForArray);

// FROM (from): This method allows to create a new array , based non the static method

console.log(Array.from('TATA'));

console.log(Array.from([1,2,3], (x) => x **2)); // Can create an array based on this condition

// GROUP (group): It segregates the dictionary based on the key passed

const testDictionary = [
    {name:'Ratan',surname:'Tata',age:83},
    {name:'Naval',surname:'Tata',age:83},
    {name:'Anil',surname:'Ambani',age:63},
    {name:'Mukesh',surname:'Ambani',age:63},


];
//const resultGroup = testDictionary.group(({ surname}) => surname);

console.log(resultGroup);

// JOIN (join): Used to join a new string based on the elements present in the string

const sampleString = ["Air","Baloon"];
console.log(sampleString.join(' Flight,Red ')); // Air Flight,Red Baloon