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


/**
 * Built-in Objects for Symbols
 */

const regex = /cool/;

process.stdout.write('regex is of type RegExp: ');
console.log(regex instanceof RegExp);

process.stdout.write('Properties of regex: ');
console.log(Object.getOwnPropertyNames(regex));

process.stdout.write('Symbol properties of regex: '); 
console.log(Object.getOwnPropertySymbols(regex));

console.log("Symbol properties of regex's prototype: "); 
console.log(Object.getOwnPropertySymbols(Object.getPrototypeOf(regex)));

/**
 * Global Registry Symbol
 */

const name1 = 'Tom';
const tom = Symbol(name1);

const jerry = Symbol('Jerry');
const anotherTom = Symbol(name1);

console.log(tom);
console.log('Type of Tom: ' + typeof(tom));
console.log('Are Tom and Jerry the same? ' + (tom === jerry));
console.log('Is Tom == anotherTom? ' + (tom === anotherTom));

