function form() {
const form = document.querySelector('.form'),
      btn = document.querySelector('button[type=submit]'),
      btnClose = document.querySelector('.form_btn-close'),
      formWrapper = document.querySelector('.form_wrapper'),
      wrapper = document.querySelector('.wrapper');

let formName = document.querySelector('.form_name');
let formPhone = document.querySelector('.form_phone');

const closeModal = (e) => {
  e.preventDefault();
 
  
}

document.addEventListener('click', (e) => {
  if (e.target !== form) {
    formWrapper.style.display = 'none';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    formWrapper.style.display = 'none';
  }
})


setTimeout(() => {
  formWrapper.style.display = 'inherit';
}, 5000);

btnClose.addEventListener('click', closeModal);


btn.addEventListener('click', (event) => {
event.preventDefault();
   
console.log(`Ім'я ${formName.value}, телефон ${formPhone.value}`);
// console.log(form);
form.reset()
  })
}
  
export default form;