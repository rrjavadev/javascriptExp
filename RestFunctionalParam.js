
const max = function(){
  console.log(arguments instanceof Array);
  let large = arguments[0];
	
  for(let i =0; i<arguments.length; i++){
    if(arguments[i] > large){
      large = arguments[i];
    }
  }
  return large;
};

console.log('maxUsingArguments' + max(2,1,7,4));

const maxUsingRest = function(...values){
	
  console.log(values instanceof Array);
  let large = values[0];
	
  for(let i =0; i<values.length; i++){
    if(values[i] > large){
      large = values[i];
    }
  }
  return large;
};

console.log('maxUsingRest' + maxUsingRest(2,1,7,4));

const maxFunctionalStyle = function(...values) {
  return values.reduce((large, e) => large > e ? large : e, values[0]);
};

console.log('maxFunctionalStyle' + maxFunctionalStyle(2,1,7,4));