const {weatherstackAPIkey} = require("../keys");
const request = require("postman-request");

const forecast = (lon, lat, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=' + weatherstackAPIkey + '&query='+ lat + ',' + lon + '&units=f';

	request({url: url, json: true}, (error, response) => {
		if(error){
			callback('Unable to connect to weatherstack.', undefined);
		} else if(response.body.error){
			callback('Unable to retrieve coordinate data.', undefined);
		} else {
			callback(undefined, {
				description: "It is currently " + response.body.current.weather_descriptions[0] + " out.",
				temperature: "The temperature is " + response.body.current.temperature + " degrees.",
				feels_like: "And it feels like it is " + response.body.current.feelslike + " degrees out."
			});
		}
	});
}

module.exports = forecast;