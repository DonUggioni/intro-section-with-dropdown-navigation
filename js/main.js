'use strict';

const dropdowns = document.querySelectorAll('.dropdown');
const dropdownLinksElements = document.querySelectorAll('.dropdown__links');
const navLinks = document.querySelector('.links');
const arrowIcons = document.querySelectorAll('.arrow__icon');
const menuOpen = document.querySelector('.mobile__menu-open');
const menuClose = document.querySelector('.mobile__menu-close');
const navBar = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

const removeClass = function (par, cont, el, cl) {
  par.addEventListener('click', (e) => {
    if (e.target.classList.contains(cont)) {
      const clickedDropdown = e.target.closest('.dropdown');
      dropdowns.forEach((dd) => {
        if (dd !== clickedDropdown) {
          dd.querySelector(el).classList.remove(cl);
        }
      });
    }
  });
};

const mobileMenuOpen = function () {
  menuOpen.classList.add('mobile__menu--hidden');
  menuClose.classList.remove('mobile__menu--hidden');
  menuClose.classList.add('mobile__menu--active');
  navBar.classList.add('nav--visible');
  overlay.classList.add('overlay--active');
};

const mobileMenuClose = function () {
  menuOpen.classList.remove('mobile__menu--hidden');
  menuClose.classList.remove('mobile__menu--active');
  menuClose.classList.add('mobile__menu--hidden');
  navBar.classList.remove('nav--visible');
  overlay.classList.remove('overlay--active');
};

// Dropdown menus functionality
dropdowns.forEach((dropdown) =>
  removeClass(
    dropdown,
    'drop__down-btn',
    '.dropdown__links',
    'dropdown__links--visible'
  )
);

dropdowns.forEach((dd) =>
  removeClass(dd, 'drop__down-btn', '.arrow__icon', 'arrow__icon--open')
);

navLinks.addEventListener('click', function (e) {
  const clicked = e.target.closest('.drop__down-btn');
  if (!clicked) return;

  clicked
    .closest('.dropdown')
    .querySelector('.dropdown__links')
    .classList.toggle('dropdown__links--visible');

  clicked
    .closest('.dropdown')
    .querySelector('.arrow__icon')
    .classList.toggle('arrow__icon--open');
});

// Mobile menu icon
window.addEventListener('resize', function () {
  if (this.window.innerWidth <= 880) {
    menuOpen.classList.remove('mobile__menu--hidden');
    menuOpen.classList.add('mobile__menu--visible');
  } else {
    menuOpen.classList.add('mobile__menu--hidden');
    illustrationMobile.classList.remove('mobile__menu--visible');
  }

  if (this.window.innerWidth >= 880) {
    mobileMenuClose();
  }
});

// Checks for window size on load
window.addEventListener('load', function () {
  if (this.window.innerWidth <= 880) {
    menuOpen.classList.remove('mobile__menu--hidden');
    menuOpen.classList.add('mobile__menu--visible');
  } else {
    menuOpen.classList.add('mobile__menu--hidden');
    menuOpen.classList.remove('mobile__menu--visible');
  }
});

// Opens mobile menu
menuOpen.addEventListener('click', mobileMenuOpen);

// Closes mobile menu
menuClose.addEventListener('click', mobileMenuClose);
