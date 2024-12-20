let catalogBtn = document.querySelector('.btn__catalog');
let catalog = document.querySelector('.catalog__wrapper');
let catalogBtnIcon = catalogBtn.children[0];
let catalogBtnIconOpen = 'open';
let catalogOpenClass = 'catalog_open';
catalogBtn.addEventListener ('click', () => {
  catalogBtnAnim();
  catalogOpen();
});

function catalogBtnAnim (){
  
  if(!catalogBtnIcon.classList.contains(catalogBtnIconOpen)) {
    catalogBtnIcon.classList.add(catalogBtnIconOpen);
  }else {
    catalogBtnIcon.classList.remove(catalogBtnIconOpen);
  }

}
function catalogOpen () {
  if(!catalog.classList.contains(catalogOpenClass)) {
    catalog.classList.add(catalogOpenClass);
  }else {
    catalog.classList.remove(catalogOpenClass);
  }
}