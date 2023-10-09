function form() {
const form = document.querySelector('.form'),
      btn = document.querySelector('button[type=submit]'),
      btnClose = document.querySelector('.form_btn-close'),
      wrapper = document.querySelector('.wrapper'),
      URL_APP = 'https://script.google.com/macros/s/AKfycbwm0fR2OYxhoUU4aIS3XTib6-9wuKLuQi5Zo1RuxvmnYmD-UOvPfz4OWZrC7cQigdDYsg/exec'

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
btn.addEventListener('submit', (event) => {
event.preventDefault();
// form.action = URL_APP;

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

  // const name = document.querySelector('[name=name]');
  // const phone = document.querySelector('[name=phone]');
  // const message = document.querySelector('[name=message]');

  // let details = {
  //   name: name.value.trim(),
  //   phone: phone.value.trim(),
  //   message: message.value.trim()
  // };

  // let formBody = [];
  // for (let property in details) {
  //   let encodeKey = encodeURIComponent(property);
  //   let encodeValue = encodeURIComponent(details[property]);
  //   formBody.push(encodeKey + '=' + encodeValue);
  // }

  // formBody = formBody.join('&');

  // const result = await fetch(URL_APP, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  //   },
  //   cors: "no-cors",
  //   body: formBody
  // })
  // .then((res) => res.json())
  // .catch((err) => alert ("Помилка"))

  // if(result.type === 'success') {
  //   name.value = '';
  //   phone.value = '';
  //   message.value ='';
  //   alert('Дякуємо за заявку!')
  // }
  // if (result.type === 'error') {
  //   alert(`Помилка ( ${result.errors})`)
  // }

console.log(`Ім'я ${formName.value}, телефон ${formPhone.value}.
Повідомлення ${formMessage.value}`);
}
// form.reset();

// console.log(form);

  })
}
  
export default form;