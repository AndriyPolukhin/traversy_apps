/**
 *  MAIN FILE FOR THE REQUEST
 * */

// Dependencies
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log(`No Address  is provided`);
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) return console.log(`Error`, error);

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) return console.log(`Error`, error);

      console.log(location);
      console.log(forecastData);
    });
  });
}
