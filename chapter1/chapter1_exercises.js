/** 
 * Exercise 1
* An amountAfterTaxes() function returns the total amount after all the taxes are applied. Let’s implement that function so the output for each call in the next code shows up as expected.
**/

const amountAfterTaxes = function(amount, ...taxes){
    
  const computePercentageTax = function(tax){
    return amount * tax / 100.0;
  };
    
  const total = function(total , value){
    return total + value;
  };

  return taxes.map(computePercentageTax)
    .reduce(total, amount).toFixed(2);
};


const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localTax = 0.5;
console.log(amountAfterTaxes(amount)); //25.12
console.log(amountAfterTaxes(amount, fedTax)); //27.63
console.log(amountAfterTaxes(amount, fedTax, stateTax)); //28.13
console.log(amountAfterTaxes(amount, fedTax, stateTax, localTax)); //28.26

/**
 * Exercise 2: 
 * The purchaseItems() function merely prints the parameters it receives, after a little formatting. Two calls to the function are shown. Let’s implement a third call to the function so that it produces the desired result.
 */
const purchaseItems = function(essential1, essential2, ...optionals) {
  console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
};


purchaseItems('bread', 'milk');
purchaseItems('bread', 'milk', 'jelly');

const mustHaves = ['bread', 'milk'];
const andAlso = ['eggs', 'donuts', 'tea'];

//call purchaseItems so it prints bread, milk, eggs, donuts, tea
purchaseItems(...mustHaves, ...andAlso);