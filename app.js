const menu = document.querySelector('#menu');
const menuClose = document.querySelector('.fa-xmark');
const menuLinks = document.querySelectorAll('.side-menu');

menu.addEventListener('click', () => {
  const showMenu = document.querySelector('.menu-background');
  showMenu.classList.toggle('active');
});

menuClose.addEventListener('click', () => {
  const showMenu = document.querySelector('.menu-background');
  showMenu.classList.remove('active');
});

menuLinks.forEach((element) => {
  element.addEventListener('click', () => {
    const showMenu = document.querySelector('.menu-background');
    showMenu.classList.remove('active');
  });
});
