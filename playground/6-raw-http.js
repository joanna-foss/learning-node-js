//HOW WE COULD USE HTTP REQUESTS WITHOUT A LIBRARY
//FOR KNOWLEDGE, NOT FOR ACTUAL USE, THIS IS NOT AS EFFICIENT

const https = require('https');
const http = require('http');
const {weatherstackAPIkey} = require("../weather-app/keys");

const url = 'http://api.weatherstack.com/current?access_key=' + weatherstackAPIkey + '&query='+ 45 + ',' + -75 + '&units=f';

const request = http.request(url, (response) => {
	let data = '';
	response.on('data', (chunk) => {
		data = data + chunk.toString();
		console.log(data);
	});

	response.on('end', () => {
		const body = JSON.parse(data);
		console.log(body);
	});
}); //all setup for sending request

request.on('error', (error) => {
	console.log('An error: ', error);
});

request.end(); //done setting up request