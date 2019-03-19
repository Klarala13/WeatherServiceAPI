import axios from "axios";
apiKey = "deb259d889dfe62ade7f8dbf318ef846";

("use strict");

class WeatherApi {
  constructor(apiKey, city) {
    this.baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    this.apiKey = apiKey;
    this.city = city;
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        Accept: "application/json",
        APPID: this.apiKey
      }
    });
    this.handleEvent();
  }

  async getData(zip, country) {
    // error handling if not a string
    const url = `${ 
      this.baseURL }/weather?zip=${
      zip.toString()},${
      country}&units=metric&appid=${
      this.apiKey
    }`;

    const data = await this.client
      .get(url)
      .then(data => {
        const current = data.data;
        return {
          city: current.name,
          lat: current.coord.lat,
          lon: current.coord.lon,
          temp: current.main.temp,
          temp_min: current.main.temp_min,
          temp_max: current.main.temp_max
        };
      })
      .catch(err => console.error(err));
    return data;
  }
}

export default WeatherApi();




