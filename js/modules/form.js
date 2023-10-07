function form() {
let form = document.querySelector('.form')
let formName = document.querySelector('.form_name');
let formPhone = document.querySelector('.form_phone');
  
// const btn = document.querySelector('.form_btn')
const btn = document.querySelector('button[type=submit]')

btn.addEventListener('click', (event) => {
event.preventDefault();
   
console.log(`Ім'я ${formName.value}, телефон ${formPhone.value}`);
// console.log(form);
form.reset()
  })
}
  
export default form;