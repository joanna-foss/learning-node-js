const express = require('express'); //a function used to call a new express application

const app = express();

//app.com
//app.com/help
//app.com/about
//etc.

app.get('', (req, res) => {
	res.send('Hello express!');
});

app.get('/help', (req, res) => {
	res.send('Help page');
});

app.get('/about', (req, res) => {
	res.send('About page');
});

app.get('/my-weather', (req, res) => {
	res.send('Weather page');
});

app.listen(3000, () => {
	console.log('The server is up on port 3000.');
});