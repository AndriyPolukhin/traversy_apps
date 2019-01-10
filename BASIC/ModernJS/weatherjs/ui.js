class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }
  paint(location, weather) {
    this.location.textContent = `${location.name}, ${location.country}`;
    this.desc.textContent = weather.condition.text;
    this.string.textContent = weather.temp_c;
    this.icon.setAttribute('src', weather.condition.icon);
    this.humidity.textContent = `Relative Humidity: ${weather.humidity} `;
    this.feelsLike.textContent = `Feels Like: ${weather.feelslike_c} `;
    this.pressure.textContent = `Pressure: ${weather.pressure_mb} `;
    this.wind.textContent = `Wind kph: ${weather.wind_kph} `;


  }
}