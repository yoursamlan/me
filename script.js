/*http://www.themestarz.net/html/selfer/?storefront=envato-elements
http://thebook.mutationmedia.net/?storefront=envato-elements
http://preview.themeforest.net/item/intima-clean-responsive-resume-template/full_screen_preview/8847426
https://codepen.io/tiffanyadu/full/QpdMmr*/

  /* EFfet d'accueil 
function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');

  var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}

$( document ).ready(function() {
  var speed = 100;
  var delay = $('#mainTitle').text().length * speed + speed;
  typeEffect($('#mainTitle'), speed);
});*/

  /* Burger nav */
$('.burger, .overlay').click(function(){
  $('.burger').toggleClass('clicked');
  $('.overlay').toggleClass('show');
  $('nav').toggleClass('show');
  $('body').toggleClass('overflow');
});

  /* Scroll down */ 
 $(function() {
    $('#arrowDown').click (function() {
      $('html, body').animate({scrollTop: $('#secondSection').offset().top }, 'slow');
      return false;
    });
  });

  /* Parallax sur l'image de fond*/
$(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    console.log(traX);
    $(".title").css({"background-position": traX + "%" + traY + "%"});
  });
});

