import weatherClient from 'lib/WeatherClient';

//const WeatherClient =  require('../lib/weather_client');
const city = process.argv[2].trim();

if (!city) {
  console.log("Not a City");
  process.exit();
}

const weatherClient = new WeatherClient('deb259d889dfe62ade7f8dbf318ef846', `${city}`);

weatherClient.getWeather().then(data => {
  console.log(data, entries + providerLine);
});

document.querySelector("#main").textContent =  `The weather in ${this.city} currently is ${getWeather()}`

