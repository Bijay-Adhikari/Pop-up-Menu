let detail = document.querySelector('.btn');
let popUp = document.querySelector('.pop-up');
let close = document.querySelector('.close');

detail.addEventListener('click', showDetails)
close.addEventListener('click',hideDetails)

function showDetails(){
  
  popUp.style.visibility = 'visible'
  
}


function hideDetails(){
  popUp.style.visibility = 'hidden'
  
}
