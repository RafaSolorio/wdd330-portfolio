import { Weather } from './weather.js';
import { Forecast } from './forecast.js';
import { switchUnits } from './utilities.js';

//Request visitor data using Fetch API (Async/Await)  DONE
const request = await fetch("https://ipinfo.io/json?token=b9be1cdead0805")
const jsonResponse = await request.json()
const city = jsonResponse.city;

let apiUrlWImperial = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial`;
let apiUrlFImperial = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial`;

let weather = new Weather(apiUrlWImperial);
weather.renderData();
let forecast = new Forecast(apiUrlFImperial);
forecast.renderData();

let imperial = document.getElementById('imperial');
imperial.addEventListener('click', function(event){
  event.preventDefault();
  weather.switchToImperial();
});

let metric = document.getElementById('metric');
metric.addEventListener('click', function(event){
  event.preventDefault();
  weather.switchToMetric()
});

const form = document.forms['search'];
form.addEventListener('submit', searchPlace, false);
function searchPlace(event){
    event.preventDefault();
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${form.name.value}&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial`;
    const apiurlf = `https://api.openweathermap.org/data/2.5/forecast?q=${form.name.value}&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial`;
    let newWeather = new Weather(apiurl);
    let newForecast = new Forecast(apiurlf);
    weather = newWeather;
    forecast = newForecast;
    weather.renderData();
    forecast.renderData();
}