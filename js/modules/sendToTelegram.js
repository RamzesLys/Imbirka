async function sendFormToTelegram(event) {
  const TELEGRAM_BOT_TOKEN = '5876070852:AAEfiOexe0yyV07Ink-OZvwRvaDxMRh9XHo';
  const TELEGRAM_CHAT_ID = '@Imbirka_4e';
  const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`; 


  const form = document.querySelector('.form'),
        btn = document.querySelector('button[type=submit]');
      
  let formResult = document.querySelector('.form_result');

function formResultShow () {
    formResult.classList.add('active')
  };

 function formResultHide () {
    formResult.classList.remove('active')
  };

  

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
      formResult.style.color = 'rgb(36, 152, 192)';
      formResultShow();
      setTimeout(formResultHide, 5000);
      form.reset();
      form.style.display = 'none';
    } else {
      throw new Error(response.statusText)
    }

  } catch (error) {
    console.error(error);
    formResult.textContent = 'Помилка відправки, спробуйте пізніше!';
    formResult.style.color = 'red';
    formResultShow();
    setTimeout(formResultHide, 5000);
  } finally {
    btn.textContent = 'Відправити';
  }
}
