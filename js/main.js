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
const main = document.querySelector('main');

const cruxBtn = document.createElement('div');
cruxBtn.classList.add('crux');
main.appendChild(cruxBtn)

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

    if((Array.from(this.classList)).slice(1)[0]) {
        setTimeout(function() {
            cruxBtn.style.right = '0px';
            console.log("c'est ouvert");
            window.addEventListener('scroll', noScroll);
        }, 100);
    } else {
        setTimeout(function() {
            cruxBtn.style.right = '-100vw';
            console.log("C'est fermé");
            window.removeEventListener('scroll', noScroll);
        }, 200);
    };
});

cruxBtn.addEventListener('click', function() {
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

    if((Array.from(this.classList)).slice(1)[0]) {
        setTimeout(function() {
            cruxBtn.style.right = '0px';
            console.log("c'est ouvert");
            body.style.overflow = 'hidden';
        }, 100);
    } else {
        setTimeout(function() {
            cruxBtn.style.right = '-100vw';
            console.log("C'est fermé");
            body.style.overflow = 'auto';
        }, 200);
    };
});