const {weatherstackAPIkey} = require("../keys");
const request = require("postman-request");

const forecast = (lon, lat, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=' + weatherstackAPIkey + '&query='+ lat + ',' + lon + '&units=f';

	request({url: url, json: true}, (error, {body} = {}) => { //reference playground/5-es6-objects.js for refresh on what's happening here
		if(error){
			callback('Unable to connect to weatherstack.', undefined);
		} else if(body.error){
			callback('Unable to retrieve coordinate data.', undefined);
		} else {
			callback(undefined, {
				description: "It is currently " + body.current.weather_descriptions[0] + " out.",
				temperature: "The temperature is " + body.current.temperature + " degrees.",
				feels_like: "And it feels like it is " + body.current.feelslike + " degrees out."
			});
		}
	});
}

module.exports = forecast;