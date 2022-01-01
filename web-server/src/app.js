console.log("Server side javascript is connected.");

const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
const port = process.env.PORT || 3000;

const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use('/', express.static(publicDirPath));

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Simply Weather',
		name: 'Joanna Foss'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About',
		name: 'Joanna Foss'
	});
});

app.get('/resources', (req, res) => {
	res.render('resources', {
		title: 'Resources',
		name: 'Joanna Foss'
	});
});

app.get('/my-weather', (req, res) => {
	if(!req.query.address){
		return res.send({
			error: 'You must provide a location. Feel free to try again.'
		});
	}

	geocode(req.query.address, (error, {longitude, latitude, location} = {}) => {
		if(error){
			return res.send({ error });
		}
		forecast(longitude, latitude, (error, {description, temperature, feels_like, precip, humidity, icon_url} = {}) => {
			if(error){
				return res.send({ error });
			}
			res.send({ //this caused the syntax error in js/app.js... was res.render (HTML)... had to change to res.send (JSON)
				title: 'Simply Weather',
				name: 'Joanna Foss',
				description,
				temperature,
				feels_like,
				location,
				precip,
				humidity,
				icon_url
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

app.get('/resources/*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Joanna Foss',
		message: 'The resource you were looking for was not found. Sorry! Please go back and try again.'
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Joanna Foss',
		message: 'The page you were looking for does not exist.'
	});
});

app.listen(port, () => {
	console.log('The server is up on ' + port + '.');
});