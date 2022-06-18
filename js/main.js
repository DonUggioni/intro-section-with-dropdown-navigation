'use strict';

const dropdowns = document.querySelectorAll('.dropdown');
const dropdownLinksElements = document.querySelectorAll('.dropdown__links');
const navLinks = document.querySelector('.links');
const arrowIcons = document.querySelectorAll('.arrow__icon');

navLinks.addEventListener('click', function (e) {
  const clicked = e.target.closest('.dropdown');

  dropdownLinksElements.forEach((el) =>
    el.classList.remove('dropdown__links--visible')
  );

  const dropdownLinks = clicked
    .querySelectorAll('.dropdown__links')
    .forEach((el) => {
      el.classList.toggle('dropdown__links--visible');
    });
});
