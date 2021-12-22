const {weatherstackAPIkey} = require("../keys");
const request = require("postman-request");

const forecast = (lon, lat, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=' + weatherstackAPIkey + '&query=37.8267,-122.4233&units=f';

	request({url: url, json: true}, (error, response) => {
		if(error){
			callback('Unable to connect.', undefined);
		} else if(response.body.error){
			callback('Unable to retrieve data.', undefined);
		} else {
			callback(undefined, {
				description: response.body.current.weather_descriptions[0],
				temperature: response.body.current.temperature,
				feels_like: response.body.current.feelslike
			});
		}
	});
}

module.exports = forecast;