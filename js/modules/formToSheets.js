function formToSheets() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbytqT9Ma90_8Sy_gDDETnBJYdWCrgf99Ytq_iYKxtTutseC_Rn93bz9GPMFskh9erTInA/exec'
  const form = document.forms['form_order'];
  

  
  function sendTextShow() {
    const sendText = document.getElementById('sendText');
    setTimeout(
      sendText.style.display = 'block', 2000
    )}

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        sendText.innerHTML = 'Дякуємо, очікуйте на дзвінок!';
        form.style.display = 'none';
        sendTextShow();
      })
      .catch(error => console.error('Error!', error.message));
  })


}

export default formToSheets