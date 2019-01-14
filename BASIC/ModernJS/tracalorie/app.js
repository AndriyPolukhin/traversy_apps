const cities = ['Nairobi', 'London', 'San Francisco'];
async function getWeather(city) {
  const response = await fetch(`https://www.metaweather.com/api/location/${city}`)
  const data = await response.json();
  console.log(data.json())
  return data.woeid;
}

cities.forEach((city) => {
  const weather = getWeather(city);
  console.log(weather);
});