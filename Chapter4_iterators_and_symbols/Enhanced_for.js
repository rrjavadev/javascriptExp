/**
 * Traditional for loop
 */

const names = ['Sara', 'Jake', 'Pete', 'Mark', 'Jill'];
for(let i=0; i< names.length; i++){
  console.log(names[i]);
}

/**
 * Enhanced for-loop
 */
for(const name of names){//constant name has a block scope
  console.log(name);
}

/**
 * Enhanced for loop to obtain index
 */

for(const entry of names.entries()){
  console.log(entry);
}

//destructure entries. Entries returns an iterator
for(const [i, name] of names.entries()){
  console.log('Index: ' + i + ' Name: ' + name);
}

/**
 * Symbol - A new primitive type
 */

const age = Symbol('ageValue');
const email = 'emailValue';

const sam = {
  first: 'Sam',
  [email]: 'sam@example.com',
  [age]: 2
};

console.log('Iterating over properties using for .. in');
for(const property in sam){
  console.log('Property: ' + property); //Age won't be displayed
}

console.log('List of property names: ');
console.log(Object.getOwnPropertyNames(sam)); //Symbol property hidden


console.log('List of Symbol property names: ');
console.log(Object.getOwnPropertySymbols(sam)); //Symbol property visible

console.log('Accessing Symbol property: ');
console.log(sam[age]); //Output 2


console.log('Changing value of Symbol property: ');
sam[age] = 3;
console.log(sam[age]); //Symbol property changed to 3




