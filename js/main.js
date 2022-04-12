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

if(window.innerWidth >= '769') {
    const cruxBtn = document.createElement('div');
    cruxBtn.classList.add('crux');
    cruxBtn.classList.add('none');
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
            cruxBtn.classList.remove('none');
            cruxBtn.style.opacity = '1';
        } else {
            cruxBtn.style.opacity = '0';
            cruxBtn.classList.add('none');
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
            cruxBtn.classList.remove('none');
            cruxBtn.style.opacity = '1';
        } else {
            cruxBtn.style.opacity = '0';
            cruxBtn.classList.add('none');
        };
    });
}

if(window.innerWidth <= '768') {
    btnMenu.addEventListener('click', function() {
        btnMenu.classList.toggle('active');

        if(btnMenu.classList[1]) {
            header.style.height = '100%';
            svgBarre.style.display = "none";
            svgCroix.style.display = "flex";
            MenuText.style.display = "none";
            FermerText.style.display = "flex";
        } else {
            header.style.height = '70px';
            svgBarre.style.display = "flex";
            svgCroix.style.display = "none";
            MenuText.style.display = "flex";
            FermerText.style.display = "none";
        }
    });
}

function nonScroll() {
    scrollHaut = window.pageYOffset;
    scrollGauche = window.pageXOffset;
    window.onscroll = function() {
        window.scrollTo(scrollGauche, scrollHaut);
    };
}
function ouiScroll() {
    window.onscroll = function() {};
}