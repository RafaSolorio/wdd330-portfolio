export function getJSON(url) {
  return fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        //console.log(response.json());
        return response.json();
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}
///conver units
export function convertToCelsius(temperature){
  let celsiusTemp = (temperature - 32) * 5/9;
  return Math.round(celsiusTemp)
}
export function convertToMS(mph){
  let ms = mph / 2.237
  return ms.toFixed(2)
}

//
export function computePressureinHg(pressureInhPa){
  let pressure = pressureInhPa * 0.02953;
  return pressure.toFixed(2)
}

//add imperial units or metric units
export function renderUnits(units){
  if (units == "imperial"){
    document.getElementById('t-unit').innerHTML = '°F';
    document.getElementById('ws-unit').innerHTML = 'mph';
  }
  if (units == "metric"){
    document.getElementById('t-unit').innerHTML = '°C';
    document.getElementById('ws-unit').innerHTML = 'm/s';
  }
}

// get and render dayName
export function getDayName(date){
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

let metric = document.getElementById('metric');
metric.addEventListener('click', function(event){
  event.preventDefault();
  //example to change units
  //document.getElementById('temperature').innerHTML = convertToCelsius(document.getElementById('temperature').innerHTML);
  document.getElementById('wind-speed').innerHTML = convertToMS(document.getElementById('wind-speed').innerHTML);
  //getWeather(apiUrlMetric);
  renderUnits('metric');
});

export function switchUnits(weatherData, units){
    if(units == "imperial"){
      weatherData.switchToImperial();
    } else if(units == "metric"){
      weatherData.switchToMetric();
    }
}