import { CatAPI } from "./cat_api.js"

const apiUrl = 'https://api.thecatapi.com/v1/breeds';
const apiKey = '2a98c6ad-8d4a-491d-93d7-558233612bc4';

const catApi = new CatAPI(apiUrl, apiKey);

document.getElementById("breeds-options").addEventListener('change', catApi.renderData);

catApi.addBreedOptions();

