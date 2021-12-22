const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const askForLocation = () => {
	rl.question('Please enter in a location: ', (location) => {
		if (!location) {
			console.log('No entry detected. Please try again.');
			return askForLocation();
		}
		rl.close();
		geocode(location, (error, geocodeData) => {
			if (error) {
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

	});
}

askForLocation();