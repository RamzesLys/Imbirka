window.addEventListener('DOMContentLoaded', function() {

  // const tastes = document.querySelectorAll('.description_tastes');
  // let img = document.innerText = `<img src="img/Logo.svg" alt="Big Logo">`;

  // tastes.forEach((e) => {
  // e.prepend(img)
  //   console.log(e);
  // }) 

 
  
  });
  


  let formName = document.querySelector('.form_name');
  let formPhone = document.querySelector('.form_phone');
  
  const btn = document.querySelector('.form_btn')

  btn.addEventListener('submit', () => {
   event.preventDefault();
   
   if (formPhone.value == 'string') {
    console.log(`Шановний(на) ${formName.value}, введіть коректний номер телефону`);
   }
    console.log(`Ім'я ${formName.value}, телефон ${formPhone.value}`);
  })
  