import $ from 'jquery';

// $(document).ready(() => {
//   $(() => {
//     // Запускаем инициализацию tooltip
//     $('[data-toggle="tooltip"]').tooltip();
//   });
//
//   $(() => {
//     $('[data-toggle="popover"]').popover();
//   });
// });

const navbarToggler = document.querySelector('.navbar-toggler');
const body = document.querySelector('body');
const headerClose = document.querySelectorAll('.js_header__close');

navbarToggler.addEventListener('click', () => {
  body.classList.toggle('header__show');
});

for (const buttonItem of headerClose) {
  buttonItem.addEventListener('click', () => {
    navbarToggler.click();
  });
}
