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