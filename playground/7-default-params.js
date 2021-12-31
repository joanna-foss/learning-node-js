const greeter = (name = "my friend", age) => { //ES6 default parameter when nothing is provided
	console.log('Hello, ' + name)
}

greeter('Joanna');

greeter();