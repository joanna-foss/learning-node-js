const path = require('path');
const express = require('express'); //a function used to call a new express application

const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.use('/', express.static(publicDirPath));
app.use('/help', express.static(path.join(publicDirPath, '/help.html')));
app.use('/about', express.static(path.join(publicDirPath, '/about.html')));

//GOAL: Create two more HTML files
// 1. Create an html page for about
// 2. Create an html page for help
// 3. Remove the old route handlers for both
// 4. Visit both to test

app.get('/my-weather', (req, res) => {
	res.send('<h1>The Current Weather</h1>');
});

app.listen(3000, () => {
	console.log('The server is up on port 3000.');
});