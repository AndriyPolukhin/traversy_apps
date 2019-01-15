const cities = ['Nairobi', 'London', 'San Francisco'];

// https://cors-anywhere.herokuapp.com/

async function getWeather(city) {
  let city = city;
  const response = await fetch(`https://www.metaweather.com/api/location/`)
  const data = await response.json();
  console.log(data);
  return data.woeid;
}


cities.forEach((city) => {
  const weather = getWeather(city);
  console.log(weather);
});
