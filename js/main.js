'use strict';

const dropdowns = document.querySelectorAll('.dropdown');
const dropdownLinksElements = document.querySelectorAll('.dropdown__links');
const navLinks = document.querySelector('.links');
const arrowIcons = document.querySelectorAll('.arrow__icon');

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
