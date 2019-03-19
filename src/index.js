import weatherClient from 'lib/WeatherClient';
require("dotenv").config();

const weather = new WeatherAPI(process.env.API_KEY);
const city = process.argv[2].trim();
const country = process.argv[3].trim();
const zip = process.argv[2].trim();
const zipRegex = /\d{4,6}/g;

if (!city) {
  console.log("Not a valid City");
  process.exit();
} else if (!country) {
  console.log("Not a valid Country")
  process.exit();
} else if (!zip) {
  console.log("Not a valid ZipCode, must be a number");
  process.exit();
}

const currentWeather = async (zip, country) => {
  const nowWeather = await weather.getData(zip, country);
  console.log("nowWeather:", nowWeather);
}
currentWeather (zip, country);

document.querySelector("#main").textContent =  `The weather in ${this.city} currently is ${currentWeather()}`
