setTimeout(()=>{
	console.log("2 seconds are up.");
}, 2000);

const names = ['Jo', 'Anna', 'Maria'];
const shortNames = names.filter((name)=>{
	return name.length <= 4;
});

const geocode = (address, callback) => {
	setTimeout(() => {
		const data = {
			latitude: 0,
			longitude: 0
		}
		callback(data);
	}, 2000)
}

geocode('Pittsburgh', (data)=>{
	console.log(data);
});

const add = (num1, num2, callback) => {
	setTimeout(()=>{
		const total = num1 + num2;
		callback(total);
	}, 2000);
}

add(1, 4, (sum)=>{
	console.log(sum);
});