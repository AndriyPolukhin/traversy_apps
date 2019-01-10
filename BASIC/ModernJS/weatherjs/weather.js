class Weather {
  constructor(city, country) {
    this.apiKey = '0c0fce51c0284448828164020191001';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);

    const responseData = await response.json();

    // console.log(responseData.current);
    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}