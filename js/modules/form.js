function form() {
const form = document.querySelector('.form'),
      btn = document.querySelector('button[type=submit]'),
      btnClose = document.querySelector('.form_btn-close'),
      formWrapper = document.querySelector('.form_wrapper'),
      wrapper = document.querySelector('.wrapper');

let formName = document.querySelector('.form_name');
let formPhone = document.querySelector('.form_phone');


setTimeout(() => {
  formWrapper.style.display = 'inherit';
  // wrapper.classList.add('overlay')
}, 5000);

btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  formWrapper.style.display = 'none';
});

btn.addEventListener('click', (event) => {
event.preventDefault();
   
console.log(`Ім'я ${formName.value}, телефон ${formPhone.value}`);
// console.log(form);
form.reset()
  })
}
  
export default form;