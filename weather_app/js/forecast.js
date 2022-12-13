import {getJSON, getDayName} from './utilities.js';


export class Forecast{
    constructor(apiUrl){
        this.baseUrl = apiUrl;
    }

    async renderData(){
        this.jsonObject = await getJSON(this.baseUrl);
        const dayList = this.jsonObject.list;
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
    }   

}