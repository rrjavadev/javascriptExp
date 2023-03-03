const greet = function(...names) {
	console.log('hello' + names.join(', '));
};

const jack = 'Jack';
const jill = 'Jill';

greet(jack, jill);

const nameArray = ['Tim', 'Monkey'];

greet(...nameArray);
