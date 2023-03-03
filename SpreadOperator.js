/** 
 * Rest and Spread together
 * */
const greet = function(...names) {
  console.log('hello' + names.join(', '));
};

const jack = 'Jack';
const jill = 'Jill';

greet(jack, jill);

const nameArray = ['Tim', 'Monkey'];

greet(...nameArray);

/** 
 * No Rest. Just spread
 * */
const names1 = ['A', 'B'];
const names2 = ['Rock'];

const sayHello = function(name1, name2){
  console.log('hello' + name1 + ' and ' + name2);
};

sayHello(...names1);
sayHello(...names2); //name2 will have no value and will be displayed as undefined.

/** 
 * Mixed parameters
 * */

const mixed = function(name1, name2, ...names){
  console.log('name1: ' + name1);
  console.log('name2: ' + name2);
  console.log('names: ' + names.forEach(name => console.log(name)));
};

mixed('A',  ...['C','D','E']);

/**
 * Use spread in constructor example 
 **/

const patternAndFlags = ['r', 'i'];
const regExp = new RegExp(...patternAndFlags);
console.log(regExp);

/**
 * 
 * The spread operator can also be used to copy, concatenate, and manipulate arrays:
 * */

console.log([...names1, 'Brooke']); //Add a new item to array
console.log([...names1, ...names2]); //concatinate arrays
console.log([...names1, 'Brooke', ...names2]); //Manipulate arrays
