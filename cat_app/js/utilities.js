export function getJSON(url, apiKey = null) {
    if(apiKey == null){
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
    if(typeof apiKey == 'string'){
        let apiKeyHeader = apiKey;
        return fetch(url,{headers : {'x-api-key': apiKeyHeader}})
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
}

export function filterImages(object) {
    const data = object.filter(img=> img.image?.url!=null)
    return data
}

export function renderElement(element){
    document.getElementById("cats").innerHTML = "";
      
    let breedSelector = document.getElementById('breeds-options').value;
    let catDiv = document.getElementById('cats');
    
    if (breedSelector == element.name){         
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let description = document.createElement('p');
        let temperament = document.createElement('p');
        let lifeSpan = document.createElement('p');
        let originP = document.createElement('p');
        
        h2.textContent = element.name;
        catDiv.appendChild(h2);
    
        image.setAttribute('src', element.image.url);
        image.setAttribute('alt', element.name);
        catDiv.appendChild(image);
        description.textContent = element.description;
        catDiv.appendChild(description);
    
        temperament.textContent = 'Temperament: ' + element.temperament;
        catDiv.appendChild(temperament);
        lifeSpan.textContent = 'Average life span: ' + element.life_span;
        catDiv.appendChild(lifeSpan);
    
        originP.textContent = 'Origin: ' + element.origin;
        catDiv.appendChild(originP);            
    }
}
