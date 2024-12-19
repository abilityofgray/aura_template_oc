"use strict"

let currencyBtn = document.querySelector('.currency__button');
let curencyDropList = document.querySelector('.currency__list');

currencyBtn.addEventListener('click', () => {
  currencyDropMenu ();
})

function currencyDropMenu () {
  let dropActive = 'dropdown_active';
  if(curencyDropList.classList.contains(dropActive)) {
    curencyDropList.classList.remove(dropActive);
  } else {
    curencyDropList.classList.add(dropActive);
  }
}