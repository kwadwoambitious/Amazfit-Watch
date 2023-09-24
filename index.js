function fixedAlert(){
  const scrollNumber = window.scrollY;
  const alertBar = document.querySelector('.alert');
  if(scrollNumber > 50){
    alertBar.classList.add('fixed');
  }
  else{
    alertBar.classList.remove('fixed');
  }
}