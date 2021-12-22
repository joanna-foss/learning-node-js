const request = require('postman-request');
const {weatherstackAPIkey, mapboxAPIkey} = require("./keys");

const weatherstackURL = 'http://api.weatherstack.com/current?access_key=' + weatherstackAPIkey + '&query=37.8267,-122.4233&units=f'
const mapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=' + mapboxAPIkey + '&limit=1'

// request({url: weatherstackURL, json: true}, (error, response) => {
// 	if (error) {
// 		console.log("Unable to retrieve data from weatherstack.");
// 	} else if(response.body.error){
// 		console.log("Unable to find location.");
// 	} else {
// 		console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees, but it feels like " + response.body.current.feelslike + " degrees.");
// 	}
// });

// request({url: mapboxURL, json: true}, (error, response) => {
// 	if (error) {
// 		console.log("Unable to retrieve data from mapbox.");
// 	} else if (response.body.features.length === 0) {
// 		console.log("Undefined location.");
// 	} else {
// 		console.log("longitude: " + response.body.features[0].geometry.coordinates[0]);
// 		console.log("latitude: " + response.body.features[0].geometry.coordinates[1]);
// 	}
// });

const geocode = (address, callback) => {

}

geocode('San Antonio', () => {});