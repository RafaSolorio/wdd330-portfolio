import {getLocation} from './utilities.js';

function getDayName(date){
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const numberDay = new Date(date).getDay();
  const nameDay = days[numberDay];
  return nameDay
}

function getWeather(url){
  fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject)
    console.log(jsObject.main.temp)
    document.getElementById('city-name').textContent = jsObject.name;
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temperature').textContent = Math.round(jsObject.main.feels_like);
    //document.getElementById('ct-icon').textContent = jsObject.main.temp;
    //let img = document.getElementById('ct-icon');
    //console.log(img)
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    document.getElementById('ct-icon').setAttribute('src', imagesrc);
    //img.setAttribute('src', imagesrc); 
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;
  });
}

//this block works! just to figuer out how to use a json outside the fetch
async function getWeaterAsyn(url) {
  const response = await fetch(url)
  const obj = await response.json()
  return obj;
}
//console.log(hola.name)



const testurl = 'https://api.openweathermap.org/data/2.5/weather?q=tijuana&appid=653115c2b12015a06e90d44cf9a1fe16&units=metric';
//STRUGGLING WITH ICON 
//let hola = await getWeaterAsyn(testurl);
//let img = document.getElementById('ct-icon');
//let imagesrc = 'https://openweathermap.org/img/w/' + hola.weather[0].icon + '.png';
//img.setAttribute('src', imagesrc);
//let hola = await getWeaterAsyn(testurl);


const apiURLf = 'https://api.openweathermap.org/data/2.5/forecast?q=tijuana&appid=653115c2b12015a06e90d44cf9a1fe16&units=metric';
function forecast(url){
  fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const dayList = jsObject.list;
    console.log(dayList)

    let index=0;
    dayList.forEach(element => {
        if (element.dt_txt.includes("18:00:00")){
            let dayName = getDayName(element.dt_txt);
            const iconClass = document.getElementsByClassName('iconf');
            const forecastClass = document.getElementsByClassName('forecast');
            const dayClass = document.getElementsByClassName('day-name');
            forecastClass[index].textContent = element.weather[0].main;
            dayClass[index].textContent = dayName;
            const imagesrc = 'https://openweathermap.org/img/w/' + element.weather[0].icon + '.png';
            const desc = element.weather[0].description;
            iconClass[index].setAttribute('src', imagesrc);  
            iconClass[index].setAttribute('alt', desc);
            index += 1;
        }
    });
  });
}

//let location = await getLocation();
////console.log(location.coords);
////http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}
//let newurl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=653115c2b12015a06e90d44cf9a1fe16&units=metric`;
//let newF= `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=653115c2b12015a06e90d44cf9a1fe16&units=metric`;
const form = document.forms['search'];
form.addEventListener('submit', searchPlace, false);
function searchPlace(event){
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${form.name.value}&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial`;
    //getWeather(url);
    //forecast(apiURLf);
    
}


//getWeather(newurl);
//forecast(newF);


let location = 'https://ipinfo.io/json'; //1000 limit per day. this is the chosen
let loc  ='http://www.geoplugin.net/json.gp?ip='  // testing


//Request visitor data using Fetch API (Async/Await)  DONE
//const request = await fetch("https://ipinfo.io/json?token=b9be1cdead0805")
//const jsonResponse = await request.json()
//const city = jsonResponse.city;

//console.log(jsonResponse.ip, jsonResponse.country, jsonResponse.city);


//just coomented this block to not exceed the rate limit while testing. NOW I'LL USE AWAIT (BLOCK CODE ABOVE)
//fetch(location)
//.then(response => response.json())
//.then((json) => {
//  //console.log(json);
//  let ipurl = `https://api.openweathermap.org/data/2.5/weather?q=${json.city}&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial`;
//  let ipurlf = `https://api.openweathermap.org/data/2.5/forecast?q=${json.city}&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial`;
//  getWeather(ipurl);
//  forecast(ipurlf);
//
//
//});


//This block works! To use the json object ouside the fecth (NOW I'LL USE A SHOTTER ,ETHOD)
async function getULocation(ipurl) {
  const response = await fetch(ipurl)
  const obj = await response.json()
  return obj.geoplugin_city;
}
//let userLocation = await getULocation(loc);
//let theurl = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial`;

let apiUrlImperial = 'https://api.openweathermap.org/data/2.5/weather?q=tijuana&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial';
let apiUrlMetric = 'https://api.openweathermap.org/data/2.5/weather?q=tijuana&appid=653115c2b12015a06e90d44cf9a1fe16&units=metric';
let apiURLFImperial = 'https://api.openweathermap.org/data/2.5/forecast?q=tijuana&appid=653115c2b12015a06e90d44cf9a1fe16&units=imperial';
let apiURLfMetric = 'https://api.openweathermap.org/data/2.5/forecast?q=tijuana&appid=653115c2b12015a06e90d44cf9a1fe16&units=metric';


//forecast(apiURLf);


//switch units
let imperial = document.getElementById('imperial');
imperial.addEventListener('click', function(event){
  event.preventDefault();
  //getWeather(apiUrlImperial);
  document.getElementById('t-unit').innerHTML = '°F';
  document.getElementById('w-unit').innerHTML = '°F'
  document.getElementById('ws-unit').innerHTML = 'mph'
});

let metric = document.getElementById('metric');
metric.addEventListener('click', function(event){
  event.preventDefault();
  //getWeather(apiUrlMetric);
  document.getElementById('t-unit').innerHTML = '°C';
  document.getElementById('w-unit').innerHTML = '°C'
  document.getElementById('ws-unit').innerHTML = 'm/s'
});
//getWeather(apiUrlMetric);