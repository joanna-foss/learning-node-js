const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use('/', express.static(publicDirPath));

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Home Page',
		name: 'Joanna'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Page',
		name: 'Joanna'
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help Page',
		name: 'Joanna'
	});
});

app.get('/my-weather', (req, res) => {
	res.send('<h1>The Current Weather</h1>');
});

app.listen(3000, () => {
	console.log('The server is up on port 3000.');
});