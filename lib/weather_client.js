
apiKey = "deb259d889dfe62ade7f8dbf318ef846";
const axios = require("axios");

module.exports = class WeatherApi {

  constructor(apiKey, city) {
    this.baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    this.apiKey = apiKey;
    this.city = city;

    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {"Content-Type": "application/json"}
    });
  }

  getWeather() {
    return this.client
      .get(`${this.baseURL}`)
      .then(res =>{
        console.log(res.data);
        this.city({
          city:res
        })
      }
     );
  }

  handleEvent() {
    const button = document.querySelector("button");
    button.addEventListener("click", event => {
      event.preventDefault();
      console.log("I've been clicked");
      console.log(this.city.current.value);
    });
  }
 };

  fetch(url, {
    method: "POST", 
    body: JSON.stringify ({name: this.city.current.value}), 
    headers: {"Content-Type": "application/json"}
  })
    .then(res => res.json())
    .then(response => console.log("Success:", JSON.stringify(response)))
    .catch(error => console.error("Error:", error));

