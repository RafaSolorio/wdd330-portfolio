const apiURL = "https://swapi.dev/api/people";

function displayNames(people) {
    people.forEach(person => {
        let nameList = document.querySelector("#people");
        let name = document.createElement('li');
        name.innerHTML = person.name;
        nameList.appendChild(name);
    })
}

function getAPI(url){
    fetch(url)
        .then((response) => response.json())
        .then((jsObject) => {
            let people = jsObject.results;
            //console.log(jsObject);
            displayNames(people)
        })
    
}


getAPI(apiURL);