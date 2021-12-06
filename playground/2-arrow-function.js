// const square = function(num) {
// 	return num * num;
// } //is the same as...

// const square = (num) => {
// 	return num * num;
// } //is the same as...

// const square = (num) => num * num;
//
// console.log(square(3));

const event = {
	name: 'Billy\'s Birthday',
	guestList: ['Andy', 'Jennifer', 'Michael'],
	printGuestList() { //this is a standard function (same as 'printGuestList: function() {console.log('Guest List for ' + this.name);}' using alternative syntax from ES6, not an arrow function
		console.log('Guest List for ' + this.name);

		this.guestList.forEach((name) => { //arrow functions DON'T bind their own 'this' value. this is usable in this version of the function but not in the standard version.
			console.log(name + ' is attending ' + this.name + '.');
		})
	}
}

event.printGuestList();