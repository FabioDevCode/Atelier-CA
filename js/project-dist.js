import { projets } from './data-projets.js';

// Création de la page produit
const main = document.querySelector('main')
let idProject = parseInt(window.location.search.slice(1)) - 1;

const titlePage = document.querySelector('title');
titlePage.innerHTML = `Projet - ${projets[idProject].title}`;

createInfo()
crateGalerie()

function createInfo() {
    let projetInfo = document.createElement('section');
    projetInfo.classList.add("le-projet");
    projetInfo.innerHTML = `
        <h1>${projets[idProject].title}</h1>
        <div class="bloc-projet-description">
            <div class="projet-info">
                <p><span>Lieu : </span>${projets[idProject].lieu}</p> 
                <p><span>Calendrier : </span>${projets[idProject].calendar}</p>
                <p><span>Maître d'ouvrage : </span>${projets[idProject].moa}</p>
                <p><span>Budget : </span>${projets[idProject].budget}</p>
                <p><span>Surface : </span>${projets[idProject].surface}</p>
            </div>

            <div class="la-description">
                <p>${projets[idProject].description}</p>
            </div>
        </div>
        <button id="back">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
        RETOUR AUX PROJETS</button>
    `;
    main.appendChild(projetInfo)
}

function crateGalerie() {
    let projetGalerie = document.createElement('div');
    projetGalerie.classList.add("bloc-img");

    const gallery = projets[idProject].photos;
    let textImg = "";

    for(let i = 0; i < gallery.length; i++) {

        let img = `<img src="./assets/images/projets/${gallery[i]}.jpg" alt="photo n° ${i} du projet">`;
        textImg = textImg + img;

        console.log(textImg)
    }

    projetGalerie.innerHTML = `${textImg}`;

    main.appendChild(projetGalerie);
}

const btnBack = document.querySelector('#back');
btnBack.addEventListener('click', () => {
    window.history.back();
})