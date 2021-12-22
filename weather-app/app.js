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
		geocode(location, (error, {longitude, latitude, location} = {}) => { //reference playground/5-es6-objects.js for refresh on what's happening here
			if (error) {
				return console.log('Error: ', error);
			}
			forecast(longitude, latitude, (error, {description, temperature, feels_like} = {}) => { //reference playground/5-es6-objects.js for refresh on what's happening here
				if (error) {
					return console.log('Error: ', error);
				}
				console.log('Weather Data for ' + location + ':');
				console.log(description);
				console.log(temperature);
				console.log(feels_like);
			});
		});

	});
}

askForLocation();