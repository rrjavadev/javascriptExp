const canVote = function(param) {
  if(param ===18 ){
    return 'yay, start voting';
  }else if(param > 18){
	  return 'please vote';
  } 
   else {
    return 'no can\'t vote';
  }
};
console.log(canVote(12));
console.log(canVote(17));
console.log(canVote(28));
