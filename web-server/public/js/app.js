console.log('Client side javascript is connected.');

//STUCK HERE

// fetch('http://localhost:3000/my-weather?address=boston')
// 	.then((res)=>{
// 		console.log(res);
// 		res.json().then((data)=>{
// 			console.log(data);
// 		})
// 		.catch((error)=>{
// 			console.log(error)});
// 	});

fetch('https://puzzle.mead.io/puzzle')
	.then((res)=>{
		res.json().then((data)=>{
			console.log(data);
		})
	});