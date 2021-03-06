const {mapboxAPIkey} = require("../keys");
const request = require("postman-request");

const geocode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + mapboxAPIkey + '&limit=1';

	request({url: url, json: true}, (error, {body} = {}) => {
		if (error) {
			callback('Unable to connect to services.', undefined);
		} else if (body.features.length === 0) {
			callback('Unable to find location. Search again.', undefined);
		} else {
			callback(undefined, {
				longitude: body.features[0].geometry.coordinates[0],
				latitude: body.features[0].geometry.coordinates[1],
				location: body.features[0].place_name
			});
		}
	});
}

module.exports = geocode;