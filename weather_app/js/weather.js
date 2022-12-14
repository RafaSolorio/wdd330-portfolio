import {getJSON, renderUnits, computePressureinHg, convertToCelsius, convertToMS} from './utilities.js';

export class Weather{
    constructor(apiUrl){
        this.baseUrl = apiUrl;
    }

    async renderData(){
        this.jsonObject = await getJSON(this.baseUrl);
        document.getElementById('city-name').textContent = this.jsonObject.name;
        document.getElementById('temperature').textContent = Math.round(this.jsonObject.main.feels_like);
        document.getElementById('currently').textContent =this.jsonObject.weather[0].main;
        document.getElementById('humidity').textContent = this.jsonObject.main.humidity;
        document.getElementById('wind-speed').innerHTML = this.jsonObject.wind.speed;
        let pressure = this.jsonObject.main.pressure;
        document.getElementById('pressure').textContent = computePressureinHg(pressure)
        renderUnits('imperial');
    }

    switchToImperial(){
        document.getElementById('temperature').innerHTML = Math.round(this.jsonObject.main.feels_like);
        document.getElementById('wind-speed').innerHTML = this.jsonObject.wind.speed;
        renderUnits('imperial');
    }

    switchToMetric(){
        document.getElementById('temperature').innerHTML = convertToCelsius(document.getElementById('temperature').innerHTML);
        document.getElementById('wind-speed').innerHTML = convertToMS(document.getElementById('wind-speed').innerHTML);
        renderUnits('metric');
    }
}