if(!localStorage.getItem('btso')) {
    localStorage.setItem('btso', 'so1');
};

const btnMenu = document.querySelector('.btnMenu');
const svgBtn = document.querySelector('.btnMenuSvg');
const svgBarre = document.querySelector('.barre');
const svgCroix = document.querySelector('.croix');
const MenuText = document.querySelector('.textmenu');
const FermerText = document.querySelector('.textfermer');
const header = document.querySelector('header');
const divLogo = document.queryCommandValue('.logo');

btnMenu.addEventListener('click', function() {
    btnMenu.classList.toggle('active');

    if(btnMenu.classList[1]) {
        header.style.left = '-84px';
        svgBtn.style.tranform = 'rotate(720deg)';
        svgBarre.style.display = "none";
        svgCroix.style.display = "flex";
        MenuText.style.display = "none";
        FermerText.style.display = "flex";
    } else {
        header.style.left = '-168px';
        svgBtn.style.tranform = 'rotate(-720deg)';
        svgBarre.style.display = "flex";
        svgCroix.style.display = "none";
        MenuText.style.display = "flex";
        FermerText.style.display = "none";
    }
})