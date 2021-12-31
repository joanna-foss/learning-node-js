//Object property shorthand

const name = 'Joanna';
const userAge = 300;

// const user = {
// 	name: name,
// 	age: userAge,
// 	location: 'San Antonio'
// }
// vvv

const user = {
	name,
	age: userAge,
	location: 'San Antonio'
}

console.log(user);

// Object destructuring

const product = {
	label: 'Red notebook',
	price: 3,
	stock: 201,
	salePrice: undefined,
	rating: 2.5
}

const {label:productLabel, stock, rating = 5} = product;
console.log(productLabel);
console.log(stock);
console.log(rating);

const transaction = (type, {label, stock = 0} = {}) => {
	console.log(type, label, stock);
}

transaction('Order: ', product);

transaction('order');

const greet = (name = 'User') => {
	console.log('Hello, ' + name + '!');
}

greet();
greet('Joanna');