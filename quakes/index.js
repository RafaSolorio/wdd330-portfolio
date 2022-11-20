import { getJSON, getLocation } from "./utilities.js"; 
const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

function testGetQuakesForLocation() {
    // call the getLocation function to get the lat/long
    let location = getLocation();
    console.log(location.coords.latitude);
    var latitude;
    var longitude;
    location.then(function(result){
        latitude = result.coords.latitude;
        longitude = result.coords.longitude;
       
    });
    
    // use that information to build out the correct URL
    const geoUrl = baseUrl + '&' + latitude + '&' + longitude + '&maxradiuskm=100';
    console.log(geoUrl);
    // use the url to request the correct quakes 
  
    //log out the quakes for now.
}
testGetQuakesForLocation();


//console.log(location);