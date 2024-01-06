let menu = document.querySelector("#menu-icon");
let navmenu =document.querySelector(".navmenu");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navmenu.classList.toggle("open");
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2400,
    reset: true
});

sr.reveal('.hero-text span', {delay:400});
sr.reveal('.hero-img', {delay:500, original: 'top'});