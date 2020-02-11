//FADE THE INDICATOR
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#fade-out').addClass('dissapear');
    } else {
       //$('#fade-out').removeClass('dissapear');
    }
});