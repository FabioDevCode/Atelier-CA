import { projets } from './data-projets.js';
const blocProject = document.querySelector('.bloc-projet');

showProjectCards()

function showProjectCards() {

    for (let i = 0; i <= projets.length; i++) {

        let card = document.createElement('div');
        card.classList.add("projet");
        card.classList.add(`${projets[i].type}`);
        card.classList.add("active");
        card.innerHTML = `
            <img src="./assets/images/projects/${projets[i].image}.jpg" alt="photo d'un projet">
            <a href="projet.html?${projets[i].id}">${projets[i].title}</a>
        `;

        blocProject.appendChild(card);
    };
};