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

