$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
//FADE THE INDICATOR
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#fade-out').addClass('dissapear');
    } else {
       //$('#fade-out').removeClass('dissapear');
    }
});

//SCROLL TO BIO
$(".scroll-indie-container").click(function() {
  $('html, body').animate({
      scrollTop: $("#bio").offset().top
  }, 3000);
});


$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('progress-icon').addClass('.fill-icon');
  } else {
     //$('#fade-out').removeClass('dissapear');
  }
});