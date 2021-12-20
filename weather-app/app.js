// NOTES: ASYNCHRONOUS PROGRAMMING
// console.log("starting");
//
// setTimeout(() => {
// 	console.log("2 second timer");
// }, 2000);
//
// setTimeout(()=>{
// 	console.log("0 second timer");
// }, 0);
//
// console.log("stopping");
//
//CONSOLE:
//starting
//stopping
//0 second timer
//2 second timer

const request = require('postman-request');
const {weatherstackAPIkey, mapboxAPIkey} = require("./keys");

const weatherstackURL = 'http://api.weatherstack.com/current?access_key=' + weatherstackAPIkey + '&query=37.8267,-122.4233&units=f'
const mapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=' + mapboxAPIkey + '&limit=1'

request({url: weatherstackURL, json: true}, (error, response) => {
	console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees, but it feels like " + response.body.current.feelslike + " degrees.");
});

request({url: mapboxURL, json: true}, (error, response) => {
	console.log("longitude: " + response.body.features[0].geometry.coordinates[0]);
	console.log("latitude: " + response.body.features[0].geometry.coordinates[1]);
});