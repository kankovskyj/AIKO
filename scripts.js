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

$("#nav").click(function() {
  $(".overlay").toggleClass("hide");
})

$(".js-close").click(function() {
  $(".overlay").toggleClass("hide");
})







// Set the date we're counting down to
var countDownDate = new Date("Jul 17, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Display the result in the element with id="demo"
  document.getElementById("exp-date").innerHTML = days + "d " + hours + "h "
  + minutes + "m";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("exp-date").innerHTML = "EXPIRED";
  }
}, 1000);