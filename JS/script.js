const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
  if(event.type === 'touchstart')
    event.preventDefaut();
    
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
  //-----------------------


function Enviar(){
  const nome = document.querySelector('#nome');

  const email = document.querySelector('#email');
  if(email.value === ''){
    alert('Email é obrigatório')
    return;
  }
  alert('enviado!');

}
