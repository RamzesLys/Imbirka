function formShow() {
  

  const form = document.querySelector('.form'),
        btn = document.querySelector('button[type=submit]'),
        btnClose = document.querySelector('.form_btn-close');
   
  setTimeout(() => {
    form.style.display = 'inherit';
  }, 2000);
    
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

}


export default formShow





