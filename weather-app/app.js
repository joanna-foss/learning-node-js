const {weatherstackAPIkey, mapboxAPIkey} = require("./keys");
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('New Orleans', (error, geocodeData) => {
	if(error){
		return console.log('Error: ', error);
	}
	forecast(geocodeData.longitude, geocodeData.latitude, (error, forecastData) => {
		if (error) {
			return console.log('Error: ', error);
		}
		console.log('Weather Data for ' + geocodeData.location + ':');
		console.log(forecastData.description);
		console.log(forecastData.temperature);
		console.log(forecastData.feels_like);
	});
});