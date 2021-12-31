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
	res.send('<h1>Current Weather</h1>');
});

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		message: 'The help article you were looking for was not found. Sorry! Please go back and try again.'
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		message: 'The page you were looking for does not exist.'
	});
});

app.listen(3000, () => {
	console.log('The server is up on port 3000.');
});