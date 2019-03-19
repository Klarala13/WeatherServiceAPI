const WeatherApi = require("../lib/WeatherApi");
require("dotenv").config();

const weather = new WeatherApi(process.env.API_KEY);
const zip = process.argv[2].trim();
const country = process.argv[3].trim();

console.log(process.env.API_KEY)

  if (!country) {
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