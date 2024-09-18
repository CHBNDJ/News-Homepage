const iconMenu = document.querySelector('.icon-menu');
const navLinks = document.querySelector('.nav-links');
const iconMenuClose = document.querySelector('.icon-menu-close');
const overlay = document.querySelector('.overlay');



iconMenu.addEventListener('click', () => {
    navLinks.classList.add('open-menu');
     overlay.classList.add('visible');
})


iconMenuClose.addEventListener('click', () => {
    navLinks.classList.remove('open-menu');
     overlay.classList.remove('visible');
});


