window.addEventListener('DOMContentLoaded', function() {

const menuHamb = document.querySelector('.header_hamb');
const menuHidden = document.querySelector('.header_hidden');

menuHamb.addEventListener('click', () => {
  menuHamb.classList.toggle('active');
  menuHidden.classList.toggle('active');
  console.log('click');
})


  
  });
  

  // let formName = document.querySelector('.form_name');
  // let formPhone = document.querySelector('.form_phone');
  
  // // const btn = document.querySelector('.form_btn')
  // const btn = document.querySelector('button[type=submit]')

  // btn.addEventListener('click', (event) => {
  //  event.preventDefault();
   
  //  if (formPhone.value !== typeOf(Number)) {
  //   console.log(`Шановний(на) ${formName.value}, введіть коректний номер телефону`);
  //  }
  //   console.log(`Ім'я ${formName.value}, телефон ${formPhone.value}`);
  // })
  