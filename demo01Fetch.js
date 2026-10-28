/*
In Javascript the fetch() function is used to get data from the internet
This could be text, images or jason data it uses an http request to a specific url

fetch takes 2 arguments:
-the url
-an optional object containing options such as method typ (post, put, get, delete)
-GET is the defaults 
*/

const characterDiv = document.getElementById("characterCards");

fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => createCharacterCards(data.results));

function createCharacterCards(character){
    characterDiv.innerHTML = "";
    for(let c of character){
        console.log("looped")
        characterDiv.innerHTML += getElement(c);
    }
};

function getElement(data) {
    return `
        <div class="card">
            <h3>${data.name}<h3/>
            <img src="${data.image}" alt="">
        </div>
        `
};
