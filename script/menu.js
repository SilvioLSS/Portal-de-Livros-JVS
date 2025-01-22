// Controle do menu sanduíche
let menuToggle = document.getElementById('menu-toggle');
let nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
