//* Cuando se hace click en la clase "header__btn", se agrega a la etiqueta nav la clase "active":

const button = document.querySelector('.header__btn');
const nav = document.querySelector('.header__nav');

button.addEventListener('click', () => {
    nav.classList.toggle('active');
});