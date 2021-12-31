const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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
		title: 'Weather',
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
	if(!req.query.address){
		return res.send({
			error: 'You must provide an address.'
		});
	}

	geocode(req.query.address, (error, {longitude, latitude, location} = {}) => {
		if(error){
			return res.send({
				error: error
			});
		}
		forecast(longitude, latitude, (error, {description, temperature, feels_like} = {}) => {
			if(error){
				return res.send({
					error: error
				});
			}

			res.render('index', {
				title: 'My Weather',
				name: 'Joanna',
				description: description,
				temperature: temperature,
				feels_like: feels_like,
				location: location
			});
		});
	});
});

app.get('/products', (req, res) => {
	if(!req.query.search){
		return res.send({
			error: 'You must provide a search term.'
		});
	}

	console.log(req.query.search);
	res.send({
		products: []
	});
});

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Joanna',
		message: 'The help article you were looking for was not found. Sorry! Please go back and try again.'
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Joanna',
		message: 'The page you were looking for does not exist.'
	});
});

app.listen(3000, () => {
	console.log('The server is up on port 3000.');
});