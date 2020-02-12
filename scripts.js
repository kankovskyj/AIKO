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

 //TOGGLE NAVBAR BUTTON
$('.menu-btn').on('click', function(){
   $('.nav-bar').toggle();
});

//SCROLL TO BIO
$(".scroll-indie-container").click(function() {
  $('html, body').animate({
      scrollTop: $("#bio").offset().top
  }, 3000);
});

$(".nav-bio").click(function() {
  $('html, body').animate({
      scrollTop: $("#bio").offset().top
  }, 1500);
});