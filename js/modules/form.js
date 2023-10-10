
  const TELEGRAM_BOT_TOKEN = '5876070852:AAEfiOexe0yyV07Ink-OZvwRvaDxMRh9XHo';
  const TELEGRAM_CHAT_ID = '@Imbirka_4e';
  const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`; 
  
  
  const form = document.querySelector('.form'),
        btn = document.querySelector('button[type=submit]'),
        btnClose = document.querySelector('.form_btn-close');
  let formName = document.querySelector('.form_name');
  let formPhone = document.querySelector('.form_phone');
  let formMessage = document.querySelector('.form_message');
  let formResult = document.querySelector('.form_result');
  
  
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
      form.style.display = 'none'; 
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
  
  async function sendFormToTelegram(event) {
    event.preventDefault();
    formResult.textContent = '';
    const {name, phone, message} = Object.fromEntries(new FormData(form).entries());
    const text = `Заявка від ${name}, номер телефону: ${phone}, повідомлення: ${message}`;
  
    try {
      btn.textContent = 'Відправка...'
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
        })
      });
  
      if(response.ok) {
        formResult.textContent = 'Дякуємо, очікуйте на дзвінок!';
        formResult.style.color = 'green';
        form.reset();
      } else {
        throw new Error(response.statusText)
      }
  
    } catch (error) {
      console.error(error);
      formResult.textContent = 'Помилка відправки, спробуйте пізніше';
      formResult.style.color = 'red';
    } finally {
      btn.textContent = 'Відправити'
    }
  }

  






