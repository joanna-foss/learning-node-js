console.log('Client side javascript is connected.');

const formData = document.querySelector('form');
const input = document.querySelector('input');
const locationP = document.querySelector('#location');
const descriptionP = document.querySelector('#description');
const icon = document.querySelector('#weather-icon');

locationP.textContent = 'Your weather data will display here.';
descriptionP.textContent = '';

formData.addEventListener('submit', (e) => {
	e.preventDefault();

	const location = input.value;

	fetch('/my-weather?address=' + location)
	.then((res)=>{
		res.json().then((data)=> {
		if(data.error){
			locationP.textContent = data.error;
		} else {
			locationP.textContent = data.location;
			descriptionP.textContent = data.description + data.humidity + data.precip + data.temperature + data.feels_like;
			icon.src = data.icon_url;
		}
		}).catch((error)=>{console.log(error)});
	});
});