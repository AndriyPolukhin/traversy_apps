/** */
const request = require('request');
const { MAPBOX_TOKEN, DARKSKY_TOKEN } = require('./.env');

// Using DARKSKY
const url = `https://api.darksky.net/forecast/${DARKSKY_TOKEN}/37.8267,-122.4233?units=si&lang=en`;
request({ url: url, json: true }, (err, response) => {
  const data = response.body.currently;
  const daily = response.body.daily.data[0];
  console.log(
    `Summary: ${daily.summary} It is currently ${
      data.temperature
    } degrees out. There is a ${data.precipProbability}% chance of rain.`
  );
});

// Geocoding service
// Address -> Lat/Long -> Weather. Using MAPBOX
const limit = 1;
const city = 'Los Angeles';
const base_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const map_url = `${base_url}${city}.json?access_token=${MAPBOX_TOKEN}&limit=${limit}`;

request({ url: map_url, json: true }, (err, response) => {
  const data = response.body.features[0];
  const lat = data.center[0];
  const long = data.center[1];
  console.log(
    `The coordinates for ${city} are latitude: ${lat} & longitude ${long}`
  );
});
