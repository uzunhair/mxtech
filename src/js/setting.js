const navbarToggler = document.querySelector('.navbar-toggler');
const body = document.querySelector('body');
// const headerClose = document.querySelectorAll('.js_header__close');

navbarToggler.addEventListener('click', () => {
  body.classList.toggle('header__show');
});

// (function () {
//   const throttle = function (type, name, obj) {
//     obj = obj || window;
//     let running = false;
//     const func = function () {
//       if (running) { return; }
//       running = true;
//       requestAnimationFrame(() => {
//         obj.dispatchEvent(new CustomEvent(name));
//         running = false;
//       });
//     };
//     obj.addEventListener(type, func);
//   };
//
//   /* init - you can init any event */
//   throttle('resize', 'optimizedResize');
// }());
//
// // handle event
// window.addEventListener('optimizedResize', () => {
//   const pageWidth = document.documentElement.scrollWidth;
//   console.log('Resource conscious resize callback!', pageWidth);
//   if (pageWidth < 767) {
//     for (const buttonItem of headerClose) {
//       buttonItem.addEventListener('click', () => {
//         navbarToggler.click();
//       });
//     }
//   }
// });
