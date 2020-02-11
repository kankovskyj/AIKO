 //NAV BUTTON OPEN/CLOSE 
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


//FADE THE INDICATOR
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#fade-out').addClass('dissapear');
    } else {
       //$('#fade-out').removeClass('dissapear');
    }
});

//OPEN MENU


 //
$('.menu-btn').on('click', function(){
   $('.nav-bar').toggle();
});