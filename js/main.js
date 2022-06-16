'use strict';

const dropdowns = document.querySelectorAll('.dropdown');
const dropdownLinksElements = document.querySelectorAll('.dropdown__links');
const navLinks = document.querySelector('.links');
const arrowIcons = document.querySelectorAll('.arrow__icon');

navLinks.addEventListener('click', function (e) {
  const clicked = e.target.closest('.dropdown');
  const dropdownLinks = clicked.querySelector('.dropdown__links');
  const arrowIcon = clicked.querySelector('.arrow__icon');

  dropdownLinks.classList.toggle('dropdown__links--visible');
  arrowIcon.classList.toggle('arrow__icon--open');
});
