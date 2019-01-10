
// Init the weather object
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();

const getWeather = () => {
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results.location, results.current);
    })
    .catch(err => console.log(err));
}

// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  // Change Location
  weather.changeLocation(city, country);
  // set location in ls
  storage.setLocationData(city, country)
  getWeather();

  // close the modal
  $('#locModal').modal('hide');
});