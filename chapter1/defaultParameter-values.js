
const sortByTitle = function(books){
  const byTitle = function(book1, book2){
    return book1.title.localeCompare(book2.tile);
  };
  return books.slice().sort(byTitle);};


const sortByTitle2 = function(books, ascending = true) { const multiplier = ascending ? 1 : -1;
  const byTitle = function(book1, book2) {
    return book1.title.localeCompare(book2.title) * multiplier;
  };
  return books.slice().sort(byTitle); };
    
/**
     * The reason for not using sort() directly is that it will 
     * modify the array on which it is called—changing the input given to a 
     * function is a poor programming practice. 
     * The slice() function makes a copy of the given array and the sort() function then sorts the copy,
     * thus not affecting the original array given as input.
     */

const books = [
  {title: 'Who Moved My Cheese'},
  {title: 'Great Expectations'},
  {title: 'The Power of Positive Thinking'}
];

//Ascending
console.log(sortByTitle(books));

//Descending
console.log(sortByTitle2(books, false));

/***
 * Multiple default parameters
 */

const fetchData = function(
  id,
  location = {host: 'localhost', port: 443},
  uri = 'employees'
){
  console.log('fetch data from https://' + 
location.host + ':' + location.port + '/' + uri);
};

fetchData(2);
fetchData(2, {host: 'newdev', port: '8080'});
fetchData(3, {host: 'newdev', port: '8080'}, 'books');