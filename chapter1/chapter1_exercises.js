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

/**
 * Exercise 3
 * Let’s reimplement the purchaseItems() function from the previous exercise so that 
 * milk and bread are assumed for the first two parameters, respectively,
 *  if a value is not provided for the argument in that position.
 */
const purchaseItems2 = function(essential1 = 'milk', essential2 = 'bread', ...optionals){
  console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
};
const items = ['cheese', 'milk'];
purchaseItems2('cheese'); //cheese, bread,
purchaseItems2(...items); //cheese, milk,
purchaseItems2(); //milk, bread,

/**
 * Exercise 4:
 * The placeOrder() function assumes values for shipping and date if those values are not given. Let’s fix the parameter list so the function behaves as expected.
 */
const placeOrder = function(id, amount, shipping = (amount < 20 ? 5 : 10), date = new Date()){
  console.log(' shipping charge for id: ' +
    id + ' is $' + shipping + ' Date:' + date.getDate());
};
//shipping, if not given, is $5 if amount less than 20 else $10
//date is today's date unless given
placeOrder(1, 12.10, 3, new Date('05/15/2018'));
placeOrder(1, 25.20, 10);
placeOrder(1, 12.05);
placeOrder(1, 25.30);
placeOrder(1, 25.20);
