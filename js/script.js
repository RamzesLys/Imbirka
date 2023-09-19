window.addEventListener('DOMContentLoaded', function() {

  // const tastes = document.querySelectorAll('.description_tastes');
  // let img = document.innerText = `<img src="img/Logo.svg" alt="Big Logo">`;

  // tastes.forEach((e) => {
  // e.prepend(img)
  //   console.log(e);
  // }) 


  
  });
  

  // let formName = document.querySelector('.form_name');
  // let formPhone = document.querySelector('.form_phone');
  
  // // const btn = document.querySelector('.form_btn')
  // const btn = document.querySelector('button[type=submit]')

  // btn.addEventListener('click', (event) => {
  //  event.preventDefault();
   
  //  if (!formPhone.value ) {
  //   console.log(`Шановний(на) ${formName.value}, введіть коректний номер телефону`);
  //  }
  //   console.log(`Ім'я ${formName.value}, телефон ${formPhone.value}`);
  // })
  
  let form = document.querySelector('.form'),
      formInputs = document.querySelectorAll('.imput-form'),
      imputName = document.querySelector('.form-name'),
      imputPhone = document.querySelector('.form-phone');

  form.onsubmit = function (event) {
    event.preventDefault();
    let phoneVal = imputPhone.value;

    formInputs.forEach((imput) => {
      if (imput.value === '') {
        console.log('Порожні поля');
      }
    })
    return false
  }


<<<<<<< HEAD
=======
  btn.addEventListener('submit', (event) => {
   event.preventDefault();
   
   if (formPhone.value !== typeOf(Number)) {
    console.log(`Шановний(на) ${formName.value}, введіть коректний номер телефону`);
   }
    console.log(`Ім'я ${formName.value}, телефон ${formPhone.value}`);
  })
  
>>>>>>> bb52505c08c01f3a124f50e98ee4448b107a707e
