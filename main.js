const button = document.querySelector('#menu-button'); // Hamburger Icon
const menu = document.querySelector('#menu'); // Menu


// Desplegar menú
button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});