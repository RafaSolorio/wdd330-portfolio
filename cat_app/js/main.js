////filter to only include those with an image url
function filterImages(object) {
    data = object.filter(img=> img.image?.url!=null)
    return data
  }
  
  //Function to add all the breeds available as options in the select html element
  function addBreedOption(object) {
    card = document.getElementById('breeds-options');
  
    object.forEach(element => {
      let option = document.createElement('option');
      option.textContent = element.name;
      card.appendChild(option);
    });
  }
  
  const apiUrl = 'https://api.thecatapi.com/v1/breeds';
  
  fetch(apiUrl,{headers: {
    'x-api-key': '2a98c6ad-8d4a-491d-93d7-558233612bc4'
  }})
    .then((response) => response.json())
    .then((jsObject) => {
      //Add available options in the select html element
      let catImages = filterImages(jsObject);
      addBreedOption(catImages);
    });
  
  //Funcion to display the information about the breed that the user selected
  function getBreed(){
    document.getElementById("cats").innerHTML = "";
  
    let breedSelector = document.getElementById('breeds-options').value;
  
    fetch(apiUrl,{headers: {
      'x-api-key': '2a98c6ad-8d4a-491d-93d7-558233612bc4'
    }})
   .then((response) => response.json())
   .then((jsObject) => {
    let catImages = filterImages(jsObject);
    let catDiv = document.getElementById('cats');
    catImages.forEach(element => {
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
    
    });
   
   });
  }
  
  //Add a change event on the select element to call the getBreed function
  document.getElementById("breeds-options").addEventListener('change', getBreed);
  