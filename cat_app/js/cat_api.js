import { getJSON, filterImages, renderElement } from "./utilities.js";

export class CatAPI {
    constructor(apiUrl, apiKey){
        this.baseUrl = apiUrl
        this.baseApiKey = apiKey
    }
    async getJson(url, apiKeyHeader) {
        const response = await fetch(url,{headers : {'x-api-key': apiKeyHeader}})
        const obj = await response.json()
        return obj;
    }
    
    renderData(){
        const newObjFiltered = filterImages(this.jsObjFiltered)
        newObjFiltered.forEach(renderElement)         
    }


    async addBreedOptions() {
        this.jsObject = await this.getJson(this.baseUrl, this.baseApiKey);
        
        this.jsObjFiltered = filterImages(this.jsObject);
        console.log(this.jsObjFiltered)
        const card = document.getElementById('breeds-options');
        this.jsObjFiltered.forEach(element => {
          let option = document.createElement('option');
          option.textContent = element.name;
          card.appendChild(option);
        });
    }

}