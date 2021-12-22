const request = require('postman-request');
const {weatherstackAPIkey, mapboxAPIkey} = require("./keys");
const geocode = require('./utils/geocode');

const weatherstackURL = 'http://api.weatherstack.com/current?access_key=' + weatherstackAPIkey + '&query=37.8267,-122.4233&units=f'

//DO NOT USE FIREFOX FOR WEATHERSTACK API... AUTOREDIRECTS TO HTTPS AND DOES NOT GIVE YOU BACK THE DATA YOU NEED.
// request({url: weatherstackURL, json: true}, (error, response) => {
// 	if (error) {
// 		console.log("Unable to retrieve data from weatherstack.");
// 	} else if(response.body.error){
// 		console.log("Unable to find location.");
// 	} else {
// 		console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees, but it feels like " + response.body.current.feelslike + " degrees.");
// 	}
// });

geocode('New Orleans', (error, data) => {
	console.log('Error', error);
	console.log('Data', data);
});