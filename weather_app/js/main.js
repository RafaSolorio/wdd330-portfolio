import {getLocation} from './utilities.js';

// const theurl = 'https://api.openweathermap.org/data/2.5/weather?q=tijuana&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial';
function getWeather(url){
  fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject)
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temperature').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;
  });
}

const apiURLf = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial';
function forecast(url){
  fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    const dayList = jsObject.list;
    //console.log(dayList)

    let index=0;
    dayList.forEach(element => {
        if (element.dt_txt.includes("18:00:00")){
            const iconClass = document.getElementsByClassName('iconf');
            const forecastClass = document.getElementsByClassName('forecast');
            forecastClass[index].textContent = element.weather[0].main;
            const imagesrc = 'https://openweathermap.org/img/w/' + element.weather[0].icon + '.png';
            const desc = element.weather[0].description;
            iconClass[index].setAttribute('src', imagesrc);  
            iconClass[index].setAttribute('alt', desc);
            index += 1;
        }
    });
  });
}

let location = await getLocation();
//console.log(location.coords);
//http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}
let newurl = `http://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=653115c2b12015a06e90d44cf9a1fe16&units=metric`;
let newF= `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=653115c2b12015a06e90d44cf9a1fe16&units=metric`;
const form = document.forms['search'];
form.addEventListener('submit', searchPlace, false);
function searchPlace(event){
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${form.name.value}&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial`;
    getWeather(url);
    forecast(apiURLf);
    
}
getWeather(newurl);
forecast(newF);
