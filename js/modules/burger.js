function burgerMenu () {
  console.log('Hi');
  const menuHamb = document.querySelector('.header_hamb');
  const menuHidden = document.querySelector('.header_hidden');
  
  menuHamb.addEventListener('click', () => {
    menuHamb.classList.toggle('active');
    menuHidden.classList.toggle('active');
    console.log('click');
  })  
}


export default burgerMenu;