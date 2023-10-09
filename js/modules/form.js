function form() {
const form = document.querySelector('.form'),
      btn = document.querySelector('button[type=submit]'),
      btnClose = document.querySelector('.form_btn-close'),
      wrapper = document.querySelector('.wrapper');

let formName = document.querySelector('.form_name');
let formPhone = document.querySelector('.form_phone');
let formMessage = document.querySelector('.form_message')


setTimeout(() => {
  form.style.display = 'inherit';
}, 3000);

const closeModal = (e) => {
  e.preventDefault();
  form.style.display = 'none';
}

//клік за межами вікна
document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(form);
	if ( ! withinBoundaries ) {
		form.style.display = 'none'; // скрываем элемент т к клик был за его пределами
  }
})

//клік Esc
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    form.style.display = 'none';
  }
})

btnClose.addEventListener('click', closeModal);


//відправка форми
btn.addEventListener('click', (event) => {
event.preventDefault();
if (formName.value === '' || formPhone.value === '') {
  console.log('Ви ввели не всі дані');
  if (formName.value === '') {
    formName.style.border = 'red 3px solid';
  } else {
    formName.style.border = 'green 3px solid'
  }
  if (formPhone.value === '') {
    formPhone.style.border = 'red 3px solid';
  } else {
    formPhone.style.border = 'green 3px solid';
  }
} else {
  form.style.display = 'none';

console.log(`Ім'я ${formName.value}, телефон ${formPhone.value}.
Повідомлення ${formMessage.value}`);
}
// form.reset();

// console.log(form);

  })
}
  
export default form;